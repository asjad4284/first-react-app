import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import { motion } from 'framer-motion'
import { deleteItem } from '../../services/firestoreService'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'
import { useAuth } from '../../context/AuthContext'

export default function ViewAllItemsPage() {
  const navigate = useNavigate()
  const { user, userData, isAuthenticated } = useAuth()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const unsubscribeRef = useRef(null)

  const isAdmin = userData?.role === 'admin'
  
  // Check if user can modify a specific item
  const canModifyItem = (item) => {
    if (!isAuthenticated) return false
    if (isAdmin) return true
    return item.createdBy === user?.uid
  }

  useEffect(() => {
    // Only set up listener once
    if (unsubscribeRef.current) {
      return
    }

    try {
      const itemsRef = collection(db, 'items')
      
      unsubscribeRef.current = onSnapshot(
        itemsRef,
        (snapshot) => {
          try {
            const fetchedItems = []
            
            snapshot.forEach((doc) => {
              const data = doc.data()
              fetchedItems.push({ 
                id: doc.id, 
                ...data,
                price: data.price || 0,
                name: data.name || 'Unnamed',
                description: data.description || '',
                image: data.image || 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=2070'
              })
            })
            
            setItems(fetchedItems)
            setLoading(false)
            setError(null)
          } catch (err) {
            console.error('Error processing snapshot:', err)
            setError('Error processing data: ' + err.message)
            setLoading(false)
          }
        },
        (err) => {
          console.error('Firestore listener error:', err)
          
          let errorMsg = 'Failed to load items'
          if (err.code === 'permission-denied') {
            errorMsg = 'Permission denied. Check Firestore security rules.'
          } else if (err.code === 'not-found') {
            errorMsg = 'Collection not found in Firestore.'
          }
          
          setError(errorMsg)
          setLoading(false)
        }
      )
    } catch (err) {
      console.error('Setup error:', err)
      setError('Failed to set up listener: ' + err.message)
      setLoading(false)
    }

    // Cleanup
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current()
        unsubscribeRef.current = null
      }
    }
  }, [])

  const handleDelete = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        setDeletingId(itemId)
        await deleteItem(itemId, userData?.role)
        // Update UI immediately after deletion
        setItems(items.filter(item => item.id !== itemId))
      } catch (err) {
        alert(err.message || 'Failed to delete item')
        console.error('Error:', err)
      } finally {
        setDeletingId(null)
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  // Log render state
  console.log('RENDER STATE - loading:', loading, 'items.length:', items.length, 'error:', error)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <SectionTitle
            title="All Items"
            subtitle="Browse our complete menu"
          />
          <button
            onClick={() => navigate('/create-item')}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300 font-medium"
          >
            Add New Item
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              <p className="mt-4 text-gray-600">Loading items...</p>
            </div>
          </div>
        )}

        {!loading && items.length === 0 && (
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <p className="text-gray-600 mb-4">No items found</p>
              <button
                onClick={() => navigate('/create-item')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Create First Item
              </button>
            </div>
          </div>
        )}

        {!loading && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=2070'
                  }}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-orange-500 font-bold text-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.createdBy === user?.uid && (
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        Your Item
                      </span>
                    )}
                  </div>
                  <div className={`grid ${canModifyItem(item) ? 'grid-cols-3' : 'grid-cols-1'} gap-2`}>
                    <button
                      onClick={() => navigate(`/item/${item.id}`)}
                      className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600 transition"
                    >
                      View
                    </button>
                    {canModifyItem(item) && (
                      <>
                        <button
                          onClick={() => navigate(`/edit-item/${item.id}`)}
                          className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deletingId === item.id}
                          className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition disabled:bg-gray-400"
                        >
                          {deletingId === item.id ? '...' : 'Delete'}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

