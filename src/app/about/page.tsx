import type { Metadata } from 'next'
import { PageWrapper } from '@/components/shared/PageWrapper'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AboutTabs } from '@/components/about/AboutTabs'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Statement of faith, mission, vision, core values, history, and pastoral bio for Harvest House Christian Fellowship in Lewisburg, PA.',
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Get to know us"
        title="About Harvest House"
        description="What we believe, how we gather, and the people who make up this fellowship."
        as="h1"
      />
      <AboutTabs />
    </PageWrapper>
  )
}
