import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import AssessmentsPage from './pages/AssessmentsPage'
import CaseFintechPage from './pages/CaseFintechPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PlatformOverviewPage from './pages/PlatformOverviewPage'
import ProctoringPage from './pages/ProctoringPage'
import ResourcesPage from './pages/ResourcesPage'
import SciencePage from './pages/SciencePage'
import UseCasesPage from './pages/UseCasesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformOverviewPage />} />
        <Route path="/platform/science" element={<SciencePage />} />
        <Route path="/platform/assessments" element={<AssessmentsPage />} />
        <Route path="/platform/proctoring" element={<ProctoringPage />} />
        <Route path="/platform/use-cases" element={<UseCasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/cases/european-fintech-python-developers" element={<CaseFintechPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
