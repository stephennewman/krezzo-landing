import { useState } from 'react';

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container-section">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
          <div>
            <h2 className="section-title text-left">
              Want a free personalized financial advisory consultation?
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Get in touch with our team to learn how we can help you achieve your financial goals.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">Email us</h3>
                  <p className="mt-1 text-neutral-500">
                    <a href="mailto:info@krezzo.com" className="text-primary-600 hover:text-primary-500">
                      info@krezzo.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">Call us</h3>
                  <p className="mt-1 text-neutral-500">
                    <a href="tel:+1-555-123-4567" className="text-primary-600 hover:text-primary-500">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-lg font-medium text-neutral-900">Send us a message</h3>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-input"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 