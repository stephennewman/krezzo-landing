import { useState } from 'react';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const pricingPlans = [
    {
      name: "Bronze",
      description: "Perfect for small teams or startups",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Basic analytics dashboard",
        "5 custom reports",
        "Data export in CSV",
        "7-day data history"
      ],
      cta: "Sign up",
      mostPopular: false
    },
    {
      name: "Silver",
      description: "For growing businesses with advanced needs",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Advanced analytics dashboard",
        "Unlimited custom reports",
        "Data export in multiple formats",
        "Priority email & chat support",
        "30-day data history",
      ],
      cta: "Sign up",
      mostPopular: true
    },
    {
      name: "Gold",
      description: "Custom solutions for large organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Unlimited dashboards",
        "Enterprise analytics suite",
        "Advanced security features",
        "Dedicated account manager",
        "24/7 priority support",
        "Unlimited data history",
        "Custom development",
      ],
      cta: "Sign up",
      mostPopular: false
    }
  ];

  return (
    <section id="pricing" className="bg-neutral-50 py-12 sm:py-16 lg:py-20">
      <div className="container-section">
        <div className="text-center">
          <h2 className="section-title">
            Flexible plans for every need
          </h2>
          <p className="section-subtitle mx-auto">
            Choose the plan that works best for your business. All plans include access to our core features.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`relative inline-flex items-center rounded-l-md px-4 py-2 text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                ? 'bg-primary-600 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`relative -ml-px inline-flex items-center rounded-r-md px-4 py-2 text-sm font-medium transition-colors ${
                billingCycle === 'yearly'
                ? 'bg-primary-600 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Annual <span className="ml-1.5 text-xs">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg ${
                plan.mostPopular ? 'border border-primary-200 shadow-xl' : 'border border-neutral-200 shadow-md'
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-primary-600 py-1 px-3 text-center text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900">{plan.name}</h3>
                <p className="mt-1 text-neutral-500">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold tracking-tight text-neutral-900">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-base font-medium text-neutral-500">
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="ml-3 text-neutral-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`block w-full rounded-md px-4 py-2 text-center text-sm font-semibold transition-colors ${
                      plan.mostPopular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 