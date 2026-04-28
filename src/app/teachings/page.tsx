import type { Metadata } from 'next'
import { PageWrapper } from '@/components/shared/PageWrapper'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { TeachingGrid } from '@/components/teachings/TeachingGrid'
import { teachings } from '@/data/teachings'

export const metadata: Metadata = {
  title: 'Watch',
  description:
    'Watch sermons, Bible studies, and teachings from Harvest House Christian Fellowship in Lewisburg, PA.',
}

export default function TeachingsPage() {
  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Watch and grow"
        title="Watch"
        description="Video teachings from Sunday services and Bible studies, walking through Scripture together."
        as="h1"
      />
      <TeachingGrid teachings={teachings} />
    </PageWrapper>
  )
}
