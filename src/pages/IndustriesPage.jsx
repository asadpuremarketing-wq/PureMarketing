import { IndustriesHero, ServiceNiche, RealEstateNiche, RestaurantNiche } from '../components/Industries'
import CTASection from '../components/CTASection'

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <ServiceNiche />
      <RealEstateNiche />
      <RestaurantNiche />
      <CTASection />
    </main>
  )
}
