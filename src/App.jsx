import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './components/layouts/MainLayout'
import HomePage from './components/pages/Home'
import MenuPage from './components/pages/Menu'
import AboutPage from './components/pages/About'
import ContactPage from './components/pages/Contact'
import ReservationPage from './components/pages/Reservation'
import SignInPage from './components/pages/Sign_in'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="reservation" element={<ReservationPage />} />
        </Route>
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
