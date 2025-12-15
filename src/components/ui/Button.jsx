import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden'

  const variants = {
    primary:
      'bg-gradient-to-r from-[#c4a77d] to-[#b8956a] text-white shadow-lg shadow-[#c4a77d]/30 hover:shadow-xl hover:shadow-[#c4a77d]/40',
    secondary:
      'bg-transparent border-2 border-[#c4a77d] text-[#c4a77d] hover:bg-[#c4a77d] hover:text-white',
    outline:
      'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e]',
    ghost:
      'bg-transparent text-[#1a1a2e] hover:bg-[#c4a77d]/10',
    dark:
      'bg-[#1a1a2e] text-white hover:bg-[#16213e] shadow-lg shadow-[#1a1a2e]/20',
    gold:
      'bg-gradient-to-r from-[#d4af37] to-[#c4a77d] text-[#1a1a2e] font-bold shadow-lg shadow-[#d4af37]/30',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm tracking-wide',
    md: 'px-7 py-3.5 text-sm tracking-wider',
    lg: 'px-9 py-4 text-base tracking-wider',
    xl: 'px-12 py-5 text-lg tracking-wider',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const MotionComponent = motion.create ? motion.create('button') : motion.button

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  )

  // If it's a router link
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={classes} {...props}>
          {buttonContent}
        </Link>
      </motion.div>
    )
  }

  // If it's an external link
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes} 
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  // Default button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button
