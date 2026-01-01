import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

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
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#c4a77d]"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
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
