'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { aboutTabs } from '@/data/about'

export function AboutTabs() {
  const [activeId, setActiveId] = useState(aboutTabs[0].id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const i = aboutTabs.findIndex((t) => t.id === activeId)
    let next = i
    if (e.key === 'ArrowRight') next = (i + 1) % aboutTabs.length
    else if (e.key === 'ArrowLeft')
      next = (i - 1 + aboutTabs.length) % aboutTabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = aboutTabs.length - 1
    else return

    e.preventDefault()
    const nextTab = aboutTabs[next]
    setActiveId(nextTab.id)
    tabRefs.current[nextTab.id]?.focus()
  }

  const active = aboutTabs.find((t) => t.id === activeId)!

  return (
    <div>
      <div
        role="tablist"
        aria-label="About sections"
        className="-mb-px flex flex-wrap gap-1 border-b border-harvest-earth/20 overflow-x-auto"
      >
        {aboutTabs.map((tab) => {
          const selected = tab.id === activeId
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el
              }}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={onKeyDown}
              className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-gold focus-visible:outline-offset-2 ${
                selected
                  ? 'border-harvest-gold text-harvest-bark'
                  : 'border-transparent text-harvest-earth hover:text-harvest-bark'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        key={active.id}
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        tabIndex={0}
        className="max-w-3xl pt-8 md:pt-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-harvest-gold focus-visible:outline-offset-4"
      >
        <h2 className="mb-4 font-display text-2xl text-harvest-bark md:text-3xl">
          {active.label}
        </h2>
        {active.content ? (
          <div className="whitespace-pre-line text-lg leading-relaxed text-harvest-bark">
            {active.content}
          </div>
        ) : (
          <p className="italic text-harvest-earth">
            Content coming soon. This section will be filled in when the
            original text is migrated from the previous site.
          </p>
        )}
      </div>
    </div>
  )
}
