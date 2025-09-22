import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type CMSPost = {
  title: string
  date: string
  type: string
  description?: string
  link?: string
  slug?: string
  html?: string
}

export default function News() {
  const [posts, setPosts] = useState<CMSPost[] | null>(null)
  useEffect(() => {
    fetch('/content/posts.json', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : [])
      .then((data: CMSPost[]) => setPosts(data))
      .catch(() => setPosts([]))
  }, [])

  return (
    <section style={{maxWidth:980, margin:'0 auto'}}>
      <h1 style={{fontSize:32, fontWeight:800, marginBottom:16}}>News</h1>
      {posts === null && <p>Loading…</p>}
      {posts && posts.length === 0 && <p>No posts yet.</p>}
      {posts && posts.length > 0 && (
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:16}}>
          {posts.map(p => (
            <article key={p.slug} style={{border:'1px solid #e2e8f0', borderRadius:12, padding:16}}>
              <h3 style={{marginTop:0, marginBottom:8, fontSize:20}}>
                <Link to={`/post/${p.slug}`} style={{textDecoration:'none'}}>{p.title}</Link>
              </h3>
              <div style={{fontSize:13, color:'#64748b', marginBottom:8}}>{new Date(p.date).toLocaleDateString()}</div>
              {p.description && <p style={{marginTop:0}}>{p.description}</p>}
              {p.link && <a href={p.link} target="_blank" rel="noreferrer">External link →</a>}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
