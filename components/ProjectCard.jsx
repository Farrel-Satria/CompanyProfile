'use client'

import { useEffect, useRef } from 'react'

export default function ProjectCard({ name, industry, description, role }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            entry.target.classList.remove('opacity-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 opacity-0"
    >
      <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
        <div className="text-white text-center">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="font-heading font-semibold text-lg">{name}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {industry}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Our Role:</span> {role}
          </p>
        </div>
      </div>
    </div>
  )
}
