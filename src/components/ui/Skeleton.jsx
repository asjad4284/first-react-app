import { motion } from 'framer-motion'

const Skeleton = ({ className = '', variant = 'default', count = 1 }) => {
  const baseClasses = 'relative overflow-hidden bg-gray-200 rounded before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'
  
  const variants = {
    default: 'h-4 w-full',
    text: 'h-4 w-3/4',
    title: 'h-8 w-1/2',
    circle: 'h-12 w-12 rounded-full',
    rectangle: 'h-48 w-full',
    card: 'h-96 w-full',
  }

  const variantClass = variants[variant] || variants.default

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={`${baseClasses} ${variantClass} ${className}`} />
        ))}
      </div>
    )
  }

  return <div className={`${baseClasses} ${variantClass} ${className}`} />
}

// Skeleton Card for item listings
export const SkeletonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Image skeleton */}
      <Skeleton variant="rectangle" className="h-48" />
      
      <div className="p-4 space-y-3">
        {/* Title skeleton */}
        <Skeleton variant="title" className="h-6 w-3/4" />
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
        
        {/* Price and badge skeleton */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        
        {/* Buttons skeleton */}
        <div className="grid grid-cols-3 gap-2">
          <Skeleton className="h-8 w-full rounded" />
          <Skeleton className="h-8 w-full rounded" />
          <Skeleton className="h-8 w-full rounded" />
        </div>
      </div>
    </motion.div>
  )
}

// Skeleton for single item view
export const SkeletonItemDetail = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Image skeleton */}
          <div className="md:w-1/2">
            <Skeleton variant="rectangle" className="h-96 md:h-full rounded-none" />
          </div>
          
          {/* Content skeleton */}
          <div className="md:w-1/2 p-8 space-y-6">
            <Skeleton variant="title" className="h-10 w-3/4" />
            
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            
            <Skeleton className="h-12 w-32" />
            
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
            
            <div className="flex gap-3">
              <Skeleton className="h-12 w-32 rounded-lg" />
              <Skeleton className="h-12 w-32 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Skeleton for table rows (Admin Dashboard)
export const SkeletonTable = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 p-4 bg-white rounded-lg">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-6 flex-1" />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Skeleton
