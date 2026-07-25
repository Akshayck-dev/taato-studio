'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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

function FAQItem({ id, question, answer }: { id: string; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 md:py-6 flex items-start justify-between gap-4 hover:text-accent transition-colors text-left group"
      >
        <span className="font-semibold text-base md:text-lg group-hover:text-accent transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="pb-4 md:pb-6 text-foreground/60 text-sm md:text-base">{answer}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-10 md:py-14 px-4 md:px-8 bg-secondary/5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-4 inline-block">
            Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQs */}
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
