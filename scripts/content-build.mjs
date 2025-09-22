import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

const ROOT = process.cwd()
const CONTENT_DIR = path.join(ROOT, 'content', 'posts')
const OUT_DIR = path.join(ROOT, 'dist', 'content')
fs.mkdirSync(OUT_DIR, { recursive: true })

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
}

function readPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))
  const posts = files.map(file => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const title = data.title ?? path.basename(file, '.md')
    const date = data.date ?? new Date().toISOString()
    const type = data.type ?? 'News'
    const description = data.description ?? ''
    const link = data.link ?? ''
    const slug = data.slug ?? slugify(title)
    const html = marked.parse(content || '')
    return { title, date, type, description, link, slug, html }
  }).sort((a,b) => new Date(b.date) - new Date(a.date))
  return posts
}

const posts = readPosts()
fs.writeFileSync(path.join(OUT_DIR, 'posts.json'), JSON.stringify(posts, null, 2))
console.log(`[content-build] Wrote ${posts.length} post(s) -> dist/content/posts.json`)
