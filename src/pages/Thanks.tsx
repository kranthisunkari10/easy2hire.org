import { Button } from '../components/Button'
import { SectionHead } from '../components/Reveal'
import { Seo } from '../lib/seo'

export function Thanks() {
  return (
    <>
      <Seo title="Thanks — Easy2Hire" description="We received your note and will reply shortly." />
      <section className="mesh px-4 py-16">
        <SectionHead
          eyebrow="Received"
          title="Thanks — we have your note."
          body="A specialist will follow up by email. If it is urgent, message us on WhatsApp from the contact page."
        />
        <div className="mt-5 flex justify-center">
          <Button to="/">Back home</Button>
        </div>
      </section>
    </>
  )
}
