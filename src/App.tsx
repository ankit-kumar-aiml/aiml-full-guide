import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import RoadmapPage from './pages/RoadmapPage'
import DayPage from './pages/DayPage'
import ProgressPage from './pages/ProgressPage'
import ProjectsPage from './pages/ProjectsPage'
import InterviewPrepPage from './pages/InterviewPrepPage'
import ResourcesPage from './pages/ResourcesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="day/:dayNumber" element={<DayPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="interview-prep" element={<InterviewPrepPage />} />
        <Route path="resources" element={<ResourcesPage />} />
      </Route>
    </Routes>
  )
}

export default App
