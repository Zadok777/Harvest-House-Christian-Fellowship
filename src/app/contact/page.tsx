import type { Metadata } from 'next'
import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { PageWrapper } from '@/components/shared/PageWrapper'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Visit or call Harvest House Christian Fellowship in Lewisburg, PA. Sunday worship, Wednesday Bible study, and the Harvest Time Food Pantry.',
}

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, '')}`

const mailHref = (email: string) => `mailto:${email}`

const formatAddress = (addr: typeof SITE.address) =>
  `${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`

export default function ContactPage() {
  const church = SITE.address
  const pantry = SITE.foodPantryAddress
  const pantryService = SITE.services.find((s) => s.name === 'Food Pantry')

  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Come visit"
        title="Contact"
        description="We’d love to meet you in person. Here’s where to find us and how to get in touch."
        as="h1"
      />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 border border-harvest-earth/15 bg-harvest-offwhite p-8 md:p-10">
          <h2 className="mb-6 font-display text-2xl text-harvest-bark md:text-3xl">
            Harvest House Christian Fellowship
          </h2>

          <ul className="space-y-5 text-harvest-bark">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-harvest-gold transition-colors"
              >
                <address className="not-italic">
                  {church.street}
                  <br />
                  {church.city}, {church.state} {church.zip}
                </address>
                <ExternalLink size={14} className="ml-1" aria-hidden />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={telHref(SITE.phone)}
                className="hover:text-harvest-gold transition-colors"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={mailHref(SITE.email)}
                className="hover:text-harvest-gold transition-colors"
              >
                {SITE.email}
              </a>
            </li>
          </ul>

          <h3 className="mt-10 mb-4 font-display text-xl text-harvest-bark">
            Service Times
          </h3>
          <ul className="space-y-3 text-harvest-earth">
            {SITE.services.map((service) => (
              <li key={service.name} className="flex items-start gap-3">
                <Clock size={18} className="mt-1 shrink-0 text-harvest-gold" aria-hidden />
                <div>
                  <p className="font-medium text-harvest-bark">{service.name}</p>
                  <p className="text-sm">{service.time}</p>
                  {service.note && (
                    <p className="text-sm italic">{service.note}</p>
                  )}
                  {service.location && (
                    <p className="text-sm">{service.location}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="border border-harvest-earth/15 bg-harvest-cream p-8">
          <h2 className="mb-3 font-display text-xl text-harvest-bark">
            Harvest Time Food Pantry
          </h2>
          <p className="mb-5 text-sm text-harvest-earth">
            A separate location from the church — open to anyone in need.
          </p>
          <ul className="space-y-4 text-sm text-harvest-bark">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatAddress(pantry))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-harvest-gold transition-colors"
              >
                <address className="not-italic">
                  {pantry.street}
                  <br />
                  {pantry.city}, {pantry.state} {pantry.zip}
                </address>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={telHref(SITE.phoneFoodPantry)}
                className="hover:text-harvest-gold transition-colors"
              >
                {SITE.phoneFoodPantry}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={mailHref(SITE.emailFoodPantry)}
                className="hover:text-harvest-gold transition-colors"
              >
                {SITE.emailFoodPantry}
              </a>
            </li>
            {pantryService && (
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-harvest-gold" aria-hidden />
                <span>{pantryService.time}</span>
              </li>
            )}
          </ul>
        </aside>
      </div>

    </PageWrapper>
  )
}
