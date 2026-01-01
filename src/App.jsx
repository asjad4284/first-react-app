import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute, AdminRoute } from './components/routes/ProtectedRoute'
import MainLayout from './components/layouts/MainLayout'
import HomePage from './components/pages/Home'
import MenuPage from './components/pages/Menu'
import AboutPage from './components/pages/About'
import ContactPage from './components/pages/Contact'
import ReservationPage from './components/pages/Reservation'
import SignInPage from './components/pages/Sign_in'
import ProfilePage from './components/pages/Profile'
import UserDashboard from './components/pages/UserDashboard'
import AdminDashboard from './components/pages/AdminDashboard'
import CreateItemPage from './components/pages/CreateItem'
import ViewAllItemsPage from './components/pages/ViewAllItems'
import ViewItemPage from './components/pages/ViewItem'
import EditItemPage from './components/pages/EditItem'

function App() {
  const location = useLocation()

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            {/* Public Routes */}
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="items" element={<ViewAllItemsPage />} />
            <Route path="item/:id" element={<ViewItemPage />} />
            
            {/* Protected Routes - Requires Authentication */}
            <Route path="profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="dashboard" element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />
            <Route path="create-item" element={
              <ProtectedRoute>
                <CreateItemPage />
              </ProtectedRoute>
            } />
            <Route path="edit-item/:id" element={
              <ProtectedRoute>
                <EditItemPage />
              </ProtectedRoute>
            } />
            
            {/* Admin Routes - Requires Admin Role */}
            <Route path="admin" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  )
}

export default App
