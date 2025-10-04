'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Ask April AI
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-yellow-500 font-medium transition-colors">
                About
              </Link>
              <Link href="#ai-coach" className="text-gray-600 hover:text-yellow-500 font-medium transition-colors">
                AI Coach + HR
              </Link>
              <Link href="/courses" className="text-gray-600 hover:text-yellow-500 font-medium transition-colors">
                Courses + Training
              </Link>
              <Link href="/just-ask-april" className="text-gray-600 hover:text-yellow-500 font-medium transition-colors">
                Just Ask April
              </Link>
              <Link href="#hr-dashboard" className="text-gray-600 hover:text-yellow-500 font-medium transition-colors">
                HR Dashboard
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-yellow-500 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-yellow-500 font-medium transition-colors">
                Contact
              </Link>
              <Link href="/auth/signup" className="btn-primary">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-left animate-slide-in-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your Leadership Impact + Streamline Your HR
                </h1>
                
                <p className="text-xl font-semibold gradient-text mb-4 italic">
                  It's like having April in your pocket with over 30 years of team leadership experience
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  April Sabral is your go-to expert for everything team leadership and people. The only platform that combines proven leadership wisdom with complete HR management tools. Get instant AI coaching for difficult situations plus everything you need to manage your team effectively.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/auth/signup" 
                    className="btn-primary text-center px-8 py-4 text-lg"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    href="/just-ask-april" 
                    className="btn-secondary text-center px-8 py-4 text-lg"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="relative max-w-lg w-full">
                  <Image
                    src="/30 years experience.png"
                    alt="Ask April AI - 30 Years Leadership Experience"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Sections */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Feature 1: Problem Statement */}
            <div className="mb-16 py-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  The Challenge Small Business Owners Face
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Managing people is the hardest part of running a business, and traditional solutions don't address the real problems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Leadership + HR Challenges Are Connected
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You're dealing with difficult employees, performance issues, and HR compliance all at once. Generic HR software gives you forms, but not the skills to handle tough situations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Difficult conversations with underperforming employees
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      HR paperwork and compliance requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Time-consuming employee management tasks
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      No guidance on actual leadership challenges
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Expensive HR consultants for basic questions
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-8 text-white min-h-80 flex flex-col justify-center">
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3">Traditional Approach Problems</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <div>
                          <strong>Generic HR software:</strong> Forms but no guidance
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <div>
                          <strong>Expensive consultants:</strong> $200/hour for basic questions
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <div>
                          <strong>Management books:</strong> Theory that doesn't work in practice
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">×</span>
                        </div>
                        <div>
                          <strong>Separate systems:</strong> HR tools + coaching don't connect
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: AI Coach + HR Solution */}
            <div className="mb-16 py-12 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Your Personal AI Business Coach + Complete HR System
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get instant guidance for leadership challenges plus all the HR tools you need to manage your team effectively.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-gray-900 rounded-xl p-6 text-white min-h-80">
                  <div className="bg-yellow-500 text-gray-900 px-4 py-3 rounded-lg font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Ask April AI - Live Demo
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-gray-600">
                      <strong className="text-yellow-400">You:</strong><br/>
                      "Sarah is always late and I need to write her up. How do I handle this conversation?"
                    </div>
                    
                    <div className="bg-yellow-500 text-gray-900 p-3 rounded-lg border-l-4 border-yellow-600">
                      <strong>April AI:</strong><br/>
                      "I understand this is a difficult situation. Here's how to approach this professionally..."
                    </div>
                    
                    <div className="bg-yellow-500 text-gray-900 p-3 rounded-lg border-l-4 border-yellow-600">
                      <strong>April AI:</strong><br/>
                      "First, have a private conversation. Say: 'Sarah, I've noticed you've been late 4 times this month. Can you help me understand what's happening?'"
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Leadership Coaching Meets HR Management
                  </h3>
                  <div className="inline-block bg-gray-900 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    NEW: Integrated HR Tools
                  </div>
                  <p className="text-gray-600 mb-6">
                    Unlike other solutions, we combine real leadership coaching with practical HR management. Get guidance on difficult conversations AND the paperwork to back it up.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Instant AI coaching for any leadership situation
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Employee database and performance tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Automated onboarding and offboarding
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      HR document generation (contracts, reviews, warnings)
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Time-off management and approval workflows
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Compliance tracking and reminders
                    </li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-lg border-l-4 border-gray-900">
                    <strong>Example:</strong> Need to fire someone? Get coaching on the conversation AND the termination paperwork - all in one place.
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Learning Library + HR Training */}
            <div className="mb-16 py-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  250+ Video Lessons + HR Training Modules
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The most comprehensive library of leadership and HR training designed specifically for small business owners.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Complete Training for You and Your Team
                  </h3>
                  <div className="inline-block bg-gray-900 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    EXPANDED: HR Training Added
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our library now includes both leadership development AND HR management training. Train yourself and your managers on everything from difficult conversations to compliance requirements.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Leadership coaching and development
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      HR compliance and legal requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Performance management techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Interview and hiring best practices
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Employee development and retention
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Conflict resolution and communication
                    </li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-lg border-l-4 border-gray-900">
                    <strong>New HR Modules:</strong> Train your managers on how to conduct performance reviews, handle employee complaints, and manage difficult team members.
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-8 text-white min-h-80 flex flex-col justify-center">
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold mb-4">
                      Learning Library Categories
                    </div>
                    <div className="space-y-2 text-sm">
                      📚 Leadership Development (100+ lessons)<br/>
                      📋 HR Management (75+ lessons)<br/>
                      🗣️ Communication Skills (50+ lessons)<br/>
                      ⚖️ Legal Compliance (25+ lessons)<br/>
                      💼 Industry-Specific Training<br/>
                      🎯 Performance Management
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Complete HR Management System */}
            <div className="mb-16 py-12 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Complete HR Management System
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Everything you need to manage employees from hire to retire, integrated with your AI coach.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-gray-900 rounded-xl p-8 text-white min-h-80 flex flex-col justify-center">
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold mb-4">
                      HR Dashboard Overview
                    </div>
                    <div className="space-y-2 text-sm">
                      👥 Employee Profiles & Database<br/>
                      📅 Time-off Requests (3 pending)<br/>
                      📊 Performance Reviews Due (2)<br/>
                      ⚠️ Compliance Reminders (1)<br/>
                      📄 Documents Generated This Month (12)<br/>
                      🤖 AI Coach Sessions (24 this month)
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Integrated HR Tools Built for Small Business
                  </h3>
                  <div className="inline-block bg-gray-900 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    FEATURED: Complete HR Suite
                  </div>
                  <p className="text-gray-600 mb-6">
                    Stop juggling multiple systems. Our HR tools work seamlessly with your AI coach to provide guidance and handle the administrative side of people management.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Employee database with full profiles and history
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Automated onboarding workflows and checklists
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Performance review templates and scheduling
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Time-off tracking and approval system
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      HR document generation (contracts, policies, forms)
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Compliance tracking and deadline reminders
                    </li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-lg border-l-4 border-gray-900">
                    <strong>Smart Integration:</strong> When you ask the AI coach about an employee issue, it can pull up their file, performance history, and suggest next steps based on their specific situation.
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: How to Say This Tool */}
            <div className="mb-16 py-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  "Just Ask April" - Get the Exact Words
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Transform awkward situations into professional conversations. Just ask April for the exact scripts you need.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      Build confidence through practice scenarios
                    </li>
                  </ul>
                  
                  <Link 
                    href="/just-ask-april" 
                    className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-lg font-bold text-xl uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    🚀 Try Just Ask April Now
                  </Link>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="border-b-2 border-yellow-400 pb-4 mb-6 flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">Just Ask April AI</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-5">
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

            {/* Feature 6: How It Works */}
            <div className="mb-16 py-12 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  6
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  How It Works: Coaching + HR in Action
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See how leadership coaching and HR management work together to solve real business problems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Real Scenario: Handling Employee Performance
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Here's how Ask April AI helps you handle a typical situation from start to finish:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      <strong>Step 1:</strong> Ask AI coach "How do I handle a consistently late employee?"
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      <strong>Step 2:</strong> Get coached through the conversation approach
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      <strong>Step 3:</strong> AI generates the written warning document
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      <strong>Step 4:</strong> Employee file is automatically updated
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 font-bold mr-2">✓</span>
                      <strong>Step 5:</strong> Follow-up reminders and next steps are scheduled
                    </li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-lg border-l-4 border-gray-900">
                    <strong>Result:</strong> You handled the situation professionally, documented everything properly, and learned skills for next time - all in under 15 minutes.
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-8 text-white min-h-80 flex flex-col justify-center">
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold mb-4">
                      Integrated Workflow Example
                    </div>
                    <div className="space-y-4 text-sm">
                      <div>
                        <strong>Coaching:</strong> "Here's how to approach this conversation..."
                      </div>
                      <div>
                        <strong>HR Action:</strong> Written warning generated automatically
                      </div>
                      <div>
                        <strong>Follow-up:</strong> Performance improvement plan created
                      </div>
                      <div>
                        <strong>Tracking:</strong> Timeline and deadlines set
                      </div>
                    </div>
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

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-2xl font-medium italic text-gray-900 mb-8 leading-relaxed">
                "I was struggling with both leadership challenges and HR paperwork. Ask April AI solved both problems in one platform. The AI coach helped me handle a difficult employee situation, and the HR tools generated all the documentation I needed. This is exactly what small business owners need."
              </div>
              <div className="font-semibold text-gray-600">
                - Sarah M., Retail Store Owner
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-yellow-400 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Leadership + Streamline Your HR?
            </h2>
            <p className="text-xl text-gray-900 mb-8">
              Join thousands of small business owners who've discovered the power of integrated coaching and HR management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="btn-primary px-8 py-4 text-lg">
                Start Your Free Trial
              </Link>
              <Link href="/just-ask-april" className="btn-secondary px-8 py-4 text-lg">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}