import { ChevronRight, Mail } from 'lucide-react'
import CommonHeader from '../components/CommonHeader'
import CommonFooter from '../components/CommonFooter'
import TeamSection from '../components/TeamSection'
import ScrollToTop from '../components/ScrollToTop'

/**
 * NIO-Lab Homepage Component
 * 
 * Main landing page for Nanophotonics Integration in Optoelectronics Laboratory
 * Modern, responsive design with enhanced user experience
 */
export default function HomePage() {
  // Research areas data
  const researchAreas = [
    {
      title: "Nanophotonics",
      description: "Theory and Simulation of Photonics, and Experimental nano-optics. Exploring fundamental light-matter interactions at the nanoscale.",
      icon: "🔬"
    },
    {
      title: "Optoelectronics",
      description: "Synthesis of materials and optoelectronic devices. Developing novel materials and device architectures for light generation, detection, and modulation.",
      icon: "💡"
    },
    {
      title: "Integration",
      description: "Applying understanding of light-matter interactions from Nanophotonics to improve optoelectronic devices. Integrating nanophotonic structures for enhanced control and physics-based effects.",
      icon: "🔗"
    }
  ]

  // Quick stats for visual appeal
  const quickStats = [
    { number: "15+", label: "Publications" },
    { number: "10+", label: "Team Members" },
    { number: "5+", label: "Research Areas" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <CommonHeader activePage="home" />

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Base Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/25 via-purple-800/20 to-indigo-800/30"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'float 30s ease-in-out infinite'
          }}></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          {/* Dynamic Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-300/15 to-orange-400/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-500/10 rounded-full blur-3xl animate-pulse-glow delay-2000"></div>
          <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-to-r from-green-300/10 to-teal-400/10 rounded-full blur-3xl animate-pulse-glow delay-4000"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-10 right-20 w-32 h-32 border-2 border-yellow-300/20 rounded-lg transform rotate-45 animate-float" 
               style={{animationDelay: '2s', animationDuration: '25s'}}></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-blue-300/20 rounded-full animate-float" 
               style={{animationDelay: '7s', animationDuration: '20s'}}></div>
          <div className="absolute top-40 right-40 w-16 h-16 bg-white/5 rounded-lg transform rotate-12 animate-float" 
               style={{animationDelay: '12s', animationDuration: '18s'}}></div>
          
          {/* Light Beams */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-yellow-300/10 to-transparent transform -translate-x-1/2"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/10 to-transparent transform -translate-x-1/2 animate-pulse" 
               style={{animationDelay: '1s'}}></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-300/10 to-transparent transform -translate-x-1/2 animate-pulse" 
               style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-up">
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Research Laboratory
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
              <span className="text-7xl md:text-9xl font-black text-yellow-300 drop-shadow-lg animate-glow inline-block transform hover:scale-110 transition-all duration-300">N</span>
              <span className="text-5xl md:text-7xl">anophotonics</span>
              <br />
              <span className="text-7xl md:text-9xl font-black text-yellow-300 drop-shadow-lg animate-glow animate-delay-1 inline-block transform hover:scale-110 transition-all duration-300">I</span>
              <span className="text-5xl md:text-7xl">ntegration in</span>
              <br />
              <span className="text-7xl md:text-9xl font-black text-yellow-300 drop-shadow-lg animate-glow animate-delay-2 inline-block transform hover:scale-110 transition-all duration-300">O</span>
              <span className="text-5xl md:text-7xl">ptoelectronics</span>
              <br />
              <span className="text-5xl md:text-7xl">Laboratory</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Exploring light-matter interactions at the nanoscale through interdisciplinary research
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animate-delay-1">
            <a href="#/research" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-3 shadow-lg">
              <span>Explore Research</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#/positions" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-3 backdrop-blur-sm">
              <span>Join Our Team</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              NIO research activities, based at VinUniversity, Hanoi, Vietnam, aim to seek a better understanding of the weak and strong light-matter interactions between plasmonic and photonic structures and quantum emitters at the nanoscale. We also want to turn this understanding into useful technologies, especially in optoelectronics, where light and electronics meet. Beyond scientific discovery, we are committed to fostering an inclusive and dynamic environment where young students and researchers can engage with cutting-edge interdisciplinary research. Through collaboration and global outreach, we aim to empower the next generation of scientists and bridge their journey to the international research community.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Quick Access
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our research areas, meet our team, and learn about opportunities to collaborate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="#/research" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Research</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Explore our three research pillars and state-of-the-art facilities</p>
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  <span>Explore Research</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
            
            <a href="#/team" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Our Team</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Meet our dedicated researchers and talented students</p>
                <div className="flex items-center justify-center text-green-600 font-medium">
                  <span>Meet the Team</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
            
            <a href="#/pubs" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Publications</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Browse our latest research papers and scientific contributions</p>
                <div className="flex items-center justify-center text-purple-600 font-medium">
                  <span>View Publications</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
            
            <a href="#/news" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">📰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">News</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">Stay updated with our latest activities and achievements</p>
                <div className="flex items-center justify-center text-orange-600 font-medium">
                  <span>Latest News</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Research Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Three Research Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our research focuses on three interconnected areas: Nanophotonics, Optoelectronics, and Integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <img 
                    src={
                      area.title === "Nanophotonics" 
                        ? "https://i.postimg.cc/mDGsssTt/Nanophotonics1jpg.jpg" 
                        : area.title === "Optoelectronics" 
                          ? "https://i.postimg.cc/ZqT4XmHj/Optoelectronics-JPG.jpg" 
                          : "https://i.postimg.cc/zXgzg03w/integtation-JPG.jpg"
                    } 
                    alt={`${area.title} Research`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    {area.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white">
                      <span className="bg-blue-500 px-3 py-1 rounded-full text-xs font-medium">
                        {area.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {area.title === "Nanophotonics" && <><span className="text-blue-600">N</span>anophotonics</>}
                    {area.title === "Optoelectronics" && <><span className="text-purple-600">O</span>ptoelectronics</>}
                    {area.title === "Integration" && <><span className="text-green-600">I</span>ntegration</>}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                  <div className="flex items-center justify-between">
                    <a href="#/research" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2 transition-colors">
                      Explore Research
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-blue-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
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
      <CommonFooter />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
