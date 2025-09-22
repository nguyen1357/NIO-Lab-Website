import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

type CMSPost = {
  title: string
  date: string
  type: string
  description?: string
  link?: string
  slug?: string
  html?: string
}

export default function Post() {
  const { slug } = useParams()
  const [post, setPost] = useState<CMSPost | null>(null)

  useEffect(() => {
    fetch('/content/posts.json', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : [])
      .then((data: CMSPost[]) => {
        const found = data.find(p => p.slug === slug)
        setPost(found ?? null)
      })
      .catch(() => setPost(null))
  }, [slug])

  if (!post) return <p style={{maxWidth:800, margin:'0 auto'}}>Loading…</p>

  return (
    <article style={{maxWidth:800, margin:'0 auto'}}>
      <p><Link to="/news">← Back to News</Link></p>
      <h1 style={{fontSize:36, fontWeight:800, marginBottom:8}}>{post.title}</h1>
      <div style={{fontSize:13, color:'#64748b', marginBottom:16}}>{new Date(post.date).toLocaleString()}</div>
      <div dangerouslySetInnerHTML={{__html: post.html || ''}} />
    </article>
  )
}
