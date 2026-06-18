import { useEffect } from 'react'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { ALL_FAQS, FAQ_CATEGORIES } from '@/content/faqs'

export function FaqsPage() {
  useEffect(() => {
    document.title = 'FAQs — Worldener'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: ALL_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-main max-w-3xl text-center md:mx-auto">
          <p className="section-label mb-3">Support</p>
          <h1 className="section-heading mb-4">Frequently Asked Questions</h1>
          <p className="text-sm leading-relaxed text-body md:text-base">
            Everything you need to know about Worldener — from getting started to privacy and
            support.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-main max-w-3xl space-y-12">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id}>
              <h2
                className="mb-4 text-xl font-semibold text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {category.title}
              </h2>
              <FaqAccordion items={category.items} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
