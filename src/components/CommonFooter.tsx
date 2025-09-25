
/**
 * Common Footer Component
 * 
 * Modern, comprehensive footer with enhanced design and functionality
 * Shared footer used across all pages for consistency
 */
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Globe } from 'lucide-react';

export default function CommonFooter() {
  const footerLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Use" },
    { href: "#", label: "Accessibility" },
    { href: "#", label: "Contact Us" }
  ];

  const quickNav = [
    { href: "#/", label: "Home", icon: "🏠" },
    { href: "#/research", label: "Research", icon: "🔬" },
    { href: "#/team", label: "Team", icon: "👥" },
    { href: "#/pubs", label: "Publications", icon: "📚" },
    { href: "#/news", label: "News", icon: "📰" },
    { href: "#/positions", label: "Positions", icon: "💼" }
  ];

  const socialLinks = [
    { href: "#", icon: Github, label: "GitHub" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "https://vinuni.edu.vn", icon: Globe, label: "VinUniversity" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Lab Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span className="text-white font-bold text-lg">NIO</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">NIO-Lab</h3>
                  <p className="text-blue-400 text-sm">Nanophotonics Integration in Optoelectronics</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                We fabricate optoelectronic devices, simulate and measure photonic structures, and embrace theoretical research as a crucial pillar in deepening our understanding of light-matter interactions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">info.niolab@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">VinUniversity, Vinhome Ocean Park, Gia Lam, Hanoi</span>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-3"></span>
                Quick Navigation
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors py-2 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect & Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <span className="w-1 h-6 bg-purple-500 mr-3"></span>
                Connect & Resources
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-300 mb-3">Funding Partners</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs">VinUniversity</span>
                    <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-xs">VinIF</span>
                    <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs">Nafosted</span>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h5>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Nanophotonics Integration in Optoelectronics Laboratory. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
