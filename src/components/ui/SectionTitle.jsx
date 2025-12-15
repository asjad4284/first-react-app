import { motion } from 'framer-motion'

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignments[align]} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
            light ? 'text-[#d4af37]' : 'text-[#c4a77d]'
          }`}
        >
          — {subtitle} —
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] mb-5 leading-tight ${
          light ? 'text-white' : 'text-[#1a1a2e]'
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`section-divider mb-6 ${align === 'left' ? 'ml-0' : align === 'right' ? 'mr-0 ml-auto' : ''}`}
      />
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle
