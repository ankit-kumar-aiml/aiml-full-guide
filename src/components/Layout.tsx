import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, Map, TrendingUp, FolderGit2, Briefcase, BookOpen, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { loadProgress } from '../utils/storage'
import { calculateOverallProgress } from '../utils/progress'

function Layout() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressData = loadProgress()
    const overallProgress = calculateOverallProgress(progressData.completedDays)
    setProgress(overallProgress)
  }, [location])

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/roadmap', label: 'Roadmap', icon: Map },
    { path: '/progress', label: 'Progress', icon: TrendingUp },
    { path: '/projects', label: 'Projects', icon: FolderGit2 },
    { path: '/interview-prep', label: 'Interview Prep', icon: Briefcase },
    { path: '/resources', label: 'Resources', icon: BookOpen },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI/ML Full Guide</h1>
                <p className="text-xs text-gray-500">Hosted by Ankit Kumar</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Progress Indicator */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="text-right">
                <p className="text-xs text-gray-500">Overall Progress</p>
                <p className="text-sm font-semibold text-primary-600">{progress}%</p>
              </div>
              <div className="w-16 h-16">
                <svg className="transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray={`${progress}, 100`}
                  />
                </svg>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-gray-600">Overall Progress</span>
                  <span className="text-sm font-semibold text-primary-600">{progress}%</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Hosted by <span className="font-semibold text-primary-600">Ankit Kumar</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Freely hosted to train AI/ML students pursuing CSE AI/ML B.Tech
            </p>
            <p className="text-xs text-gray-400 mt-4">
              © 2024 AI/ML Full Guide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
