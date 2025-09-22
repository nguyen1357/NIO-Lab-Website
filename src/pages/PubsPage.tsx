import { publicationsData } from '../data/publicationsData'

/**
 * Publications Page Component
 * 
 * Dedicated page for displaying all publications
 * Moved from the home page to create a separate publications section
 */
export default function PubsPage() {
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
            <a href="#/news" className="text-gray-600 hover:text-blue-600 transition-colors">News</a>
            <a href="#/research" className="text-gray-600 hover:text-blue-600 transition-colors">Research</a>
            <a href="#/team" className="text-gray-600 hover:text-blue-600 transition-colors">Team</a>
            <a href="#/pubs" className="text-blue-600 font-medium">Pubs</a>
            <a href="#/positions" className="text-gray-600 hover:text-blue-600 transition-colors">Open Positions</a>
          </nav>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our latest research contributions in nanophotonics and optoelectronics
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* VinUniversity Publications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-blue-600 mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900">At VinUniversity</h3>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {publicationsData.vinUniversity.map((pub, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <div className="text-gray-900">
                    <p className="text-lg mb-2">
                      <span className="font-bold">{index + 1}. </span>
                      {pub.authors}, <span className="italic">"{pub.title}"</span>, {pub.journal}, {pub.volume}, {pub.page} ({pub.year}).
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Prior to VinUniversity Publications */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-green-600 mr-4"></div>
              <h3 className="text-2xl font-bold text-gray-900">Prior to VinUniversity</h3>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {publicationsData.priorToVinUniversity.map((pub, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                  <div className="text-gray-900">
                    <p className="text-lg mb-2">
                      <span className="font-bold">{index + 1}. </span>
                      {pub.authors}, <span className="italic">"{pub.title}"</span>, {pub.journal}, {pub.volume}, {pub.page} ({pub.year}).
                    </p>
                  </div>
                </div>
              ))}
            </div>
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