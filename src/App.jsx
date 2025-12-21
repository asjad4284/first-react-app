import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './components/layouts/MainLayout'
import HomePage from './components/pages/Home'
import MenuPage from './components/pages/Menu'
import AboutPage from './components/pages/About'
import ContactPage from './components/pages/Contact'
import ReservationPage from './components/pages/Reservation'
import SignInPage from './components/pages/Sign_in'
import CreateItemPage from './components/pages/CreateItem'
import ViewAllItemsPage from './components/pages/ViewAllItems'
import ViewItemPage from './components/pages/ViewItem'
import EditItemPage from './components/pages/EditItem'

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
          <Route path="create-item" element={<CreateItemPage />} />
          <Route path="items" element={<ViewAllItemsPage />} />
          <Route path="item/:id" element={<ViewItemPage />} />
          <Route path="edit-item/:id" element={<EditItemPage />} />
        </Route>
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
