import Link from 'next/link'
import { Heart, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { SITE } from '@/data/site'

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, '')}`

const mailHref = (email: string) => `mailto:${email}`

export function FoodPantry() {
  const pantry = SITE.services.find((s) => s.name === 'Food Pantry')
  const addr = SITE.foodPantryAddress

  return (
    <section className="bg-harvest-green text-harvest-cream">
      <div className="container-site section-pad">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 font-ui text-xs uppercase tracking-widest text-harvest-gold">
              Community
            </p>
            <h2 className="mb-4 font-display text-3xl text-harvest-cream md:text-4xl">
              Food Pantry
            </h2>
            {/* TODO: REPLACE — pantry mission / description, confirm with client */}
            <p className="mb-6 text-lg text-harvest-cream/85">
              Weekly groceries shared with our neighbors in Lewisburg. Open to
              anyone in need — come as you are.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-ui text-harvest-cream transition-colors hover:text-harvest-gold"
            >
              Get involved
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>

          <ul className="space-y-4 text-harvest-cream/90">
            {pantry && (
              <li className="flex items-start gap-3">
                <Heart size={20} className="mt-1 shrink-0 text-harvest-gold" aria-hidden />
                <span>{pantry.time}</span>
              </li>
            )}
            <li className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0 text-harvest-gold" aria-hidden />
              <address className="not-italic">
                {addr.street}
                <br />
                {addr.city}, {addr.state} {addr.zip}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={telHref(SITE.phoneFoodPantry)}
                className="hover:text-harvest-gold"
              >
                {SITE.phoneFoodPantry}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="shrink-0 text-harvest-gold" aria-hidden />
              <a
                href={mailHref(SITE.emailFoodPantry)}
                className="hover:text-harvest-gold"
              >
                {SITE.emailFoodPantry}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
