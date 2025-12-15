import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  rounded = 'lg',
  shadow = 'md',
  ...props
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  const roundeds = {
    none: '',
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  }

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    premium: 'shadow-[0_10px_40px_rgba(0,0,0,0.08)]',
  }

  const baseClasses = `
    bg-white 
    ${paddings[padding]} 
    ${roundeds[rounded]} 
    ${shadows[shadow]}
    border border-[#e5e1db]/50
    ${className}
  `

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ 
          y: -8, 
          boxShadow: '0 25px 50px rgba(26, 26, 46, 0.12), 0 10px 20px rgba(196, 167, 125, 0.08)'
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  )
}

export default Card
