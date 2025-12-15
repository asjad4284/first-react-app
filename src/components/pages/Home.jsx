import { motion } from 'framer-motion'
import Hero from '../views/homeViews/Hero'
import FeaturedMenu from '../views/homeViews/FeaturedMenu'
import AboutPreview from '../views/homeViews/AboutPreview'
import Testimonials from '../views/homeViews/Testimonials'
import Faq from '../views/homeViews/Faq'
import CallToAction from '../views/homeViews/CallToAction'

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedMenu />
      <AboutPreview />
      <Testimonials />
      <Faq />
      <CallToAction />
    </motion.div>
  )
}

export default HomePage
