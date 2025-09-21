
/**
 * Common Header Component
 * 
 * Shared navigation header used across all pages
 * Eliminates code duplication and ensures consistency
 */
import { useState } from 'react';

interface CommonHeaderProps {
  activePage?: string;
}

export default function CommonHeader({ activePage = "home" }: CommonHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#/", label: "Home", key: "home" },
    { href: "#/news", label: "News", key: "news" },
    { href: "#/research", label: "Research", key: "research" },
    { href: "#/team", label: "Team", key: "team" },
    { href: "#/pubs", label: "Pubs", key: "pubs" },
    { href: "#/positions", label: "Open Positions", key: "positions" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-lg">NIO</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">NIO-Lab</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`transition-colors duration-200 hover:text-blue-600 ${
                activePage === item.key
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                    activePage === item.key
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
