import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Post from './pages/Post'

export default function App() {
  return (
    <div style={{fontFamily:'Inter, system-ui, Arial', lineHeight:1.5, color:'#0f172a'}}>
      <header style={{padding:'16px 24px', borderBottom:'1px solid #e2e8f0', position:'sticky', top:0, background:'#fff', zIndex:10}}>
        <nav style={{display:'flex', gap:16, alignItems:'center'}}>
          <Link to="/" style={{fontWeight:700, textDecoration:'none', color:'#0f172a'}}>NIO Lab</Link>
          <div style={{display:'flex', gap:12}}>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <a href="/admin">Admin</a>
          </div>
        </nav>
      </header>
      <main style={{padding:'24px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </main>
      <footer style={{padding:'24px', borderTop:'1px solid #e2e8f0', color:'#64748b'}}>
        © {new Date().getFullYear()} NIO Lab
      </footer>
    </div>
  )
}
