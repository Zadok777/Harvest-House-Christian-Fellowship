import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { SITE } from '@/data/site'

const telHref = (phone: string) => `tel:${phone.replace(/[^0-9+]/g, '')}`

const mailHref = (email: string) => `mailto:${email}`

export function Footer() {
  return (
    <footer className="bg-harvest-bark text-harvest-cream mt-20">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo-mark.png"
                alt=""
                width={225}
                height={225}
                className="h-10 w-10"
              />
              <h2 className="font-display text-xl text-harvest-cream">
                {SITE.name}
              </h2>
            </div>
            <p className="text-sm text-harvest-cream/80">
              A small fellowship in {SITE.address.city}, gathering for worship,
              study, and service to our neighbors.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-harvest-cream mb-3">Visit</h2>
            <address className="not-italic space-y-3 text-sm text-harvest-cream/80">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-harvest-gold" aria-hidden />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-harvest-gold" aria-hidden />
                <a href={telHref(SITE.phone)} className="hover:text-harvest-gold">
                  {SITE.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-harvest-gold" aria-hidden />
                <a href={mailHref(SITE.email)} className="hover:text-harvest-gold">
                  {SITE.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="font-display text-lg text-harvest-cream mb-3">Gather</h2>
            <ul className="space-y-3 text-sm text-harvest-cream/80">
              {SITE.services.map((service) => (
                <li key={service.name} className="flex items-start gap-2">
                  <Clock size={16} className="mt-1 shrink-0 text-harvest-gold" aria-hidden />
                  <span>
                    <span className="block text-harvest-cream">{service.name}</span>
                    <span>{service.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-harvest-cream/15 mt-10 pt-6 flex flex-col gap-3 text-xs text-harvest-cream/60 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/contact" className="hover:text-harvest-gold">
              Contact
            </Link>
            <Link href="/donate" className="hover:text-harvest-gold">
              Give
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
