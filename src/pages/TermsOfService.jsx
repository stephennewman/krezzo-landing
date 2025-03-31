import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function TermsOfService() {
  return (
    <div className="min-h-screen font-space bg-white">
      <Navbar />
      <main>
        <div className="container-section py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-neutral max-w-none">
              <p className="mb-4">
                Welcome to Krezzo. Please read these Terms of Service carefully before using our website and services.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing or using Krezzo's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                2. Description of Services
              </h2>
              <p className="mb-4">
                Krezzo provides financial analytics and management tools that help users track and analyze their financial transactions. Our services include budgeting, transaction categorization, spending insights, and financial reporting.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                3. User Accounts
              </h2>
              <p className="mb-4">
                To use our services, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                4. User Responsibilities
              </h2>
              <p className="mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Use our services in any way that violates any applicable laws or regulations</li>
                <li className="mb-2">Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                <li className="mb-2">Interfere with or disrupt the operation of our services</li>
                <li className="mb-2">Attempt to gain unauthorized access to our systems or user accounts</li>
                <li className="mb-2">Transmit any viruses, malware, or other harmful code</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                5. Subscription and Payment
              </h2>
              <p className="mb-4">
                Some of our services may require a subscription. The subscription fees, billing cycle, and payment methods are described at the time of purchase. You authorize us to charge the payment method you provide for the subscription fees.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                6. Intellectual Property
              </h2>
              <p className="mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the design, selection, and arrangement thereof, are owned by Krezzo or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Krezzo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                9. Modifications to Terms
              </h2>
              <p className="mb-4">
                We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes through our website or by sending you an email. Your continued use of our services after such changes constitutes your acceptance of the new terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                10. Governing Law
              </h2>
              <p className="mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Krezzo operates, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                11. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> legal@krezzo.com
              </p>
              
              <p className="mt-8 text-sm text-neutral-500">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 