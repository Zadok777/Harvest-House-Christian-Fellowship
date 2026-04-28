import { HeroSection } from '@/components/home/HeroSection'
import { ServiceTimes } from '@/components/home/ServiceTimes'
import { FoodPantry } from '@/components/home/FoodPantry'
import { CommunityMinistries } from '@/components/home/CommunityMinistries'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceTimes />
      <FoodPantry />
      <CommunityMinistries />
    </>
  )
}
