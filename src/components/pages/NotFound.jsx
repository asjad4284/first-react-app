import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[60vh] flex items-center justify-center px-4"
    >
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-9xl font-bold text-amber-500 mb-4"
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
          
          <Link
            to="/menu"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Menu
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Lost? Check out our{' '}
            <Link to="/about" className="text-amber-500 hover:text-amber-600 underline">
              about page
            </Link>
            {' '}or{' '}
            <Link to="/contact" className="text-amber-500 hover:text-amber-600 underline">
              contact us
            </Link>
            {' '}for help.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFound
