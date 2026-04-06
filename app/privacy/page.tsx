import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — HyppoAI',
};

export default function PrivacyPage() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[860px] mx-auto">
        <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-[#555] text-sm mb-12">HYPPO ADVERTISING, INC — Effective Date: March 26th, 2026</p>

        <div className="prose-hyppo flex flex-col gap-10 text-[#c9c9c9] leading-relaxed">

          <div className="border border-[#1a1a1a] p-8 bg-[#0a0a0a]">
            <p className="text-white font-semibold mb-3 uppercase tracking-widest text-xs text-[#2cd9fe]">Important Notice Regarding Text Messaging Data</p>
            <p>
              "HyppoAds does not share customer opt-in information, including phone numbers and
              consent records, with any affiliates or third parties for marketing" purposes
              unrelated to service delivery. All text messaging originator opt-in data remains
              strictly confidential.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">1. Information We Collect</h2>
            <p>
              The organization collects personal data including names, email addresses, phone
              numbers, physical addresses, and payment information. Opt-in actions with timestamps
              are recorded across SMS and email channels. Non-personal information encompasses IP
              addresses, browser types, device details, website usage patterns, and analytics from
              cookies. Customer communication records including inquiries, service requests,
              appointments, preferences, service history, and feedback are also maintained.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">2. How We Use Your Information</h2>
            <p>
              Collected data facilitates service provision and improvement, transaction processing,
              inquiry communication, appointment management, promotional outreach, website
              functionality enhancement, security assurance, fraud prevention, and maintaining
              accurate communication preference and consent records.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">3. SMS Messaging & Compliance</h2>
            <p className="mb-4">
              By opting into SMS services, users consent to receive text messages regarding
              inquiries, requested services, appointments, quotes, project updates, and customer
              support. Promotional SMS messages require specific consent. Message frequency varies
              based on business interaction. Standard message and data rates apply.
            </p>
            <p className="mb-4">
              Users may opt out anytime by replying STOP, receiving one final confirmation message.
              Assistance available by replying HELP or contacting the organization at
              admin@hyppohq.ai or (732) 962-3725.
            </p>
            <p>
              "Mobile opt-in information, phone numbers, or SMS consent records" are never shared
              with third parties or affiliates for marketing purposes. Text messaging data sharing
              occurs only with vendors necessary for service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">4. Information Sharing & Disclosure</h2>
            <p className="mb-4">
              HyppoAds does not sell, rent, or trade personal information. Trusted service
              providers assisting operations — payment processors, scheduling providers, SMS
              aggregators — receive information solely for service delivery purposes under
              confidentiality obligations.
            </p>
            <p className="mb-4">
              Disclosure occurs when legally required, in response to lawful authority requests, or
              to protect legal rights. Business transactions involving mergers, acquisitions, or
              asset sales may transfer information while maintaining policy compliance. Text
              messaging originator data sharing remains restricted to necessary service providers.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">5. Data Security</h2>
            <p>
              The organization implements reasonable protective measures including data encryption
              during transit and storage, access controls, authentication mechanisms, regular
              security assessments, employee training, breach notification protocols compliant with
              applicable laws, and secure backup procedures. While industry-standard methods are
              employed, "no method of transmission or electronic storage can be guaranteed 100%
              secure."
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">6. Cookies & Tracking Technologies</h2>
            <p>
              The website uses cookies and tracking technologies for traffic analysis, user behavior
              monitoring, preference retention, functionality improvement, and service effectiveness
              measurement. Users may control cookie usage through browser settings, though disabling
              them may affect site functionality.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">7. Your Rights & Choices</h2>
            <p>
              Users possess rights to access, update, or delete personal information. Marketing
              email opt-out occurs via unsubscribe links; SMS opt-out uses STOP replies. Users may
              request processing details and withdraw communication consent anytime. Complaints
              regarding rights violations may be filed with appropriate supervisory authorities.
              Contact details appear in Section 10.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">8. Third-Party Links</h2>
            <p>
              The website includes external third-party links. HyppoAds bears no responsibility for
              those sites' privacy practices. Users should review individual policies. This Privacy
              Policy applies exclusively to HyppoAds-collected information.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              The organization may update this policy periodically. The current version remains
              available online with updated effective dates. Significant changes trigger email
              notification or website notice placement.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-xl mb-4">10. Contact Us</h2>
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold">HyppoAds</p>
              <p>Phone: (732) 962-3725</p>
              <p>Email: admin@hyppohq.ai</p>
              <p>Website: www.hyppohq.ai</p>
            </div>
          </div>

          <div className="border-t border-[#1a1a1a] pt-8 text-[#555] text-sm">
            2025 © All Rights Reserved Hyppo Advertising, Inc
          </div>
        </div>
      </div>
    </section>
  );
}
