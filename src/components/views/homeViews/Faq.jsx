import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '../../ui'
import RevealOnScroll from '../../utils/RevealOnScroll'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: 'What are your opening hours?', answer: 'We are open Monday through Thursday from 11 AM to 10 PM, Friday and Saturday from 11 AM to 11 PM, and Sunday from 12 PM to 9 PM. Our kitchen closes 30 minutes before closing time.' },
    { question: 'Do you offer vegetarian or vegan options?', answer: 'Absolutely! We have a dedicated section on our menu for vegetarian and vegan dishes. Our chef can also modify many of our dishes to accommodate dietary preferences. Just let your server know!' },
    { question: 'Can I make a reservation online?', answer: 'Yes! You can make reservations through our website by clicking the "Book a Table" button. You can also call us directly at +1 (555) 123-4567 for immediate assistance.' },
    { question: 'Do you accommodate large parties?', answer: 'We welcome large parties and group celebrations! Our private dining room can accommodate up to 40 guests. For parties of 10 or more, we recommend calling ahead to ensure we can provide the best experience.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and cash. We also accept Apple Pay and Google Pay for contactless payments.' },
    { question: 'Is there parking available?', answer: 'Yes! We offer complimentary valet parking for dinner guests. There is also street parking available nearby and a public parking garage within a 2-minute walk.' },
  ]

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Have Questions?" title="Frequently Asked Questions" description="Find answers to the most common questions about dining at Delicious Bites" />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 0.05}>
              <motion.div className="bg-white rounded-2xl shadow-lg border border-[#e5e1db]/50 overflow-hidden" initial={false}>
                <motion.button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 flex items-center justify-between text-left" whileHover={{ backgroundColor: 'rgba(196, 167, 125, 0.05)' }}>
                  <span className="text-lg font-semibold text-[#1a1a2e] pr-8">{faq.question}</span>
                  <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#c4a77d]/20 to-[#d4af37]/10 rounded-full flex items-center justify-center text-[#c4a77d]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </motion.span>
                </motion.button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-[#e5e1db]/50 pt-4">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.a href="/contact" className="inline-flex items-center gap-2 text-[#c4a77d] font-semibold hover:text-[#b8956a] transition-colors" whileHover={{ x: 5 }}>
            Contact Us <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Faq
