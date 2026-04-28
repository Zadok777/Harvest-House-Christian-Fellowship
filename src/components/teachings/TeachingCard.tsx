import Image from 'next/image'
import { PlayCircle, Headphones, Video } from 'lucide-react'
import type { Teaching } from '@/data/teachings'

const YT_RE = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/

function getYouTubeId(url: string): string | null {
  const m = url.match(YT_RE)
  return m ? m[1] : null
}

function getThumbnail(teaching: Teaching): string | null {
  if (teaching.thumbnail) return teaching.thumbnail
  if (teaching.type === 'youtube') {
    const id = getYouTubeId(teaching.videoUrl)
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null
  }
  return null
}

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url)
}

const TYPE_ICON = {
  youtube: PlayCircle,
  video: Video,
  audio: Headphones,
} as const

interface TeachingCardProps {
  teaching: Teaching
}

export function TeachingCard({ teaching }: TeachingCardProps) {
  const thumb = getThumbnail(teaching)
  const Icon = TYPE_ICON[teaching.type]

  return (
    <a
      href={teaching.videoUrl}
      target={isExternalUrl(teaching.videoUrl) ? '_blank' : undefined}
      rel={isExternalUrl(teaching.videoUrl) ? 'noopener noreferrer' : undefined}
      className="group flex flex-col border border-harvest-earth/15 bg-harvest-cream transition-colors hover:border-harvest-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-gold focus-visible:outline-offset-2"
    >
      <div className="relative aspect-video overflow-hidden bg-harvest-bark/10">
        {thumb ? (
          <Image
            src={thumb}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon size={48} className="text-harvest-earth" aria-hidden />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-harvest-bark/0 transition-colors group-hover:bg-harvest-bark/30">
          <PlayCircle
            size={56}
            className="text-harvest-cream opacity-0 transition-opacity group-hover:opacity-100 drop-shadow-lg"
            aria-hidden
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {teaching.series && (
          <span className="mb-2 inline-block self-start font-ui text-xs uppercase tracking-widest text-harvest-gold">
            {teaching.series}
          </span>
        )}
        <h3 className="mb-1 font-display text-xl text-harvest-bark group-hover:text-harvest-gold">
          {teaching.title}
        </h3>
        <p className="mb-3 font-ui text-xs text-harvest-earth">
          {teaching.dateLabel ?? formatDate(teaching.date)}
        </p>
        <p className="text-sm text-harvest-earth">{teaching.description}</p>
      </div>
    </a>
  )
}
