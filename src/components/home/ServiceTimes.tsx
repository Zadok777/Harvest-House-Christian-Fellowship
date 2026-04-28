import { Clock } from 'lucide-react'
import { SITE } from '@/data/site'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function ServiceTimes() {
  return (
    <section className="container-site section-pad">
      <SectionHeader
        eyebrow="Gather with us"
        title="Service Times"
        description="You are welcome to join us anytime. Come as you are."
        align="center"
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {SITE.services.map((service) => (
          <li
            key={service.name}
            className="border border-harvest-earth/15 bg-harvest-offwhite p-6"
          >
            <Clock size={24} className="mb-3 text-harvest-gold" aria-hidden />
            <h3 className="mb-1 font-display text-xl text-harvest-bark">
              {service.name}
            </h3>
            <p className="font-ui text-harvest-earth">{service.time}</p>
            {service.note && (
              <p className="mt-2 text-sm italic text-harvest-earth">
                {service.note}
              </p>
            )}
            {service.location && (
              <p className="mt-2 text-sm text-harvest-earth">
                <span className="font-ui">at</span> {service.location}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
