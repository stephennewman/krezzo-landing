import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-space bg-white">
      <Navbar />
      <main>
        <div className="container-section py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-neutral max-w-none">
              <p className="mb-4">
                At Krezzo, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect personal information that you provide directly to us, such as your name, email address, and payment information when you register for an account or subscribe to our services.
              </p>
              <p className="mb-4">
                We also automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Provide, maintain, and improve our services</li>
                <li className="mb-2">Process transactions and send related information including confirmations and receipts</li>
                <li className="mb-2">Send technical notices, updates, security alerts, and support and administrative messages</li>
                <li className="mb-2">Respond to your comments, questions, and customer service requests</li>
                <li className="mb-2">Communicate with you about products, services, offers, and events offered by Krezzo</li>
                <li className="mb-2">Monitor and analyze trends, usage, and activities in connection with our services</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                Data Security
              </h2>
              <p className="mb-4">
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                Your Choices
              </h2>
              <p className="mb-4">
                You can access, update, or delete your account information at any time by logging into your account settings. You can also opt-out of receiving promotional emails from us by following the instructions in those emails.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> privacy@krezzo.com
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