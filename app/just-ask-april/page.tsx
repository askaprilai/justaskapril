'use client'

import { useState } from 'react'
import Link from 'next/link'

type ConversationStep = 1 | 2 | 3

interface ScriptTemplate {
  opening: string
  main: string
  action: string
  coaching: {
    tone: string[]
    delivery: string[]
    followup: string[]
  }
}

const scriptTemplates: Record<string, ScriptTemplate> = {
  performance: {
    opening: "Hi [name], I'd like to discuss your performance this [period]. I've noticed we haven't quite hit our targets, and I want to understand what challenges you're facing so we can work together on solutions.",
    main: "Let's look at the specific areas where we can improve. Can you walk me through what you think has been the biggest obstacle to reaching your goals? I'm here to support you, not blame you.",
    action: "Let's create a plan together. What support do you need from me? Let's set some specific, achievable goals for the next [timeframe] and check in weekly to track progress.",
    coaching: {
      tone: ["Stay calm and collaborative", "Use 'we' language instead of 'you'", "Ask questions before making statements", "Listen more than you speak"],
      delivery: ["Choose a private, comfortable setting", "Start with something positive if possible", "Be specific about behaviors, not personality", "Focus on solutions, not problems"],
      followup: ["Schedule follow-up meetings in advance", "Document the conversation and agreed actions", "Provide resources or training if needed", "Check in informally between formal meetings"]
    }
  },
  attendance: {
    opening: "Hi [name], I wanted to talk with you about attendance. I've noticed you've been late/absent [frequency], and I want to make sure everything is okay and see how we can address this together.",
    main: "Help me understand what's happening. Are there circumstances I should know about? I want to support you, but I also need to ensure our team can rely on consistent coverage.",
    action: "Let's work on a plan to improve attendance. What changes can you commit to? If there are underlying issues, let's discuss how I can help or what accommodations might be appropriate.",
    coaching: {
      tone: ["Show concern, not anger", "Be empathetic while maintaining expectations", "Ask about underlying causes", "Separate the person from the behavior"],
      delivery: ["Address promptly, don't let it build up", "Be factual about the impact on the team", "Offer support while being clear about expectations", "Give them a chance to explain first"],
      followup: ["Set clear attendance expectations", "Monitor improvement closely", "Provide positive reinforcement for progress", "Document patterns and improvements"]
    }
  },
  behavior: {
    opening: "Hi [name], I'd like to talk about some interactions that have come to my attention. I want to make sure we're all working together effectively and address any concerns.",
    main: "I've observed/heard about [specific behavior]. This impacts our team environment and our ability to work well together. Help me understand your perspective on these situations.",
    action: "Moving forward, I need to see [specific changes]. What support do you need to make these adjustments? Let's agree on specific behaviors and check in regularly on progress.",
    coaching: {
      tone: ["Be direct but not confrontational", "Focus on impact, not intent", "Stay professional and factual", "Show you care about their success"],
      delivery: ["Address behavior immediately when possible", "Use specific examples, not generalizations", "Explain the impact on others", "Be clear about expectations going forward"],
      followup: ["Monitor interactions closely", "Provide feedback regularly", "Acknowledge improvements immediately", "Address any relapses quickly"]
    }
  },
  termination: {
    opening: "Hi [name], I need to have a difficult conversation with you today. Despite our previous discussions and improvement attempts, we haven't seen the changes needed, and I have to let you go.",
    main: "This decision is based on [specific reasons]. We've tried [previous interventions], but unfortunately, the situation hasn't improved to the level we need for this role.",
    action: "Your last day will be [date]. Here's what happens next: [logistics]. I want to make this transition as smooth as possible for everyone. Do you have any questions about the process?",
    coaching: {
      tone: ["Be direct and compassionate", "Keep it brief and factual", "Stay calm if they get emotional", "Don't over-explain or justify"],
      delivery: ["Have HR present if possible", "Choose appropriate timing and location", "Have all paperwork ready", "Be prepared for various reactions"],
      followup: ["Handle logistics professionally", "Communicate with team appropriately", "Document the conversation thoroughly", "Follow company termination procedures exactly"]
    }
  },
  feedback: {
    opening: "Hi [name], I wanted to give you some feedback on [specific situation/project]. I think you did some great work, and I also have some suggestions for how to make it even better next time.",
    main: "What went really well was [positive specifics]. For future projects, I'd love to see you focus on [improvement areas]. What are your thoughts on this feedback?",
    action: "Let's set some goals for applying this feedback. What would you like to work on first? How can I support your development in these areas?",
    coaching: {
      tone: ["Balance positive and constructive feedback", "Be specific and actionable", "Make it about growth, not criticism", "Ask for their input and ideas"],
      delivery: ["Give feedback regularly, not just during reviews", "Focus on behaviors that can be changed", "Provide examples and suggestions", "End with encouragement"],
      followup: ["Check in on progress regularly", "Provide resources for improvement", "Acknowledge improvements when you see them", "Keep the development conversation ongoing"]
    }
  },
  other: {
    opening: "Hi [name], I wanted to talk with you about [situation]. I want to make sure we address this properly and work together toward a positive outcome.",
    main: "Let me share what I've observed: [specific details]. I'd like to understand your perspective on this and work together to find the best path forward.",
    action: "Based on our discussion, here's what I think we should do next: [action plan]. What are your thoughts on this approach? How can I support you in making this work?",
    coaching: {
      tone: ["Stay curious and open-minded", "Focus on understanding before being understood", "Maintain respect throughout the conversation", "Be solution-oriented"],
      delivery: ["Prepare your key points in advance", "Choose the right time and place", "Be specific about observed behaviors", "Ask for their input and ideas"],
      followup: ["Document key agreements made", "Set clear next steps and timelines", "Follow through on your commitments", "Check in regularly on progress"]
    }
  }
}

export default function JustAskAprilPage() {
  const [currentStep, setCurrentStep] = useState<ConversationStep>(1)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [situation, setSituation] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [generatedScript, setGeneratedScript] = useState<ScriptTemplate | null>(null)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleGenerateScript = async () => {
    if (!situation.trim()) {
      alert('Please describe your situation first.')
      return
    }

    setIsLoading(true)
    
    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const template = scriptTemplates[selectedCategory] || scriptTemplates.performance
    setGeneratedScript(template)
    setIsLoading(false)
    setCurrentStep(2)
  }

  const handleGetCoachingTips = () => {
    setCurrentStep(3)
  }

  const handleStartOver = () => {
    setCurrentStep(1)
    setSelectedCategory('')
    setSituation('')
    setGeneratedScript(null)
    setIsLoading(false)
  }

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
              <Link href="/courses" className="text-gray-600 hover:text-yellow-500 font-medium">
                Courses + Training
              </Link>
              <Link href="/just-ask-april" className="text-yellow-500 font-medium">
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-400 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-yellow-200 px-4 py-2 rounded">Just Ask April AI</span>
            <br />
            Get the Exact Words
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Never struggle with difficult conversations again. April AI gives you professional scripts, coaching tips, and confidence for any leadership situation.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2000+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Leaders Coached</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Conversation Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Any Situation Into Professional Dialogue
            </h2>
            <p className="text-xl text-gray-600">
              Choose your situation, describe the details, and get a complete conversation script with coaching guidance.
            </p>
          </div>

          <div className="relative bg-gray-50 rounded-2xl p-8 border-2 border-yellow-400 shadow-lg">
            {/* Step Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      currentStep >= step ? 'bg-yellow-400 scale-110' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Situation Input */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    1. Choose Your Situation Type
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { id: 'performance', label: 'Performance Issues', emoji: '📊' },
                    { id: 'attendance', label: 'Attendance Problems', emoji: '🕐' },
                    { id: 'behavior', label: 'Behavior/Attitude', emoji: '🗣️' },
                    { id: 'termination', label: 'Termination', emoji: '📋' },
                    { id: 'feedback', label: 'Giving Feedback', emoji: '💬' },
                    { id: 'other', label: 'Other', emoji: '❓' }
                  ].map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 text-center font-semibold ${
                        selectedCategory === category.id
                          ? 'border-yellow-400 bg-yellow-400 text-gray-900 shadow-lg scale-105'
                          : 'border-gray-300 bg-white text-gray-600 hover:border-yellow-400 hover:bg-yellow-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{category.emoji}</div>
                      <div className="text-sm">{category.label}</div>
                    </button>
                  ))}
                </div>
                
                <div>
                  <label htmlFor="situation" className="block text-lg font-semibold text-gray-900 mb-3">
                    Describe your specific situation:
                  </label>
                  <textarea
                    id="situation"
                    value={situation}
                    onChange={(e) => setSituation(e.target.value)}
                    rows={4}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-yellow-400 focus:outline-none text-gray-900"
                    placeholder="e.g., 'My employee Sarah has missed her sales targets for the third month in a row. She seems frustrated but won't talk about what's wrong. I need to address this but don't want to make things worse. She's usually a good performer but something has changed.'"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleGenerateScript}
                    className="bg-gray-900 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    Get My Professional Script
                  </button>
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-16">
                <div className="inline-block w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-semibold text-gray-700">
                  April AI is crafting your professional conversation script...
                </p>
              </div>
            )}

            {/* Step 2: Generated Script */}
            {currentStep === 2 && generatedScript && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    2. Your Professional Conversation Script
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      🚀 Opening (Set the Right Tone)
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-gray-900 font-medium leading-relaxed">
                        "{generatedScript.opening}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      💬 Main Discussion (Address the Issue)
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-gray-900 font-medium leading-relaxed">
                        "{generatedScript.main}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-2 border-yellow-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      🎯 Next Steps (Create Action Plan)
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-gray-900 font-medium leading-relaxed">
                        "{generatedScript.action}"
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetCoachingTips}
                    className="btn-secondary"
                  >
                    Get Coaching & Delivery Tips
                  </button>
                  <button
                    onClick={handleStartOver}
                    className="btn-primary"
                  >
                    Try Another Situation
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Coaching Tips */}
            {currentStep === 3 && generatedScript && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    3. Professional Coaching & Delivery Guidance
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      🎯 Tone & Body Language
                    </h4>
                    <ul className="space-y-3">
                      {generatedScript.coaching.tone.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 font-bold mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      🗣️ Delivery Guidance
                    </h4>
                    <ul className="space-y-3">
                      {generatedScript.coaching.delivery.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 font-bold mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      📋 Follow-Up Actions
                    </h4>
                    <ul className="space-y-3">
                      {generatedScript.coaching.followup.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 font-bold mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleStartOver}
                    className="btn-primary"
                  >
                    Try Another Situation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Examples from April AI
            </h2>
            <p className="text-xl text-gray-600">
              See how April AI transforms awkward situations into professional conversations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Issue",
                situation: "Employee missed targets three months in a row",
                script: "Hi Sarah, I'd like to discuss your performance this quarter. I've noticed we haven't quite hit our targets, and I want to understand what challenges you're facing so we can work together on solutions."
              },
              {
                title: "Attendance Problem", 
                situation: "Team member frequently late to work",
                script: "Hi Mike, I wanted to talk with you about attendance. I've noticed you've been late several times this month, and I want to make sure everything is okay and see how we can address this together."
              },
              {
                title: "Giving Feedback",
                situation: "Need to give constructive feedback on project", 
                script: "Hi Lisa, I wanted to give you some feedback on the Johnson project. You did some great work on the analysis, and I also have some suggestions for how to make the presentation even stronger next time."
              }
            ].map((example, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{example.title}</h3>
                <p className="text-gray-600 italic text-sm mb-4">"{example.situation}"</p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-900 font-medium text-sm leading-relaxed">"{example.script}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}