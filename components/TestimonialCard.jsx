'use client'

import { useEffect, useRef } from 'react'

export default function TestimonialCard({ name, role, company, content, rating = 5 }) {
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
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 opacity-0"
    >
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{content}"</p>

      {/* Author Info */}
      <div className="flex items-center pt-4 border-t border-gray-100">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
          <span className="text-primary font-heading font-semibold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-heading font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role} at {company}</p>
        </div>
      </div>
    </div>
  )
}
