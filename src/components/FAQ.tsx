'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  category: 'product' | 'shipping' | 'company' | 'organic' | 'coming-soon'
}

const faqData: FAQItem[] = [
  {
    question: "What makes your organic oatmeal soap different from regular soap?",
    answer: "Our organic oatmeal soap is 100% USDA Organic Certified, made with zero synthetic chemicals. It's gentle on all skin types, including sensitive skin and babies, and provides natural exfoliation and moisture retention. Unlike conventional soaps that contain harsh chemicals, our soap works with your body's natural processes.",
    category: 'product'
  },
  {
    question: "Do you offer free shipping and returns?",
    answer: "Yes! We offer free shipping on all orders over $50 and a 30-day return policy. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund. Products must be in original condition.",
    category: 'shipping'
  },
  {
    question: "When will the bamboo towels and organic bedsheets be available?",
    answer: "Our bamboo towels and organic cotton bedsheets are scheduled to launch in Q1 2026. Join our waitlist to get early access and special pricing when they launch. We're building a complete organic wellness system for your home.",
    category: 'coming-soon'
  },
  {
    question: "Are your products safe for babies and children?",
    answer: "Yes! Our organic oatmeal soap is gentle enough for the whole family, including babies and children. The natural, chemical-free formula makes it safe for sensitive skin and daily use by people of all ages.",
    category: 'organic'
  },
  {
    question: "How can I contact customer service?",
    answer: "You can reach our customer service team at hello@snowleafstore.com. We typically respond within 24 hours and are here to help with any questions or concerns.",
    category: 'company'
  }
]

const categoryLabels = {
  'product': 'Product Questions',
  'organic': 'Organic & Health',
  'shipping': 'Shipping & Returns',
  'coming-soon': 'Coming Soon',
  'company': 'Company & Support'
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const categories = ['all', ...Object.keys(categoryLabels)] as const

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm uppercase tracking-widest rounded-full mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our organic products, shipping, and more.
          </p>
        </div>

        {/* Category Filter - Hidden since we only have 5 questions */}
        <div className="hidden">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Questions' : categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => {
            const globalIndex = faqData.indexOf(item)
            const isOpen = openItems.has(globalIndex)
            
            return (
              <div
                key={globalIndex}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(globalIndex)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-light mb-4">Still Have Questions?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:hello@snowleafstore.com"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
