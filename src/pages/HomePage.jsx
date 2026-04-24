import Hero        from '../components/Home/Hero'
import PainPoints   from '../components/Home/PainPoints'
import GrowthSystem from '../components/Home/GrowthSystem'
import Industries   from '../components/Home/Industries'
import ProofSection from '../components/Home/ProofSection'
import Manifesto    from '../components/Home/Manifesto'
import Process      from '../components/Home/Process'
import Portfolio    from '../components/Home/Portfolio'
import CTASection   from '../components/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <GrowthSystem />
      <Industries />
      <ProofSection />
      <Manifesto />
      <Process />
      <Portfolio />
      <CTASection />
    </main>
  )
}
