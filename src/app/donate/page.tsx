import type { Metadata } from 'next'
import Link from 'next/link'
import { HandHeart, ExternalLink, Mail, Phone } from 'lucide-react'
import { PageWrapper } from '@/components/shared/PageWrapper'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Give',
  description:
    'Support the worship, Bible study, and community food pantry of Harvest House Christian Fellowship in Lewisburg, PA.',
}

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, '')}`

const mailHref = (email: string) => `mailto:${email}`

export default function DonatePage() {
  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Support our work"
        title="Give"
        // TODO: REPLACE — giving page intro, confirm wording with client
        description="Your generosity helps fund our weekly worship, Bible study, and the food pantry that serves our neighbors in Lewisburg."
        as="h1"
      />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 border border-harvest-earth/15 bg-harvest-offwhite p-8 md:p-10">
          <HandHeart
            size={40}
            className="mb-5 text-harvest-gold"
            aria-hidden
          />
          <h2 className="mb-3 font-display text-2xl text-harvest-bark md:text-3xl">
            Give online
          </h2>
          <p className="mb-6 text-harvest-earth">
            Online giving is processed securely through BetterWorld. You can
            give a one-time gift or set up recurring support.
          </p>

          {SITE.donationUrl ? (
            <a
              href={SITE.donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-harvest-gold px-6 py-3 font-medium text-harvest-white transition-colors hover:bg-harvest-bark focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-bark focus-visible:outline-offset-2"
            >
              Donate online
              <ExternalLink size={18} aria-hidden />
            </a>
          ) : (
            <p className="italic text-harvest-earth">
              Online giving coming soon — please call us to arrange a gift.
            </p>
          )}
        </div>

        <aside className="border border-harvest-earth/15 bg-harvest-cream p-8">
          <h2 className="mb-3 font-display text-xl text-harvest-bark">
            Questions about giving?
          </h2>
          <p className="mb-6 text-sm text-harvest-earth">
            We&apos;re happy to talk through other ways to support the
            fellowship.
          </p>
          <p className="mb-3 flex items-center gap-2 text-sm text-harvest-bark">
            <Phone size={16} className="text-harvest-gold" aria-hidden />
            <a
              href={telHref(SITE.phone)}
              className="hover:text-harvest-gold transition-colors"
            >
              {SITE.phone}
            </a>
          </p>
          <p className="mb-3 flex items-center gap-2 text-sm text-harvest-bark">
            <Mail size={16} className="text-harvest-gold" aria-hidden />
            <a
              href={mailHref(SITE.email)}
              className="hover:text-harvest-gold transition-colors"
            >
              {SITE.email}
            </a>
          </p>
          <Link
            href="/contact"
            className="font-ui text-sm text-harvest-gold hover:text-harvest-bark transition-colors"
          >
            Contact us →
          </Link>
        </aside>
      </div>
    </PageWrapper>
  )
}
