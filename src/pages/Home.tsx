import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section style={{maxWidth:880, margin:'0 auto'}}>
      <h1 style={{fontSize:36, fontWeight:800, marginBottom:8}}>Welcome to NIO Lab</h1>
      <p style={{fontSize:18, color:'#334155'}}>Cloudflare Pages + Decap CMS (GitHub OAuth via Pages Functions).</p>
      <div style={{marginTop:24}}>
        <Link to="/news" style={{padding:'10px 16px', border:'1px solid #0f172a', borderRadius:10, textDecoration:'none'}}>Go to News</Link>
      </div>
    </section>
  )
}
