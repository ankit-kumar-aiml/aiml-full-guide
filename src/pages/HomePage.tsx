import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Target, TrendingUp, Award } from 'lucide-react'
import { useEffect, useState } from 'react'
import { loadProgress } from '../utils/storage'
import { getCompletionStats } from '../utils/progress'

function HomePage() {
  const [stats, setStats] = useState({
    currentDay: 1,
    completedDays: 0,
    overallProgress: 0,
    streak: 0
  })

  useEffect(() => {
    const progressData = loadProgress()
    const completionStats = getCompletionStats(progressData)
    setStats({
      currentDay: completionStats.currentDay,
      completedDays: completionStats.completedDays,
      overallProgress: completionStats.overallProgress,
      streak: completionStats.streak
    })
  }, [])

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-primary-50 rounded-full">
          <p className="text-sm font-medium text-primary-700">
            Hosted by Ankit Kumar
          </p>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          AI/ML Full Guide
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive 365-day learning platform for CSE AI/ML B.Tech students.
          Master AI/ML from fundamentals to FAANG-level interviews.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            View 365-Day Roadmap
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to={`/day/${stats.currentDay}`}
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Continue Day {stats.currentDay}
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Day</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.currentDay}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed Days</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.completedDays}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overall Progress</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.overallProgress}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats.streak}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Structured Learning
          </h3>
          <p className="text-gray-600">
            Follow a proven 365-day roadmap covering Python, ML algorithms, deployment, and FAANG interview prep.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Daily Tasks & Projects
          </h3>
          <p className="text-gray-600">
            Complete hands-on tasks, practice problems, and build real-world projects to strengthen your portfolio.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Progress Tracking
          </h3>
          <p className="text-gray-600">
            Monitor your progress, track completed tasks, and stay motivated with streaks and statistics.
          </p>
        </div>
      </div>

      {/* Learning Phases */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">6 Learning Phases</h2>
        <div className="space-y-4">
          {[
            { phase: 'Phase 1', days: 'Days 1-30', title: 'Foundation', desc: 'Python + Data fundamentals' },
            { phase: 'Phase 2', days: 'Days 31-60', title: 'ML Engineer Mode', desc: 'Core ML algorithms' },
            { phase: 'Phase 3', days: 'Days 61-120', title: 'Industry Level', desc: 'Advanced ML + NLP' },
            { phase: 'Phase 4', days: 'Days 121-180', title: 'Deployment', desc: 'FastAPI + Docker + Cloud' },
            { phase: 'Phase 5', days: 'Days 181-270', title: 'FAANG Ready', desc: 'Transformers + LLMs + System Design' },
            { phase: 'Phase 6', days: 'Days 271-365', title: 'Interview Mastery', desc: 'Mock interviews + Offers' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary-600">{index + 1}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.days} • {item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/roadmap"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
          >
            View Full Roadmap
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your AI/ML Journey?
        </h2>
        <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
          Join thousands of students mastering AI/ML with this comprehensive, freely hosted platform.
        </p>
        <Link
          to={`/day/${stats.currentDay}`}
          className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Start Day {stats.currentDay}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}

export default HomePage
