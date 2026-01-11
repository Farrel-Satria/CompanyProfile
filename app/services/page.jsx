import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export const metadata = {
  title: 'Services - NexaTech Solutions | Web Development, IT Support & More',
  description: 'Comprehensive IT services including web development, IT support & maintenance, system integration, and digital transformation consulting. Discover how we can help your business.',
}

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Our web development services encompass everything from responsive websites to complex web applications. We leverage modern frameworks like React, Next.js, and Node.js to build scalable, performant solutions. Whether you need a simple business website, an e-commerce platform, or a custom web application, our team delivers solutions that are fast, secure, and user-friendly. We follow industry best practices for code quality, SEO optimization, and accessibility, ensuring your web presence drives real business results.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Web application development',
        'Responsive design',
        'SEO optimization',
        'Performance optimization',
      ],
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Keep your IT infrastructure running smoothly with our comprehensive support and maintenance services. We provide 24/7 monitoring, proactive maintenance, rapid incident response, and strategic guidance. Our team handles everything from routine updates and backups to emergency troubleshooting and system optimization. With our support, you can focus on your core business while we ensure your technology operates at peak performance. We offer flexible support packages tailored to your specific needs and budget.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        '24/7 system monitoring',
        'Proactive maintenance',
        'Rapid incident response',
        'Security updates & patches',
        'Backup & disaster recovery',
        'Performance optimization',
      ],
    },
    {
      title: 'System Integration',
      description: 'Seamlessly connect your business systems to create unified workflows and eliminate data silos. Our system integration services help you integrate enterprise software, cloud services, APIs, and third-party applications. We design integration architectures that improve efficiency, reduce manual work, and provide real-time data synchronization. Whether you need to connect CRM systems, ERP platforms, payment gateways, or custom applications, we ensure smooth, reliable integration that scales with your business.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'API development & integration',
        'Cloud service integration',
        'Enterprise software integration',
        'Data synchronization',
        'Workflow automation',
        'Legacy system integration',
      ],
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Navigate your digital transformation journey with expert guidance from our consulting team. We help businesses identify opportunities, develop strategies, and implement technology solutions that drive growth and innovation. Our consultants work closely with your leadership team to understand your business objectives, assess your current technology landscape, and create a roadmap for transformation. From cloud migration strategies to process automation, we provide the insights and expertise needed to succeed in today\'s digital economy.',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        'Technology strategy development',
        'Digital readiness assessment',
        'Cloud migration planning',
        'Process automation',
        'Change management',
        'ROI analysis & planning',
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Comprehensive IT solutions tailored to transform your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                <div className="flex-1 p-8 lg:p-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start bg-secondary rounded-lg p-4">
                        <svg
                          className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center p-8 lg:p-12">
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-xl p-12 shadow-xl flex items-center justify-center">
                      <div className="text-primary scale-150">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business. 
            Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
