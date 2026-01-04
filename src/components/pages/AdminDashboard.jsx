import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { getAllItems, deleteItem } from '../../services/firestoreService'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'

const AdminDashboard = () => {
  const { user, userData } = useAuth()
  const [items, setItems] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [deleteLoading, setDeleteLoading] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      // Fetch all items
      const itemsData = await getAllItems()
      setItems(itemsData)

      // Fetch all users
      const usersSnapshot = await getDocs(collection(db, 'users'))
      const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setUsers(usersData)
    } catch (error) {
      setError('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteItem = async (itemId) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return
    
    setDeleteLoading(itemId)
    try {
      await deleteItem(itemId)
      setItems(items.filter(item => item.id !== itemId))
    } catch (error) {
      alert('Failed to delete item')
    } finally {
      setDeleteLoading(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#c4a77d]"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#faf8f5] py-8 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1a1a2e]">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-2">Welcome back, {userData?.displayName || user?.email}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full uppercase">
            Admin
          </span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e1db]/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Items</p>
                <p className="text-3xl font-bold text-[#1a1a2e]">{items.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#c4a77d]/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e1db]/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-[#1a1a2e]">{users.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e1db]/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Admin Users</p>
                <p className="text-3xl font-bold text-[#1a1a2e]">
                  {users.filter(u => u.role === 'admin').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👑</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {['overview', 'items', 'users'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl font-semibold text-sm capitalize transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#c4a77d] text-white'
                  : 'bg-white text-gray-600 hover:bg-[#c4a77d]/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-[#e5e1db]/50 overflow-hidden"
        >
          {activeTab === 'overview' && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/create-item"
                  className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-xl hover:bg-[#c4a77d]/10 transition-colors"
                >
                  <span className="text-2xl">➕</span>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">Create New Item</p>
                    <p className="text-sm text-gray-500">Add a new menu item</p>
                  </div>
                </Link>
                <Link
                  to="/items"
                  className="flex items-center gap-4 p-4 bg-[#faf8f5] rounded-xl hover:bg-[#c4a77d]/10 transition-colors"
                >
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">View All Items</p>
                    <p className="text-sm text-gray-500">Manage existing items</p>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'items' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#faf8f5]">
                  <tr>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Item</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Price</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Created By</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t border-[#e5e1db]">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image || 'https://via.placeholder.com/50'}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-semibold text-[#1a1a2e]">{item.name}</p>
                            <p className="text-sm text-gray-500 truncate max-w-[200px]">{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#c4a77d] font-semibold">${item.price}</td>
                      <td className="p-4 text-gray-500 text-sm">{item.createdBy || 'Unknown'}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            to={`/edit-item/${item.id}`}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={deleteLoading === item.id}
                            className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors disabled:opacity-50"
                          >
                            {deleteLoading === item.id ? '...' : 'Delete'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {items.length === 0 && (
                <p className="text-center py-8 text-gray-500">No items found</p>
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#faf8f5]">
                  <tr>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">User</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Email</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Role</th>
                    <th className="text-left p-4 font-semibold text-[#1a1a2e]">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-t border-[#e5e1db]">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {u.photoURL ? (
                            <img src={u.photoURL} alt="" className="w-10 h-10 rounded-full" />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-[#c4a77d] flex items-center justify-center text-white font-semibold">
                              {u.displayName?.charAt(0) || u.email?.charAt(0) || 'U'}
                            </div>
                          )}
                          <span className="font-medium text-[#1a1a2e]">{u.displayName || 'No name'}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-500">{u.email}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          u.role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {u.role || 'user'}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500 capitalize">{u.provider || 'email'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AdminDashboard
