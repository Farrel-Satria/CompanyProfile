import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export const metadata = {
  title: 'Home - NexaTech Solutions | Empowering Businesses Through Smart Digital Solutions',
  description: 'NexaTech Solutions delivers cutting-edge IT services including web development, IT support, system integration, and digital transformation consulting.',
}

export default function Home() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern frameworks. We create responsive, scalable, and user-friendly digital experiences that drive engagement and conversions.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support services to keep your systems running smoothly. 24/7 monitoring, proactive maintenance, and rapid response to technical issues.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'System Integration',
      description: 'Seamlessly connect your business systems for improved efficiency. We integrate enterprise software, APIs, and cloud services to create unified workflows.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const featuredProjects = [
    {
      name: 'Enterprise E-Commerce Platform',
      industry: 'Retail',
      description: 'Built a scalable e-commerce solution handling millions of transactions. Implemented advanced inventory management, payment processing, and analytics dashboard.',
      role: 'Full-stack development, System architecture, Performance optimization',
    },
    {
      name: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'Developed a comprehensive patient management system with HIPAA compliance. Features include appointment scheduling, electronic health records, and telemedicine integration.',
      role: 'System integration, Security implementation, Cloud migration',
    },
    {
      name: 'Financial Analytics Dashboard',
      industry: 'Finance',
      description: 'Created a real-time financial analytics platform with predictive modeling. Integrated multiple data sources and provided actionable insights through interactive visualizations.',
      role: 'Data integration, Dashboard development, API design',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechFlow Industries',
      content: 'NexaTech transformed our digital infrastructure. Their expertise in system integration and ongoing support has been invaluable. We\'ve seen a 40% increase in operational efficiency.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'CTO',
      company: 'Global Retail Corp',
      content: 'Outstanding web development services. They delivered our e-commerce platform on time and within budget. The team is professional, responsive, and truly understands business needs.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Why Choose NexaTech Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Cutting-edge technologies and innovative approaches to solve complex challenges.',
                icon: '💡',
              },
              {
                title: 'Reliability',
                description: 'Proven track record of delivering projects on time and exceeding expectations.',
                icon: '✓',
              },
              {
                title: 'Transparency',
                description: 'Clear communication, detailed reporting, and full visibility into project progress.',
                icon: '🔍',
              },
              {
                title: 'Growth',
                description: 'Scalable solutions that grow with your business and adapt to changing needs.',
                icon: '📈',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-heading font-semibold text-2xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise through successful client implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                industry={project.industry}
                description={project.description}
                role={project.role}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
          <div className="text-center mt-12">
            <Link
              href="/clients"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let's discuss how NexaTech Solutions can help you achieve your technology goals. 
            Schedule a consultation today.
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
