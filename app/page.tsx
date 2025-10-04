'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Ask April AI
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-yellow-500 font-medium">
                About
              </Link>
              <Link href="#ai-coach" className="text-gray-600 hover:text-yellow-500 font-medium">
                AI Coach + HR
              </Link>
              <Link href="/courses" className="text-gray-600 hover:text-yellow-500 font-medium">
                Courses + Training
              </Link>
              <Link href="/just-ask-april" className="text-yellow-500 font-medium">
                Just Ask April
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-yellow-500 font-medium">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-yellow-500 font-medium">
                Contact
              </Link>
              <Link href="/auth/login" className="btn-primary">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Leadership Impact + Streamline Your HR
              </h1>
              
              <p className="text-xl font-semibold text-yellow-600 mb-4 italic">
                It's like having April in your pocket with over 30 years of team leadership experience
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                April Sabral is your go-to expert for everything team leadership and people. The only platform that combines proven leadership wisdom with complete HR management tools. Get instant AI coaching for difficult situations plus everything you need to manage your team effectively.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/auth/signup" 
                  className="btn-primary text-center"
                >
                  Start Free Trial
                </Link>
                <Link 
                  href="/just-ask-april" 
                  className="btn-secondary text-center"
                >
                  Try Just Ask April
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/30 years experience.png"
                  alt="Ask April AI - 30 Years Leadership Experience"
                  width={400}
                  height={300}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Just Ask April Feature Highlight */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              "Just Ask April" - Get the Exact Words
            </h2>
            <p className="text-xl text-gray-600">
              Transform awkward situations into professional conversations. Just ask April AI for the exact scripts you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Never Struggle with What to Say Again
              </h3>
              <div className="inline-block bg-gray-900 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                FEATURED: Conversation Scripts
              </div>
              <p className="text-gray-600 mb-6">
                The biggest leadership challenge? Knowing exactly what to say in difficult moments. April AI gives you the exact words, tone guidance, and follow-up coaching for any situation.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  Get instant conversation scripts for any situation
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  Practice responses with tone and delivery coaching
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  Transform "You didn't meet target" into professional development
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  Follow-up guidance and next steps included
                </li>
              </ul>
              
              <Link 
                href="/just-ask-april" 
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                🚀 Try Just Ask April Now
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-200">
              <div className="border-b-2 border-yellow-400 pb-4 mb-6">
                <h4 className="font-bold text-gray-900 flex items-center justify-between">
                  Just Ask April AI
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600">
                  <strong className="block text-gray-900 mb-2">Your Situation:</strong>
                  "Employee missed sales target again"
                </div>
                
                <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                  <strong className="block text-gray-900 mb-2">April AI's Script:</strong>
                  "Hi Sarah, I'd like to talk about your sales performance this month. I see we fell short of the target by about 15%. Can you walk me through what challenges you encountered so we can problem-solve together?"
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                  <strong className="block text-gray-900 mb-2">Coaching Tips:</strong>
                  • Use collaborative language ("we" not "you")<br/>
                  • Ask for their perspective first<br/>
                  • Focus on problem-solving, not blame
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12">
            Trusted by Small Business Owners Everywhere
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">250+</div>
              <div className="text-gray-300">Video Lessons</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">30</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Coach Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">HR Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Leadership + Streamline Your HR?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of small business owners who've discovered the power of integrated coaching and HR management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="btn-primary">
              Start Your Free Trial
            </Link>
            <Link href="/just-ask-april" className="btn-secondary">
              Try Just Ask April
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}