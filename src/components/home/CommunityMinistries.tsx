import Link from 'next/link'
import { ArrowRight, Lock, Wheat, type LucideIcon } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ministries, type Ministry } from '@/data/ministries'

const ICON_MAP: Record<Ministry['iconKey'], LucideIcon> = {
  wheat: Wheat,
  lock: Lock,
}

export function CommunityMinistries() {
  return (
    <section className="bg-harvest-cream">
      <div className="container-site section-pad">
        <SectionHeader
          eyebrow="Reaching our community"
          title="Outreach Ministries"
          description="Two hands-on ministries that carry the Gospel into Lewisburg each week."
          align="center"
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {ministries.map((ministry) => {
            const Icon = ICON_MAP[ministry.iconKey]
            return (
              <li
                key={ministry.id}
                className="border border-harvest-earth/15 bg-harvest-offwhite p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-harvest-gold/10">
                  <Icon size={24} className="text-harvest-gold" aria-hidden />
                </div>
                <h3 className="mb-1 font-display text-xl text-harvest-bark">
                  {ministry.title}
                </h3>
                {ministry.tagline && (
                  <p className="mb-3 font-ui text-xs uppercase tracking-widest text-harvest-gold">
                    {ministry.tagline}
                  </p>
                )}
                <p className="mb-5 text-harvest-earth">{ministry.teaser}</p>
                <Link
                  href={`/ministries#${ministry.id}`}
                  className="inline-flex items-center gap-2 font-ui text-sm text-harvest-bark transition-colors hover:text-harvest-gold"
                >
                  Learn more
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
