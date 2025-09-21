import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ResearchPage from './pages/ResearchPage'
import TeamPage from './pages/TeamPage'
import PubsPage from './pages/PubsPage'
import OpenPositionsPage from './pages/OpenPositionsPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pubs" element={<PubsPage />} />
        <Route path="/positions" element={<OpenPositionsPage />} />
      </Routes>
    </HashRouter>
  )
}
