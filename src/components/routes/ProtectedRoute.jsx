import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Skeleton from '../ui/Skeleton'

// Protected Route - Only authenticated users can access
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#c4a77d]"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    // Redirect to sign in page, but save the attempted location
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}

// Admin Route - Only users with role="admin" can access
export const AdminRoute = ({ children }) => {
  const { isAuthenticated, userData, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f5] py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <Skeleton variant="title" className="h-12 w-64 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 space-y-4">
                <Skeleton variant="rectangle" className="h-40" />
                <Skeleton count={3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    // Redirect to sign in page
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  if (userData?.role !== 'admin') {
    // Redirect non-admin users to user dashboard
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export default ProtectedRoute
