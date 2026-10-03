import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources/articles/:slug" element={<ArticlePage />} />

        {/* The old multi-page routes now live as sections on the home page. */}
        <Route path="/platform" element={<Navigate to="/#platform" replace />} />
        <Route path="/platform/proctoring" element={<Navigate to="/#anti-cheat" replace />} />
        <Route path="/platform/*" element={<Navigate to="/#platform" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/faq" element={<Navigate to="/#faq" replace />} />
        <Route path="/resources" element={<Navigate to="/#resources" replace />} />
        <Route path="/resources/cases/*" element={<Navigate to="/#resources" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
