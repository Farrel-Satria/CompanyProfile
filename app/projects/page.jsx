import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

export const metadata = {
  title: 'Projects - NexaTech Solutions | Our Portfolio & Case Studies',
  description: 'Explore our portfolio of successful projects across various industries. See how NexaTech Solutions has helped businesses transform through innovative technology solutions.',
}

export default function Projects() {
  const projects = [
    {
      name: 'Enterprise E-Commerce Platform',
      industry: 'Retail',
      description: 'Built a scalable e-commerce solution handling millions of transactions daily. The platform features advanced inventory management, real-time payment processing, comprehensive analytics dashboard, and seamless mobile experience. Implemented microservices architecture for high availability and scalability. Achieved 99.9% uptime and reduced page load times by 60%.',
      role: 'Full-stack development, System architecture, Performance optimization, DevOps implementation',
    },
    {
      name: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'Developed a comprehensive patient management system with full HIPAA compliance. Features include appointment scheduling, electronic health records (EHR), telemedicine integration, prescription management, and billing systems. The system handles millions of patient records securely and integrates with major healthcare providers and insurance companies.',
      role: 'System integration, Security implementation, Cloud migration, Compliance & certification',
    },
    {
      name: 'Financial Analytics Dashboard',
      industry: 'Finance',
      description: 'Created a real-time financial analytics platform with predictive modeling capabilities. The dashboard integrates multiple data sources including market data, transaction records, and customer analytics. Provides actionable insights through interactive visualizations, automated reporting, and AI-powered recommendations. Enabled data-driven decision making and improved forecasting accuracy by 45%.',
      role: 'Data integration, Dashboard development, API design, Machine learning implementation',
    },
    {
      name: 'Manufacturing ERP System',
      industry: 'Manufacturing',
      description: 'Implemented a comprehensive Enterprise Resource Planning system for a large manufacturing company. The system manages supply chain operations, production planning, quality control, inventory management, and financial reporting. Integrated with IoT devices for real-time monitoring and automated workflow processes. Reduced operational costs by 30% and improved production efficiency by 25%.',
      role: 'System integration, Process automation, IoT integration, Custom development',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Showcasing successful implementations across diverse industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                industry={project.industry}
                description={project.description}
                role={project.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Impact & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering measurable value for our clients
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '50+', label: 'Industries Served' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life. 
            Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
