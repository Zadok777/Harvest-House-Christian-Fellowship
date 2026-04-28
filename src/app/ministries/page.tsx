import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Lock,
  Mail,
  MapPin,
  Phone,
  Quote,
  Wheat,
} from 'lucide-react'
import { PageWrapper } from '@/components/shared/PageWrapper'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { SITE } from '@/data/site'
import { ministries, type Ministry } from '@/data/ministries'

export const metadata: Metadata = {
  title: 'Outreach Ministries',
  description:
    'Harvest House Christian Fellowship’s outreach in Lewisburg, PA — the Harvest Time Food Pantry and our weekly jail ministry at Union County Jail.',
}

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, '')}`

const mailHref = (email: string) => `mailto:${email}`

const iconFor = (key: Ministry['iconKey']) => (key === 'wheat' ? Wheat : Lock)

const mapsHref = (addr: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`

export default function MinistriesPage() {
  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Reaching our community"
        title="Outreach Ministries"
        description="Two hands-on ministries that carry the Gospel into Lewisburg each week — one feeds the hungry, the other visits the imprisoned."
        as="h1"
      />

      <section
        aria-label="Guiding scripture"
        className="mb-16 border-l-4 border-harvest-gold bg-harvest-offwhite p-8 md:mb-24 md:p-10"
      >
        <Quote
          size={32}
          className="mb-4 text-harvest-gold"
          aria-hidden
        />
        <blockquote className="max-w-3xl font-display text-xl italic leading-relaxed text-harvest-bark md:text-2xl">
          “For I was hungry and you gave me something to eat, I was thirsty and
          you gave me something to drink, I was a stranger and you invited me
          in, I needed clothes and you clothed me, I was sick and you looked
          after me, I was in prison and you came to visit me.”
        </blockquote>
        <cite className="mt-4 block font-ui text-sm not-italic text-harvest-earth">
          — Matthew 25:35–36
        </cite>
      </section>

      <div className="space-y-20 md:space-y-28">
        {ministries.map((ministry, index) => (
          <MinistrySection
            key={ministry.id}
            ministry={ministry}
            reversed={index % 2 === 1}
          />
        ))}
      </div>

      <section
        aria-label="Get involved"
        className="mt-20 border border-harvest-earth/15 bg-harvest-cream p-8 text-center md:mt-28 md:p-12"
      >
        <h2 className="mb-3 font-display text-2xl text-harvest-bark md:text-3xl">
          Want to serve with us?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-harvest-earth">
          Both ministries welcome volunteers from the church family and the
          wider community. Reach out and let us know how you’d like to help.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-2 border-harvest-bark px-6 py-3 font-medium text-harvest-bark transition-colors hover:bg-harvest-bark hover:text-harvest-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-bark focus-visible:outline-offset-2"
        >
          Contact us
          <ArrowRight size={18} aria-hidden />
        </Link>
      </section>
    </PageWrapper>
  )
}

interface MinistrySectionProps {
  ministry: Ministry
  reversed: boolean
}

function MinistrySection({ ministry, reversed }: MinistrySectionProps) {
  const Icon = iconFor(ministry.iconKey)

  return (
    <article
      id={ministry.id}
      className="grid items-start gap-10 md:grid-cols-2 md:gap-14"
    >
      <div
        className={`${
          reversed ? 'md:order-2' : ''
        } relative aspect-[4/3] overflow-hidden bg-harvest-green`}
      >
        {ministry.imageUrl ? (
          <Image
            src={ministry.imageUrl}
            alt={ministry.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <MinistryPlaceholder iconKey={ministry.iconKey} />
        )}
      </div>

      <div className={reversed ? 'md:order-1' : ''}>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-harvest-gold/10">
          <Icon size={24} className="text-harvest-gold" aria-hidden />
        </div>
        <h2 className="mb-2 font-display text-3xl text-harvest-bark md:text-4xl">
          {ministry.title}
        </h2>
        {ministry.tagline && (
          <p className="mb-6 font-ui text-sm uppercase tracking-widest text-harvest-gold">
            {ministry.tagline}
          </p>
        )}

        <div className="space-y-4 text-harvest-earth">
          {ministry.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {ministry.contact && <MinistryContactBlock contact={ministry.contact} />}

        <figure className="mt-6 border-l-4 border-harvest-gold bg-harvest-offwhite p-5">
          <blockquote className="font-display italic text-harvest-bark">
            {ministry.verse.text}
          </blockquote>
          <figcaption className="mt-2 font-ui text-sm text-harvest-earth">
            — {ministry.verse.reference}
          </figcaption>
        </figure>

        {ministry.affiliation && (
          <p className="mt-5 font-ui text-xs uppercase tracking-widest text-harvest-earth">
            {ministry.affiliation}
          </p>
        )}
      </div>
    </article>
  )
}

function MinistryContactBlock({ contact }: { contact: NonNullable<Ministry['contact']> }) {
  return (
    <ul className="mt-6 space-y-3 border border-harvest-earth/15 bg-harvest-cream p-5 text-sm">
      {contact.hours && (
        <li className="flex items-start gap-3 text-harvest-bark">
          <Clock size={18} className="mt-0.5 shrink-0 text-harvest-gold" aria-hidden />
          <span>{contact.hours}</span>
        </li>
      )}
      {contact.address && (
        <li className="flex items-start gap-3 text-harvest-bark">
          <MapPin size={18} className="mt-0.5 shrink-0 text-harvest-gold" aria-hidden />
          <a
            href={mapsHref(contact.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-harvest-gold transition-colors"
          >
            {contact.address}
            <ExternalLink size={14} aria-hidden />
          </a>
        </li>
      )}
      {contact.phone && (
        <li className="flex items-start gap-3 text-harvest-bark">
          <Phone size={18} className="mt-0.5 shrink-0 text-harvest-gold" aria-hidden />
          <a
            href={telHref(contact.phone)}
            className="hover:text-harvest-gold transition-colors"
          >
            {contact.phone}
          </a>
        </li>
      )}
      {contact.email && (
        <li className="flex items-start gap-3 text-harvest-bark">
          <Mail size={18} className="mt-0.5 shrink-0 text-harvest-gold" aria-hidden />
          <a
            href={mailHref(contact.email)}
            className="hover:text-harvest-gold transition-colors"
          >
            {contact.email}
          </a>
        </li>
      )}
      {contact.note && (
        <li className="text-harvest-earth">{contact.note}</li>
      )}
    </ul>
  )
}

function MinistryPlaceholder({ iconKey }: { iconKey: Ministry['iconKey'] }) {
  const Icon = iconFor(iconKey)
  const gradient =
    iconKey === 'wheat'
      ? 'from-harvest-green via-harvest-green to-harvest-bark'
      : 'from-harvest-bark via-harvest-earth to-harvest-bark'

  return (
    <div
      aria-hidden
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
    >
      <Icon size={120} className="text-harvest-gold/70" strokeWidth={1.25} />
    </div>
  )
}
