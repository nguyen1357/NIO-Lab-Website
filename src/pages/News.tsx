
import { ChevronRight, Calendar } from 'lucide-react'
import { newsData } from '../data/newsData'

/**
 * News Page Component
 * 
 * Dedicated page for displaying all news and announcements
 * Moved from the home page to create a separate news section
 */
type CMSPost = {
  title: string;
  date: string;
  type: string;
  description?: string;
  link?: string;
  slug?: string;
  html?: string;
};

import { useEffect, useState } from 'react'

export default function NewsPage() {
  
  const [cmsPosts, setCmsPosts] = useState<CMSPost[] | null>(null)

  useEffect(() => {
    fetch('/content/posts.json', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : Promise.reject())
      .then((data: CMSPost[]) => setCmsPosts(data))
      .catch(() => setCmsPosts([]))
  }, [])
return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NIO</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">NIO-Lab</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#/news" className="text-blue-600 font-medium">News</a>
            <a href="#/research" className="text-gray-600 hover:text-blue-600 transition-colors">Research</a>
            <a href="#/team" className="text-gray-600 hover:text-blue-600 transition-colors">Team</a>
            <a href="#/pubs" className="text-gray-600 hover:text-blue-600 transition-colors">Pubs</a>
            <a href="#/positions" className="text-gray-600 hover:text-blue-600 transition-colors">Open Positions</a>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest News</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest announcements, events, and achievements from NIO-Lab
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {newsData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                </div>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    View Program <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                ) : (
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">NIO</span>
                </div>
                <h3 className="text-xl font-bold">NIO-Lab</h3>
              </div>
              <p className="text-gray-400">© 2023 Nanophotonics Integration in Optoelectronics Laboratory</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
