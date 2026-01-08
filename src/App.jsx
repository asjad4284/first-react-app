import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute, AdminRoute } from './components/routes/ProtectedRoute'
import LoadingFallback from './components/ui/LoadingFallback'
import PageTransition from './components/utils/PageTransition'

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
              <Route index element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="menu" element={<PageTransition><MenuPage /></PageTransition>} />
              <Route path="about" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="reservation" element={<PageTransition><ReservationPage /></PageTransition>} />
              <Route path="items" element={<PageTransition><ViewAllItemsPage /></PageTransition>} />
              <Route path="item/:id" element={<PageTransition><ViewItemPage /></PageTransition>} />
              
              {/* Protected Routes - Requires Authentication */}
              <Route path="profile" element={
                <ProtectedRoute>
                  <PageTransition><ProfilePage /></PageTransition>
                </ProtectedRoute>
              } />
              <Route path="dashboard" element={
                <ProtectedRoute>
                  <PageTransition><UserDashboard /></PageTransition>
                </ProtectedRoute>
              } />
              <Route path="create-item" element={
                <ProtectedRoute>
                  <PageTransition><CreateItemPage /></PageTransition>
                </ProtectedRoute>
              } />
              <Route path="edit-item/:id" element={
                <ProtectedRoute>
                  <PageTransition><EditItemPage /></PageTransition>
                </ProtectedRoute>
              } />
              
              {/* Admin Routes - Requires Admin Role */}
              <Route path="admin" element={
                <AdminRoute>
                  <PageTransition><AdminDashboard /></PageTransition>
                </AdminRoute>
              } />
              
              {/* 404 Not Found - Inside MainLayout */}
              <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
            </Route>
            
            {/* Auth Route - Outside MainLayout (no footer) */}
            <Route path="/signin" element={<PageTransition><SignInPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </AuthProvider>
  )
}

export default App
