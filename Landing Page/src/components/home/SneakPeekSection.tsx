import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from 'react'
import { SCREENSHOTS } from '@/lib/constants'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function SneakPeekSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })],
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="sneak-peek" className="bg-surface py-20 md:py-28">
      <div className="container-main">
        <ScrollReveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-label mb-3">App Previews</p>
            <h2 className="section-heading">A glimpse into the product flow</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous screenshot"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-heading/10 bg-white text-heading transition-colors hover:bg-primary"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next screenshot"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-heading/10 bg-white text-heading transition-colors hover:bg-primary"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="scale" delay={0.15}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {SCREENSHOTS.map((shot) => (
                <div
                  key={shot.src}
                  className="min-w-0 flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <figure className="card-surface overflow-hidden">
                    <img
                      src={shot.src}
                      alt={`Worldener app — ${shot.label}`}
                      className="aspect-[9/16] w-full object-cover object-top"
                      loading="lazy"
                    />
                    <figcaption
                      className="px-4 py-3 text-center text-sm font-medium text-heading"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {shot.label}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
