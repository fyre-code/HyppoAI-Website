import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — HyppoAI',
};

export default function TermsPage() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[860px] mx-auto">
        <p className="text-[#2cd9fe] text-xs uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-[#555] text-sm mb-12">Hyppo Advertising, Inc — Effective Date: March 26th, 2026</p>

        <div className="flex flex-col gap-10 text-white leading-relaxed">

          {/* SMS Messaging */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">SMS Messaging Terms &amp; Compliance</h2>
            <p className="mb-4">
              HyppoAds offers an SMS messaging program for leads, prospects, and customers who
              explicitly opt in through our website, CRM forms, scheduling forms, or other
              consent-based intake forms. By opting in, you agree to receive text messages from
              Hyppo Advertising, Inc. related to your inquiry, requested services, appointments,
              quotes, project updates, customer support, and other service-related communications.
            </p>
            <p className="mb-4">
              Messages may include, without limitation, lead follow-up, appointment confirmations,
              appointment reminders, rescheduling updates, quote or proposal follow-up,
              project-related updates, and customer support communications. Marketing or promotional
              text messages will only be sent where the user has provided the appropriate consent.
            </p>
            <p className="mb-4">
              Message frequency varies based on your interaction with our business. Message and data
              rates may apply.
            </p>
            <p className="mb-4">
              You may cancel the SMS service at any time by replying STOP to any message. After you
              send STOP, you may receive one final confirmation message and then no further SMS
              messages unless you opt in again. For assistance, reply HELP or contact us at
              admin@hyppohq.ai or (732) 962-3725 during regular business hours.
            </p>
            <p>
              Carriers are not liable for delayed or undelivered messages. For privacy-related
              information, please review our Privacy Policy at https://hyppohq.ai/privacy.
            </p>
          </div>

          {/* General Terms */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">General Terms</h2>
            <p className="mb-4">
              This website (the "Site") and all products and services offered by HyppoAds
              ("Company," "we," or "us") are governed by these Terms of Service. By using the Site,
              purchasing or subscribing to our services, or otherwise engaging with HyppoAds in any
              capacity, you agree to be bound by these Terms of Service, our Privacy Policy, and any
              additional terms and conditions that may apply to specific sections of the Site or to
              products and services offered through the Site or directly by HyppoAds.
            </p>
            <p className="mb-4">
              Accessing the Site, submitting payment, or utilizing any portion of our services in
              any manner—whether automated or otherwise—constitutes acceptance of these Terms.
            </p>
            <p>
              We reserve the right to modify these Terms of Service or impose new conditions at any
              time. Any changes will be posted on this website or otherwise communicated to you
              through reasonable means (such as email). By continuing to use the Site, purchase,
              access, or otherwise engage with any HyppoAds products or services after such changes
              are made, you agree to and accept the revised Terms of Service.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Intellectual Property Rights</h2>
            <p className="mb-4">
              The Site and all materials available on it are the property of HyppoAds and/or our
              affiliates or licensors and are protected under copyright, trademark, and other
              intellectual property laws. The Site is provided solely for personal, non-commercial
              use. You may not use the Site or its materials, or any of our products or services,
              in any manner that infringes our rights or is unauthorized by us. Unless explicitly
              permitted, you may not modify, copy, reproduce, republish, upload, post, transmit,
              translate, sell, create derivative works, exploit, or distribute materials from the
              Site in any medium. You may, however, download or print one copy of individual pages
              for personal, non-commercial use, provided all copyright and proprietary notices
              remain intact.
            </p>
            <p>
              When you submit or post any material, including comments, blog entries, social media
              posts, photos, or videos, through the Site or related platforms, you represent that
              you own the rights or have permission to share it. By doing so, you grant us a
              royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify,
              transmit, sell, exploit, create derivative works from, distribute, and publicly
              perform or display such material.
            </p>
          </div>

          {/* Ownership */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">
              Ownership of Work Product, AI Systems, and Automations
            </h2>
            <p className="mb-4">
              All materials, systems, processes, designs, branding, content, videos, websites,
              landing pages, funnels, software configurations, scripts, prompts, templates,
              automations, AI workflows, AI receptionists, phone agents, chat agents, behavioral
              frameworks, data models, integrations, derivative works, and any and all other work
              product or deliverables created, developed, implemented, configured, or provided by
              Hyppo Advertising, Inc. ("Work Product") are the sole and exclusive property of
              Hyppo Advertising, Inc.
            </p>
            <p className="mb-4">For absolute clarity:</p>
            <p className="mb-4">
              Hyppo Advertising, Inc. retains full legal ownership of all Work Product at all times,
              without exception. No ownership, intellectual property rights, authorship rights, or
              derivative rights are ever transferred to the client unless explicitly stated in a
              separate written agreement signed by an authorized officer of Hyppo Advertising, Inc.
            </p>
            <p className="mb-4">This includes, without limitation:</p>
            <ul className="flex flex-col gap-3 mb-4 pl-2">
              {[
                'All AI receptionists and all underlying logic, prompts, scripts, personalities, configurations, and behavioral instructions',
                'All third-party automations, workflows, and integrations',
                'All websites, funnels, dashboards, forms, CRM setups, backend infrastructure, and digital systems',
                'All enhancements, edits, improvements, or derivative works created using client-provided content',
                'All internal processes, SOPs, playbooks, structures, proprietary methodologies, and operational systems',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2cd9fe] mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client License */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Client License to Use Work Product</h2>
            <p className="mb-4">
              Clients are granted a limited, non-exclusive, non-transferable, non-sublicensable,
              revocable license to use the Work Product solely for their own internal business
              operations and only while their account is active, fully paid, and in good standing.
            </p>
            <p className="mb-2">This license:</p>
            <ul className="flex flex-col gap-3 mb-4 pl-2">
              {[
                'Does not transfer ownership',
                'Does not grant rights to modify, duplicate, or recreate the Work Product',
                'Automatically terminates upon cancellation, expiration, non-payment, breach, or misuse',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2cd9fe] mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-2">Hyppo Advertising, Inc. may suspend, revoke, or terminate access to any Work Product immediately upon:</p>
            <ul className="flex flex-col gap-3 mb-4 pl-2">
              {[
                'Cancellation or non-renewal of services',
                'Failed or overdue payment',
                'Violation of these Terms of Service',
                'Misuse, modification, or unauthorized replication of any Work Product',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2cd9fe] mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Upon termination, all rights to use any Work Product cease immediately, and the client
              must discontinue all use of Hyppo Advertising, Inc.'s systems, automations, AI tools,
              or deliverables.
            </p>
          </div>

          {/* No Reverse Engineering */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">No Reverse Engineering or Duplication</h2>
            <p className="mb-4">
              Clients may not copy, reproduce, recreate, reverse engineer, disassemble, duplicate,
              repurpose, or attempt to replicate any Work Product owned by Hyppo Advertising, Inc.,
              including but not limited to AI systems, automations, workflows, prompts, logic
              structures, data models, or proprietary processes.
            </p>
            <p>
              Any attempt to duplicate or recreate Hyppo Advertising, Inc.'s systems—whether
              internally or through a third party—constitutes a material breach of these Terms and
              may result in immediate termination, legal action, and pursuit of damages.
            </p>
          </div>

          {/* Client-Provided Content */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Client-Provided Content</h2>
            <p className="mb-4">Clients retain ownership of original materials they submit.</p>
            <p>
              However, any edits, improvements, transformations, or derivative works created by
              Hyppo Advertising, Inc. using client-provided materials become part of the Work
              Product owned exclusively by Hyppo Advertising, Inc.
            </p>
          </div>

          {/* Continued Use */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Continued Use Constitutes Acceptance</h2>
            <p>
              By accessing, using, or paying for any Hyppo Advertising, Inc. services or systems
              after these Terms are updated, you acknowledge and agree to all ownership, licensing,
              and usage provisions described in this section.
            </p>
          </div>

          {/* Disclaimers */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Disclaimers</h2>
            <p className="mb-4">
              We may provide links and references to third-party websites. These links do not imply
              any endorsement or sponsorship of the third parties or their products and services.
              All information, products, and services provided through the Site are offered "as is,"
              without warranties of any kind, either express or implied. To the fullest extent
              permitted by law, we disclaim all warranties, including implied warranties of
              merchantability and fitness for a particular purpose.
            </p>
            <p>
              You agree to indemnify and hold harmless HyppoAds, its affiliates, and their officers,
              directors, agents, and employees from any claims, damages, liabilities, costs, and
              expenses arising from your use of the Site or from your breach of these Terms.
            </p>
          </div>

          {/* Online Commerce */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Online Commerce</h2>
            <p>
              Some sections of the Site may allow you to purchase products or services from
              third-party vendors. We are not responsible for the quality, accuracy, timeliness,
              reliability, or any other aspect of these third-party products and services. If you
              make a purchase through such links, information gathered during the transaction,
              including payment details, may be collected by both the merchant and HyppoAds. Your
              interactions with third-party vendors are solely between you and those vendors, and
              HyppoAds is not responsible for any loss or damages arising from such dealings.
            </p>
          </div>

          {/* Registration */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Registration &amp; Passwords</h2>
            <p>
              To access certain features of the Site, you may need to register and create an
              account. You agree to provide accurate, current, and complete information during
              registration. You are responsible for maintaining the confidentiality of your account
              credentials and for all activities conducted under your account. If you suspect
              unauthorized use of your account, notify us immediately at admin@hyppohq.ai. We are
              not liable for any losses or damages arising from your failure to secure your account
              information.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Social Media &amp; Recording Consent</h2>
            <p>
              If Client uses the Services for social media content (photo/video/audio), Client is
              solely responsible for obtaining any required permissions/consents to record and
              publish people, locations, and third-party property, and for complying with applicable
              laws and platform policies.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Site or our products
              &amp; services at our discretion and without notice if we determine that you have
              violated these Terms of Service or engaged in unlawful or inappropriate conduct. Once
              terminated, you must immediately cease all use of the Site or our products &amp;
              services and any content obtained from it.
            </p>
          </div>

          {/* Payments */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Payments &amp; Recurring Billing</h2>
            <p className="mb-4">
              All payments made to HyppoAds, including but not limited to setup fees, subscription
              fees, retainers, service renewals, and add-on purchases, are recurring in nature
              unless otherwise specified in writing. By submitting payment information, you authorize
              HyppoAds to automatically charge the payment method on file for recurring fees at the
              applicable interval (e.g., monthly, quarterly, or annually), including any applicable
              taxes, processing fees, and surcharges, until you provide written notice of
              cancellation.
            </p>
            <p className="mb-4">
              To cancel or modify your recurring billing arrangement, you must send a request to
              growth@hyppohq.ai or admin@hyppohq.ai at least five (5) business days before your
              next billing date. Failure to provide timely notice will result in continued billing
              for the following period. No partial or prorated refunds will be issued for
              cancellations made mid-billing cycle.
            </p>
            <p>
              HyppoAds reserves the right to adjust its pricing, taxes, or processing fees with
              reasonable notice. Continued use of the services following such changes constitutes
              acceptance of the new terms.
            </p>
          </div>

          {/* Non-Refundable */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Non-Refundable Payments</h2>
            <p className="mb-4">
              Unless expressly stated otherwise in a separate written agreement, all payments made
              to HyppoAds are non-refundable. This includes, but is not limited to, setup fees,
              monthly service charges, advertising budgets, consultation fees, automation
              development, or any other purchased product or service.
            </p>
            <p className="mb-4">
              By completing a payment, you acknowledge that HyppoAds immediately begins preparing
              for service delivery — including but not limited to allocating team resources,
              software licenses, project capacity, and scheduling commitments — upon receipt of
              payment. Because this preparation process begins right away, all payments are
              non-refundable even if project work is delayed or pending client deliverables.
            </p>
            <p>
              If you believe an error was made in billing, please contact admin@hyppohq.ai within
              seven (7) days of the charge for review.
            </p>
          </div>

          {/* Billing Authorization */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Billing Authorization &amp; Late Payments</h2>
            <p>
              By submitting payment information, you authorize HyppoAds to charge the designated
              payment method for all agreed-upon fees on a recurring basis. If payment fails or is
              delayed, HyppoAds reserves the right to suspend services until the balance is paid in
              full. Late payments may incur a fee of up to 1.5% per month (or the maximum rate
              allowed by law).
            </p>
          </div>

          {/* Messaging Compliance */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Messaging Compliance (SMS, Email, and Calling)</h2>
            <p className="mb-4">
              If Client uses HyppoAds systems to send or place communications (including SMS/text,
              email, outbound calling, voicemail drops, or automated follow-up), Client represents,
              warrants, and agrees that:
            </p>
            <ul className="flex flex-col gap-3 mb-4 pl-2">
              {[
                'Client is the sender. Client is solely responsible for the content, targeting, timing, and legality of all messages and communications sent using the Services.',
                'Client will obtain and maintain all required consents and permissions (including, where applicable, prior express written consent) and will keep records of consent, opt-in sources, and timestamps.',
                'Client will comply with all applicable laws, regulations, and industry guidelines, including but not limited to TCPA, CTIA guidelines, carrier requirements (including A2P/10DLC policies where applicable), and CAN-SPAM (and any state privacy laws that apply).',
                'Client will honor opt-outs immediately, including STOP requests for SMS and unsubscribe requests for email, and will not attempt to re-message opted-out recipients except as legally permitted.',
                'Client will not use the Services to send unlawful, deceptive, abusive, or unsolicited messages, including messages to purchased/rented lists, scraped numbers/emails, or recipients who have not provided the required permissions.',
                'HyppoAds may suspend or terminate messaging/email/calling capabilities if we determine, in our sole discretion, that Client activity may violate laws, carrier policies, platform rules, or creates deliverability/reputation risk.',
                'Client will provide and maintain a compliant Privacy Policy + SMS Terms on their domain when required for registration/approval.',
              ].map((item) => (
                <li key={item.slice(0, 30)} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2cd9fe] mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* A2P Registration */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">A2P Registration Responsibility</h2>
            <p>
              If HyppoAds assists Client with A2P/10DLC registration or verification, Client is
              solely responsible for (i) the accuracy of all business/brand information submitted
              (including legal name, EIN, address, website, and use case), and (ii) obtaining and
              maintaining all required consents and permissions for SMS/email/calling. HyppoAds does
              not provide legal advice and may suspend messaging capabilities if Client activity
              creates compliance or deliverability risk.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Limitation of Liability &amp; User Responsibility</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, HyppoAds, its affiliates, officers, directors,
              employees, and agents shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or for any loss of profits, revenue, data,
              goodwill, or other intangible losses arising out of or related to your access to or
              use of our Site, software, or services; any conduct, content, or actions taken by you
              or your representatives using our systems, automations, or communication tools;
              errors, interruptions, or delays in operation or transmission; or unauthorized access
              to or alteration of your data or content.
            </p>
            <p className="mb-4">
              You are solely responsible for ensuring that your use of HyppoAds' products and
              services complies with all applicable laws, regulations, and platform guidelines,
              including but not limited to advertising, data privacy, and content standards.
              HyppoAds assumes no responsibility or liability for user-generated content, marketing
              materials, or automations deployed through our systems.
            </p>
            <p>
              In no event shall HyppoAds' total liability to you for any claim arising out of or
              relating to these Terms or our services exceed the total amount paid by you to HyppoAds
              in the thirty (30) days preceding the event giving rise to the claim.
            </p>
          </div>

          {/* Data Processing */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Data Processing &amp; Privacy</h2>
            <p>
              HyppoAds may collect and process client information solely for the purpose of
              providing automation, marketing, and analytics services. Client data may be securely
              transmitted or stored through third-party platforms integrated into our systems
              (including but not limited to Zapier, n8n, and Supabase). While HyppoAds takes
              reasonable measures to safeguard all client data, we are not responsible for breaches,
              data loss, or misuse resulting from third-party providers, integrations, or client
              actions. Clients are responsible for ensuring their own compliance with applicable
              data-protection and privacy laws.
            </p>
          </div>

          {/* AI Content */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">AI-Generated Content Disclaimer</h2>
            <p className="mb-4">
              Certain HyppoAds services use artificial-intelligence tools to generate and, in some
              cases, automatically publish content, media, or marketing copy through
              client-connected accounts. While HyppoAds strives for quality, accuracy, and
              professionalism, AI-generated outputs may contain errors, inaccuracies, or unintended
              material.
            </p>
            <p className="mb-4">
              Clients retain full control over their own connected platforms and are solely
              responsible for managing, reviewing, and removing any content they deem inaccurate,
              inappropriate, or inconsistent with their brand. By using these automated systems,
              clients acknowledge that HyppoAds is not responsible or liable for any content
              generated, published, or retained through these services.
            </p>
            <p>
              HyppoAds disclaims all liability arising from reliance on, publication of, or
              outcomes resulting from AI-generated or auto-posted content.
            </p>
          </div>

          {/* No Guarantee */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">No Guarantee of Results</h2>
            <p>
              HyppoAds provides tools, strategies, and automations designed to enhance client
              performance and efficiency. However, we do not guarantee specific outcomes, sales, or
              results. Success depends on multiple factors beyond our control, including market
              conditions, client input, and adherence to recommended processes.
            </p>
          </div>

          {/* Third-Party */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Third-Party Services Disclaimer</h2>
            <p>
              Some HyppoAds systems rely on third-party software and APIs for functionality.
              HyppoAds does not control and is not responsible for the availability, performance, or
              outcomes of these external platforms. Any changes, limitations, or outages of
              third-party services may affect the performance of HyppoAds products, and such issues
              do not constitute grounds for refunds or termination.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of
              the State of Florida, where HyppoAds operates. Any disputes arising under these Terms
              shall be resolved exclusively through binding arbitration in Florida.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Changes to Terms of Service</h2>
            <p>
              HyppoAds may update or modify these Terms of Service from time to time to reflect
              changes in our business, services, or applicable laws. The most current version will
              always be available on our website and will display the effective date at the top of
              this page at hyppohq.ai/terms. We may also notify you of material changes by email or
              through other reasonable means. By continuing to use or pay for any HyppoAds products
              or services after an update takes effect, you agree to be bound by the revised Terms
              of Service.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us at:
            </p>
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
