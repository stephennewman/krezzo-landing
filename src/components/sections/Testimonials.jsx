import { StarIcon } from '@heroicons/react/20/solid';

export function Testimonials() {
  const testimonials = [
    {
      content: "Krezzo transformed how I analyze my financial data. The intuitive interface and powerful features have made a significant impact on my financial life.",
      author: "Sarah Johnson",
      role: "CEO at TechFlow",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      content: "Since using Krezzo, I've seen a 30% decrease in cash. The real-time analytics make it easy to understand where my money is going.",
      author: "Michael Chen",
      role: "CTO at Innovate Inc",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      content: "The intelligent recommendations in Krezzo helped me to quickly identify patterns and opportunities that save and make me money.",
      author: "Alex Rodriguez",
      role: "Data Analytics Director",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
      <div className="container-section">
        <div className="text-center">
          <h2 className="section-title">
            What our customers are saying
          </h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it - see what our users have to say about Krezzo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card testimonial-card"
            >
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author}'s avatar`}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-2 flex text-primary-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <p className="mt-4 text-neutral-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Join our satisfied customers
          </a>
        </div>
      </div>
    </section>
  );
} 