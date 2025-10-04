'use client'

import Link from 'next/link'

export default function CoursesPage() {
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
              <Link href="/#about" className="text-gray-600 hover:text-yellow-500 font-medium">
                About
              </Link>
              <Link href="/#ai-coach" className="text-gray-600 hover:text-yellow-500 font-medium">
                AI Coach + HR
              </Link>
              <Link href="/courses" className="text-yellow-500 font-medium">
                Courses + Training
              </Link>
              <Link href="/just-ask-april" className="text-gray-600 hover:text-yellow-500 font-medium">
                Just Ask April
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-yellow-500 font-medium">
                Pricing
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-yellow-500 font-medium">
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Leadership Training Courses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Master the art of leadership with April Sabral's comprehensive training program. 30+ years of proven expertise distilled into actionable courses designed for real-world success.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400">
              <div className="text-3xl font-bold text-yellow-500 mb-2">250+</div>
              <div className="text-gray-600 font-semibold">Video Lessons</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400">
              <div className="text-3xl font-bold text-yellow-500 mb-2">6</div>
              <div className="text-gray-600 font-semibold">Complete Courses</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400">
              <div className="text-3xl font-bold text-yellow-500 mb-2">30+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400">
              <div className="text-3xl font-bold text-yellow-500 mb-2">2000+</div>
              <div className="text-gray-600 font-semibold">Leaders Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Learning Hub Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Access April's Complete Learning Hub
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Get instant access to all 250+ video lessons, interactive exercises, and progress tracking in April's dedicated learning platform.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  <span className="font-semibold text-gray-900">Personalized learning paths</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  <span className="font-semibold text-gray-900">Progress tracking & certificates</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💬</span>
                  <span className="font-semibold text-gray-900">Interactive community</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  <span className="font-semibold text-gray-900">Mobile learning access</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide shadow-lg hover:bg-gray-800 transition-colors duration-300">
                  Access Learning Hub
                </button>
                <Link href="/just-ask-april" className="btn-secondary text-center">
                  Try Ask April AI First
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-yellow-400">
                <h4 className="font-bold text-gray-900">April's Learning Hub</h4>
                <div className="text-green-500 text-sm">🟢 Available 24/7</div>
              </div>
              
              <div className="space-y-4 mb-4">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
                    <span>Essential Leadership Skills</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div className="bg-yellow-400 h-2 rounded-full w-0"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
                    <span>Difficult Conversations</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div className="bg-yellow-400 h-2 rounded-full w-0"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
                    <span>Team Leadership</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div className="bg-yellow-400 h-2 rounded-full w-0"></div>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center italic">
                Powered by secure learning platform with your personalized dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🔗 Seamless Integration
          </h3>
          <p className="text-lg text-gray-600 mb-12">
            Your Ask April AI account automatically gives you access to the Learning Hub. One login, complete leadership development.
          </p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400 text-center min-w-[200px]">
              <div className="text-3xl mb-3">🤖</div>
              <div className="font-bold text-gray-900 mb-2">Ask April AI</div>
              <div className="text-sm text-gray-600">Get instant scripts & coaching</div>
            </div>
            
            <div className="text-2xl text-yellow-500 font-bold transform lg:rotate-0 rotate-90">→</div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400 text-center min-w-[200px]">
              <div className="text-3xl mb-3">📚</div>
              <div className="font-bold text-gray-900 mb-2">Learning Hub</div>
              <div className="text-sm text-gray-600">Deep-dive training & courses</div>
            </div>
            
            <div className="text-2xl text-yellow-500 font-bold transform lg:rotate-0 rotate-90">→</div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-400 text-center min-w-[200px]">
              <div className="text-3xl mb-3">🏆</div>
              <div className="font-bold text-gray-900 mb-2">Mastery</div>
              <div className="text-sm text-gray-600">Confident leadership skills</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}