export function Features() {
  const features = [
    {
      title: "Rapid prototyping",
      description: "Quickly turn ideas into interactive prototypes to validate concepts and gather feedback early.",
      icon: (
        // Lightning bolt icon
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
    },
    {
      title: "Product development",
      description: "End-to-end product design and engineering to bring your vision to life.",
      icon: (
        // Cube icon
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v6a8 8 0 11-16 0V7m16 0L12 13m0 0L4 7m8 6v8" /></svg>
      ),
    },
    {
      title: "Go-to-market planning",
      description: "Strategic planning to launch your product and reach your target audience effectively.",
      icon: (
        // Paper airplane icon
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h.008v.008H10.5V6zm.5 13.5l8.5-8.5-8.5-8.5-8.5 8.5 8.5 8.5z" /></svg>
      ),
    },
    {
      title: "Market research",
      description: "In-depth research and analysis to inform your business decisions and strategy.",
      icon: (
        // Search icon
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
      ),
    },
    {
      title: "Branding & design",
      description: "Create a memorable brand identity and beautiful, user-friendly designs.",
      icon: (
        // Color swatch icon
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h6a4 4 0 014 4v6a4 4 0 01-4 4H7zm0 0v4m0-4h4" /></svg>
      ),
    },
    {
      title: "Messaging & positioning",
      description: "Craft compelling messaging and position your business for maximum impact.",
      icon: (
        // Chat bubble icon
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m-2 8a9 9 0 100-18 9 9 0 000 18z" /></svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-neutral-50 py-16">
      <div className="container-section">
        <div className="text-center">
          <h2 className="section-title">
            Do more, with less.
          </h2>
          <p className="section-subtitle mx-auto">
            Build smarter, launch faster, and grow more efficiently.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card feature-card"
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mt-2 text-neutral-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 