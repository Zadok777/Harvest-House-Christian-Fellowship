'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE } from '@/data/site'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/teachings', label: 'Watch' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="sticky top-0 z-40 bg-harvest-cream/95 backdrop-blur border-b border-harvest-earth/15">
      <nav
        aria-label="Primary"
        className="container-site flex items-center justify-between py-4"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={`${SITE.name} — home`}
          className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-gold focus-visible:outline-offset-4 rounded-sm"
        >
          <Image
            src="/logo-mark.png"
            alt={`${SITE.name} logo`}
            width={225}
            height={225}
            priority
            className="h-10 w-10 shrink-0 md:h-12 md:w-12"
          />
          <span className="min-w-0 whitespace-nowrap font-display text-lg leading-tight md:text-2xl">
            <span className="text-harvest-gold">Harvest House</span>{' '}
            <span className="text-harvest-bark">Christian Fellowship</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`pb-1 border-b-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-gold focus-visible:outline-offset-4 rounded-sm ${
                    active
                      ? 'text-harvest-gold border-harvest-gold'
                      : 'text-harvest-bark border-transparent hover:text-harvest-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-harvest-bark hover:text-harvest-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-gold focus-visible:outline-offset-2 rounded-sm"
        >
          {open ? <X size={28} aria-hidden /> : <Menu size={28} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-harvest-earth/15 bg-harvest-cream"
        >
          <ul className="container-site flex flex-col py-2 text-base">
            {LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`block py-3 border-b border-harvest-earth/10 last:border-b-0 ${
                      active ? 'text-harvest-gold' : 'text-harvest-bark hover:text-harvest-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
