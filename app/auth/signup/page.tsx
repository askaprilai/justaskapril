'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    companyName: '',
    employeeCount: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // TODO: Implement Supabase authentication
    console.log('Signup attempt:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Ask April AI
            </Link>
            <h2 className="mt-4 text-xl font-semibold text-gray-700">
              Start Your Free Trial
            </h2>
            <p className="text-gray-600">
              Get instant access to leadership coaching + HR tools
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="">Select...</option>
                <option value="1-5">1-5 employees</option>
                <option value="6-20">6-20 employees</option>
                <option value="21-50">21-50 employees</option>
                <option value="51+">51+ employees</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 disabled:opacity-50 transition-colors duration-300"
            >
              {isLoading ? 'Creating account...' : 'Start Free Trial'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="font-medium text-yellow-600 hover:text-yellow-500">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By signing up, you agree to our Terms of Service and Privacy Policy. 
              Free trial includes full access for 14 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}