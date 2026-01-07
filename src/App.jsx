import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute, AdminRoute } from './components/routes/ProtectedRoute'
import LoadingFallback from './components/ui/LoadingFallback'

// Lazy load layout
const MainLayout = lazy(() => import('./components/layouts/MainLayout'))

// Lazy load page components
const HomePage = lazy(() => import('./components/pages/Home'))
const MenuPage = lazy(() => import('./components/pages/Menu'))
const AboutPage = lazy(() => import('./components/pages/About'))
const ContactPage = lazy(() => import('./components/pages/Contact'))
const ReservationPage = lazy(() => import('./components/pages/Reservation'))
const SignInPage = lazy(() => import('./components/pages/Sign_in'))
const ProfilePage = lazy(() => import('./components/pages/Profile'))
const UserDashboard = lazy(() => import('./components/pages/UserDashboard'))
const AdminDashboard = lazy(() => import('./components/pages/AdminDashboard'))
const CreateItemPage = lazy(() => import('./components/pages/CreateItem'))
const ViewAllItemsPage = lazy(() => import('./components/pages/ViewAllItems'))
const ViewItemPage = lazy(() => import('./components/pages/ViewItem'))
const EditItemPage = lazy(() => import('./components/pages/EditItem'))
const NotFoundPage = lazy(() => import('./components/pages/NotFound'))

function App() {
  const location = useLocation()

  return (
    <AuthProvider>
      <Suspense fallback={<LoadingFallback />}>
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
              
              {/* 404 Not Found - Inside MainLayout */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            
            {/* Auth Route - Outside MainLayout (no footer) */}
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </AuthProvider>
  )
}

export default App
