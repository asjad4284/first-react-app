import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getItemById, deleteItem } from '../../services/firestoreService'
import { useAuth } from '../../context/AuthContext'

export default function ViewItemPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, userData, isAuthenticated } = useAuth()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const isAdmin = userData?.role === 'admin'
  const isOwner = item?.createdBy === user?.uid
  const canModify = isAdmin || isOwner

  useEffect(() => {
    fetchItem()
  }, [id])

  const fetchItem = async () => {
    try {
      setLoading(true)
      setError(null)
      const fetchedItem = await getItemById(id)
      setItem(fetchedItem)
    } catch (err) {
      setError('Failed to load item')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-center"
      >
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <p className="mt-4 text-gray-600">Loading item...</p>
        </div>
      </motion.div>
    )
  }

  if (error || !item) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-center"
      >
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Item not found'}</p>
          <button
            onClick={() => navigate('/items')}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            Back to Items
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/items')}
          className="mb-6 text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2"
        >
          ← Back to Items
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>

              <div className="border-t pt-6">
                <p className="text-3xl font-bold text-orange-500 mb-4">
                  ${item.price.toFixed(2)}
                </p>
                {item.createdByEmail && (
                  <p className="text-sm text-gray-500">
                    Created by: {item.createdByEmail}
                  </p>
                )}
              </div>

              <div className="flex gap-4 pt-6">
                {canModify && (
                  <>
                    <button
                      onClick={() => navigate(`/edit-item/${item.id}`)}
                      className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-medium"
                    >
                      Edit Item
                    </button>
                    <button
                      onClick={async () => {
                        if (!window.confirm('Are you sure you want to delete this item?')) return
                        setDeleteLoading(true)
                        try {
                          await deleteItem(item.id, userData?.role)
                          navigate('/items')
                        } catch (err) {
                          alert(err.message || 'Failed to delete item')
                        } finally {
                          setDeleteLoading(false)
                        }
                      }}
                      disabled={deleteLoading}
                      className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition font-medium disabled:opacity-50"
                    >
                      {deleteLoading ? 'Deleting...' : 'Delete Item'}
                    </button>
                  </>
                )}
                <button
                  onClick={() => navigate('/items')}
                  className={`${canModify ? '' : 'flex-1'} bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition font-medium`}
                >
                  Back to Menu
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
