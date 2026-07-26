'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    id: '1',
    question: 'How do I book a tattoo appointment?',
    answer: 'Click the "Book Now" button to start the booking process. Choose your preferred artist, select a date and time, and fill in your design details. We\'ll confirm your appointment and discuss your design during a consultation call.',
  },
  {
    id: '2',
    question: 'Do I need a design beforehand?',
    answer: 'No! Our artists can work with you to create a custom design. Bring reference images, ideas, or just a vague concept and we\'ll help you develop it into the perfect tattoo.',
  },
  {
    id: '3',
    question: 'What\'s your aftercare process?',
    answer: 'We provide detailed written aftercare instructions with every tattoo. Proper aftercare is crucial for healing and color retention. Follow our guidelines for the best results.',
  },
  {
    id: '4',
    question: 'Do you offer cover-ups?',
    answer: 'Yes! We specialize in cover-ups and reworks. Our experienced artists can transform any old or unwanted tattoo into something beautiful and new.',
  },
  {
    id: '5',
    question: 'What\'s your cancellation policy?',
    answer: 'Cancellations made 48 hours in advance receive a full refund. Cancellations within 48 hours forfeit the deposit but can be rescheduled.',
  },
  {
    id: '6',
    question: 'How much should I tip?',
    answer: 'Tipping is always appreciated but never required. Most clients tip 15-20% of the tattoo price. Tips can be given in cash or card.',
  },
]

function FAQItem({ question, answer }: { id: string; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between gap-4 text-left group"
      >
        <span className="font-medium text-foreground text-[15px] group-hover:text-accent transition-colors">{question}</span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="px-4 md:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-accent tracking-wider uppercase">Questions?</span>
          <h2 className="mt-3 text-foreground">Frequently Asked Questions</h2>
        </div>

        {/* FAQs */}
        <div className="bg-card border border-border rounded-xl p-1 md:p-2">
          <div className="divide-y divide-border/30 px-4 md:px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
