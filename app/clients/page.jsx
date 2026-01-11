import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export const metadata = {
  title: 'Clients & Testimonials - NexaTech Solutions | Client Success Stories',
  description: 'See what our clients say about working with NexaTech Solutions. Read testimonials from satisfied clients across various industries.',
}

export default function Clients() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechFlow Industries',
      content: 'NexaTech transformed our digital infrastructure. Their expertise in system integration and ongoing support has been invaluable. We\'ve seen a 40% increase in operational efficiency and a significant reduction in IT-related downtime. The team is professional, responsive, and truly understands our business needs.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'CTO',
      company: 'Global Retail Corp',
      content: 'Outstanding web development services. They delivered our e-commerce platform on time and within budget. The platform has exceeded our expectations in terms of performance and user experience. Our online sales have increased by 65% since launch. The team\'s technical expertise and attention to detail are exceptional.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations',
      company: 'HealthCare Plus',
      content: 'Working with NexaTech Solutions has been a game-changer for our organization. Their healthcare management system has streamlined our operations significantly. The system is intuitive, secure, and compliant with all healthcare regulations. Patient satisfaction scores have improved, and our administrative efficiency has increased by 50%.',
      rating: 5,
    },
    {
      name: 'Michael Thompson',
      role: 'CFO',
      company: 'FinanceFirst Group',
      content: 'The financial analytics dashboard developed by NexaTech has revolutionized how we make decisions. The real-time insights and predictive analytics have helped us identify opportunities and mitigate risks effectively. Our forecasting accuracy has improved by 45%, and we\'ve been able to make more informed strategic decisions.',
      rating: 5,
    },
    {
      name: 'Jennifer Park',
      role: 'VP of Technology',
      company: 'Manufacturing Dynamics',
      content: 'The ERP system implementation was executed flawlessly. NexaTech\'s team worked closely with us throughout the entire process, ensuring minimal disruption to our operations. The system has reduced our operational costs by 30% and improved production efficiency significantly. Their technical expertise and project management skills are top-notch.',
      rating: 5,
    },
    {
      name: 'Robert Anderson',
      role: 'Founder',
      company: 'StartUp Ventures',
      content: 'As a startup, we needed a technology partner who could move quickly and deliver quality solutions. NexaTech Solutions exceeded our expectations. They helped us build our entire technology infrastructure from scratch, and we\'ve been able to scale rapidly. Their flexible approach and startup-friendly pricing made them the perfect choice for us.',
      rating: 5,
    },
  ]

  // Placeholder client logos (using text-based placeholders)
  const clientLogos = [
    'TechFlow Industries',
    'Global Retail Corp',
    'HealthCare Plus',
    'FinanceFirst Group',
    'Manufacturing Dynamics',
    'StartUp Ventures',
    'InnovateTech Solutions',
    'Enterprise Systems Inc',
    'Digital Commerce Group',
    'Cloud Solutions Ltd',
    'Smart Manufacturing Co',
    'Healthcare Innovations',
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            Our Clients & Testimonials
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Trusted by businesses across industries
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gray-900">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're proud to work with innovative companies across various industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-24 hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="text-gray-600 font-medium text-sm text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read testimonials from clients who have transformed their businesses with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business. 
            Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
