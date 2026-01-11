import Link from 'next/link'

export const metadata = {
  title: 'About Us - NexaTech Solutions | Our Story, Vision & Mission',
  description: 'Learn about NexaTech Solutions - our company background, vision, mission, and core values. Discover how we empower businesses through innovative technology solutions.',
}

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, continuously exploring new tools and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.',
      icon: '💡',
    },
    {
      title: 'Reliability',
      description: 'Our commitment to reliability means consistent delivery, dependable support, and solutions that work when you need them. We build trust through action, not just words.',
      icon: '✓',
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication, clear processes, and honest feedback. Our clients always know where projects stand and what to expect at every stage.',
      icon: '🔍',
    },
    {
      title: 'Growth',
      description: 'We design solutions that scale with your business. Our approach focuses on long-term growth, ensuring your technology investments continue to deliver value as you expand.',
      icon: '📈',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            About NexaTech Solutions
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Empowering businesses through innovative technology solutions since our founding
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  NexaTech Solutions was founded with a simple yet powerful vision: to bridge the gap 
                  between complex technology and business success. We recognized that many businesses 
                  struggle to leverage technology effectively, often due to outdated systems, lack of 
                  expertise, or insufficient resources.
                </p>
                <p>
                  Since our inception, we've grown from a small team of passionate technologists into 
                  a trusted partner for businesses across various industries. Our journey has been 
                  marked by continuous learning, innovation, and an unwavering commitment to client success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">Innovation</h3>
                  <p className="text-gray-600 mt-2">Driving Digital Excellence</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">Team Excellence</h3>
                  <p className="text-gray-600 mt-2">Expert Professionals</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Today, NexaTech Solutions stands as a leader in IT services, having successfully 
                  delivered hundreds of projects ranging from simple website redesigns to complex 
                  enterprise system integrations. Our diverse portfolio spans healthcare, finance, 
                  retail, manufacturing, and beyond.
                </p>
                <p>
                  What sets us apart is our holistic approach. We don't just write code or fix 
                  problems—we become an extension of your team, understanding your business deeply 
                  and crafting solutions that drive real, measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted technology partner for businesses seeking to transform 
                their digital landscape. We envision a future where every organization, regardless 
                of size, has access to world-class IT solutions that empower growth and innovation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To deliver exceptional IT services that solve real business problems. We combine 
                technical expertise with strategic thinking to create solutions that are not just 
                functional, but transformative. Our mission is to help our clients achieve their 
                goals through technology that works seamlessly and drives measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-secondary rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-heading font-semibold text-2xl mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Discover how NexaTech Solutions can help transform your business. 
            Get in touch with us today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
