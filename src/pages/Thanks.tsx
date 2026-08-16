import { ROUTES } from '../config/routes'
import { Button } from '../components/ui/Button'
import { PageHero } from '../components/ui/Reveal'
import { Seo } from '../lib/seo'

export function Thanks() {
  return (
    <>
      <Seo title="Thanks — TalentBridge" description="We received your note and will reply shortly." />
      <PageHero
        eyebrow="Received"
        title="Thanks — we have your note."
        body="A specialist will follow up by email. If it is urgent, message us on WhatsApp from the contact page."
      />
      <div className="flex justify-center py-12">
        <Button to={ROUTES.home}>
          Back home
        </Button>
      </div>
    </>
  )
}
