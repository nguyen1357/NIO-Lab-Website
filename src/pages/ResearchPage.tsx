import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

/**
 * Research Page Component
 * 
 * Dedicated page for displaying the three research pillars of NIO-Lab
 * Moved from the home page to create a separate research section
 */
export default function ResearchPage() {
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
            <a href="#/research" className="text-blue-600 font-medium">Research</a>
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Research</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Exploring the frontiers of nanophotonics and optoelectronics through three interconnected research pillars
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Three Research Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research is built on three interconnected pillars: Nanophotonics, Optoelectronics, and Integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                <div className="h-48 relative">
                  <img 
                    src={
                      area.title === "Nanophotonics" 
                        ? "https://i.postimg.cc/mDGsssTt/Nanophotonics1jpg.jpg" 
                        : area.title === "Optoelectronics" 
                          ? "https://i.postimg.cc/ZqT4XmHj/Optoelectronics-JPG.jpg" 
                          : "https://i.postimg.cc/zXgzg03w/integtation-JPG.jpg"
                    } 
                    alt={`${area.title} Research`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">{area.icon}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {area.title === "Nanophotonics" && <><span className="text-3xl">N</span>anophotonics</>}
                    {area.title === "Optoelectronics" && <><span className="text-3xl">O</span>ptoelectronics</>}
                    {area.title === "Integration" && <><span className="text-3xl">I</span>ntegration</>}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  <div className="mt-6">
                    <span className="text-blue-600 font-medium">Learn more →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To fortify our research pursuits, our laboratory is currently equipped with:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/k52k4rKF/opticslab1jpg.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">🔬</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optics Lab</h3>
                <p className="text-gray-600 text-sm mb-4"> This optics laboratory is dedicated to studying light–matter interactions under both optical and electrical excitations. For optical excitation, the lab is equipped with two continuous-wave lasers operating at wavelengths of 405 nm and 532 nm, as well as a pulsed laser at 355 nm with a pulse duration of 1.5 nanoseconds. On the electrical side, the lab features standard voltage and current power supplies, along with a high-end Keithley 2632 source meter for precise electrical stimulation. Detection capabilities include a monochromator coupled with a high-resolution 2D scientific CMOS (sCMOS) camera, enabling detailed spectral and spatial analysis. With these core facilities, the lab is well-positioned to perform a wide range of experiments involving photoluminescence, electroluminescence, and other advanced optical characterizations, including:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Angle resolved reflectivity and photoluminescence</li>
                  <li>• Angle resolved electroluminescence</li>
                  <li>• I-V, Luminous Flux, Spectral Characteristics, External Quantum Efficiency</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/RF6MySmj/Opto2jpg.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">💡</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optoelectronics Fabrication</h3>
                <p className="text-gray-600 text-sm mb-4"> ur optoelectronics fabrication laboratory is a fully integrated research facility designed to carry out every step of device development in-house, including the fabrication of light-emitting diodes (LEDs), solar cells, and—soon—field-emission transistors. Equipped with a dedicated fume hood for nanocrystal synthesis, cleaning systems, and a glovebox environment for air-sensitive thin-film processing, the lab enables precise control over each stage of production. All thin-film procedures are conducted within the glovebox to ensure optimal material integrity. We are proud to be the first research unit in Vietnam with the capability to fabricate and characterize both organic light-emitting diodes (OLEDs) and perovskite light-emitting diodes (PeLEDs), offering comprehensive device analysis from initial material growth to final performance evaluation.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UV bath, O2 plasma cleaner, Hot-injection Fumehood</li>
                  <li>• Spincoater, hotplate, and physical vapor systems housed in a glovebox</li>
                  <li>• Currently RF sputtering and one organic thermal evaporator</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/6pQMtDvW/Chemicalroom3jpg.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">🧪</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Materials Synthesis Lab</h3>
                <p className="text-gray-600 text-sm mb-4">We are proud to have full control over the synthesis of perovskite nanocrystals, capable of performing all growth steps using both room-temperature techniques and the hot-injection method. Our laboratory is equipped with continuously operating ovens, gas lines, ultrasonic baths, deionized water systems, and high-performance centrifuges, ensuring consistent production of high-quality nanocrystals. These materials serve as a foundational component for subsequent integration with nanophotonic structures or transfer into device fabrication workflows, supporting the development of advanced optoelectronic applications.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chemical Synthesis and nanocrystal growth</li>
                  <li>• Basic procesing tools (Ultrasonic, Vacum chamber, Oven, Centrifuge</li>
                  <li>• Basic material characterization (UV-Vis, Optical Microscopy)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/L8gFmyw1/Computingresourcesjg.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">💻</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Computational Resources</h3>
                <p className="text-gray-600 text-sm mb-4">High-performance computing resources for theoretical modeling, simulation, and data analysis of nanophotonic structures.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FDTD/FEM Simulations</li>
                  <li>• Inverse Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Facilities at our Collaborators Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Facilities at our Collaborators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through our collaborative network, we have access to advanced research facilities at partner institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/6q6887GF/opticsiop.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">🔬</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optics Lab</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Institute of Physics, Vietnam Academy of Science and Technology</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UV-VIS Spectroscopy</li>
                  <li>• Fluorescence Lifetime Imaging (FLIM)</li>
                  <li>• Quantum Yield Measurements</li>
                  <li>• Lifetime Measurements</li>
                  <li>• Temperature Dependence Lifetime Studies</li>
                  <li>• Scanning Electron Microscopy (SEM)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/1trgR04p/tem.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">🔬</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">High-Resolution TEM</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Institute of Materials Science, Vietnam Academy of Science and Technology</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High Resolution Transmission Electron Microscopy (HRTEM)</li>
                  <li>• Advanced Materials Characterization</li>
                  <li>• Nanoscale Structural Analysis</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/Gh2BryRy/ebe-usth.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">⚡</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thin Film & Surface Analysis</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">University of Science and Technology of Hanoi (USTH)</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Electron Beam Evaporators</li>
                  <li>• Atomic Force Microscopy (AFM)</li>
                  <li>• X-Ray Diffraction (XRD)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/VNMrpP8Z/cleanroom-HUS.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">🏭</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cleanroom Facilities</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Hanoi University of Science</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Class 100/1000 Cleanroom</li>
                  <li>• Ellipsometer</li>
                  <li>• Advanced Fabrication Tools</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="h-48 relative">
                <img 
                  src="https://i.postimg.cc/GmTHTnH3/solarsimulatorhust.jpg" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-3xl">📏</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thin-Film Deposition and Solar Cell Characterizations</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Hanoi University of Science and Technology</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Profilometer</li>
                  <li>• Various Thin-Film Deposition Systems</li>
                  <li>• Solar cell characterizations</li>
                </ul>
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