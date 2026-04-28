import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/data/site'

export function HeroSection() {
  return (
    <section className="bg-harvest-offwhite border-b border-harvest-earth/10">
      <div className="container-site py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-ui text-xs uppercase tracking-widest text-harvest-gold mb-4">
              {SITE.address.city}, {SITE.address.state}
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-harvest-bark leading-tight">
              {SITE.name}
            </h1>
            {/* TODO: REPLACE — site intro / vision tagline, confirm copy with client */}
            <p className="mt-6 max-w-xl text-lg text-harvest-earth">
              A small fellowship gathering for worship, study of God&apos;s Word,
              and care for our neighbors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-harvest-gold px-6 py-3 font-medium text-harvest-white transition-colors hover:bg-harvest-bark focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-bark focus-visible:outline-offset-2"
              >
                Who we are
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href="/teachings"
                className="inline-flex items-center gap-2 border-2 border-harvest-bark px-6 py-3 font-medium text-harvest-bark transition-colors hover:bg-harvest-bark hover:text-harvest-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-gold focus-visible:outline-offset-2"
              >
                Watch
              </Link>
            </div>
          </div>

          {/* TODO: REPLACE — Pastor Dan photo (use next/image with alt/width/height) */}
          <div
            aria-hidden
            className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-harvest-earth/20 bg-harvest-bark/10"
          >
            <span className="font-ui text-xs uppercase tracking-widest text-harvest-earth">
              Pastor photo coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
