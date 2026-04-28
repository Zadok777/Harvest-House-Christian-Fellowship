import Link from 'next/link'
import { PlayCircle } from 'lucide-react'
import type { Teaching } from '@/data/teachings'
import { TeachingCard } from '@/components/teachings/TeachingCard'

interface TeachingGridProps {
  teachings: Teaching[]
}

export function TeachingGrid({ teachings }: TeachingGridProps) {
  if (teachings.length === 0) {
    return (
      <div className="border border-dashed border-harvest-earth/30 bg-harvest-offwhite px-6 py-16 text-center">
        <PlayCircle
          size={48}
          className="mx-auto mb-4 text-harvest-gold"
          aria-hidden
        />
        <h3 className="mb-2 font-display text-2xl text-harvest-bark">
          Teachings coming soon
        </h3>
        <p className="mx-auto max-w-md text-harvest-earth">
          Recordings from our Sunday services and Wednesday studies will be
          posted here as they&apos;re available.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block font-ui text-harvest-gold hover:text-harvest-bark transition-colors"
        >
          Visit us in person →
        </Link>
      </div>
    )
  }

  const sorted = [...teachings].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((teaching) => (
        <li key={teaching.id}>
          <TeachingCard teaching={teaching} />
        </li>
      ))}
    </ul>
  )
}
