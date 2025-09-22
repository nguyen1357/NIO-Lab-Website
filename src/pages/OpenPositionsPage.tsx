import { Mail, Phone, MapPin, Users, BookOpen, ChevronRight } from 'lucide-react'

/**
 * Open Positions Page Component
 * 
 * Dedicated page for displaying open positions and contact information
 * Moved from the home page to create a separate positions section
 */
export default function OpenPositionsPage() {
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
            <a href="#/pubs" className="text-gray-600 hover:text-blue-600 transition-colors">Pubs</a>
            <a href="#/positions" className="text-blue-600 font-medium">Open Positions</a>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join our team and contribute to cutting-edge research in nanophotonics and optoelectronics
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mt-4">
            For position inquiry: <strong>info.niolab@gmail.com</strong>
          </p>
          <p className="text-md opacity-75 max-w-3xl mx-auto mt-2">
            Last updated: September 14, 2025
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Postdoctoral Researcher (Nanophotonics)</h3>
                  <p className="text-blue-600 font-medium">Nanophotonics Research</p>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Open
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                We are seeking a motivated postdoctoral researcher to work on advanced nanophotonics research, either experimental or theoretical profiles. A two-year contract followed by a full-time offer if performance during the first contract is satisfactory. Further information can be obtained at <strong>info.niolab@gmail.com</strong>.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Posted:</strong> September 14, 2025
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">PhD training in optics and photonics</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Research Assistant</h3>
                  <p className="text-blue-600 font-medium">Always Open</p>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Open
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                We are constantly looking for research assistants. Applicants who hold domestic (Vietnamese) or international degrees are all eligible for applications. Please do not hesitate to send me an inquiry about the positions if you want to learn and conduct research in such interdisciplinary works ranging from Physics, Chemistry, Engineering Physics, Chemical Engineering, Electrical Engineering, and Mechanical Engineering. Students who are about to graduate or hold B.Sc or M.Sc in these fields are also encouraged to apply. Further information can be obtained at <strong>info.niolab@gmail.com</strong>.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Posted:</strong> September 14, 2025
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">Physics</span>
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">Chemistry</span>
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">Engineering Physics</span>
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">Chemical Engineering</span>
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">Electrical Engineering</span>
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">Mechanical Engineering</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Funding & Support Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Funding & Support</h2>
              <p className="text-xl opacity-90">
                We gratefully acknowledge the support from the following organizations and funding agencies that make our research possible.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <div className="text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://i.postimg.cc/k4bDHsXq/logo-Vin-Uni-jpg.jpg" 
                      alt="VinUniversity"
                      className="h-20 w-auto object-contain mb-3"
                    />
                    <p className="text-sm font-medium text-gray-700">VinUniversity</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://i.postimg.cc/8C3jw9GZ/logo-Vin-IF-jpg.jpg" 
                      alt="VinIF"
                      className="h-20 w-auto object-contain mb-3"
                    />
                    <p className="text-sm font-medium text-gray-700">VinIF</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://i.postimg.cc/m20pf2w4/illus-pack-ambition-international.jpg" 
                      alt="La Région Auvergne-Rhône-Alpes"
                      className="h-20 w-auto object-contain mb-3"
                    />
                    <p className="text-sm font-medium text-gray-700">La Région Auvergne-Rhône-Alpes</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://i.postimg.cc/KYb9jqws/logonafosted.jpg" 
                      alt="Nafosted"
                      className="h-20 w-auto object-contain mb-3"
                    />
                    <p className="text-sm font-medium text-gray-700">Nafosted</p>
                  </div>
                </div>
              </div>
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