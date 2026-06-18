import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FaqItem } from '@/content/faqs'

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-black/5 rounded-[var(--radius-card)] border border-black/5 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span
                className="font-medium text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={cn(
                  'shrink-0 text-accent transition-transform',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed md:text-base">
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
