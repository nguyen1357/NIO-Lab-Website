import { useState } from 'react'
import { Mail } from 'lucide-react'
import { teamData, TeamMember, Alumnus, Collaborator } from '../data/teamData'
import CommonHeader from '../components/CommonHeader'
import CommonFooter from '../components/CommonFooter'

/**
 * Team Page Component
 * 
 * Dedicated page for displaying all team members with tabs for different categories
 * Modern design with improved user experience and navigation
 */
export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('pi')
  const [activeSubTab, setActiveSubTab] = useState('fullTimeResearchers')
  const [activeAlumniSubTab, setActiveAlumniSubTab] = useState('undergraduateStudents')

  // Using online image URLs instead of local files
  const piImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/2a21d6f9-9061-407c-89b3-d755f26c76a2.jpg'

  const renderMemberCard = (person: TeamMember, colorTheme: string, index: number) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 relative">
        <img 
          src={person.imageUrl || piImageUrl}
          alt={person.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl ${colorTheme} shadow-lg`}>
            {person.name.charAt(0)}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
        <p className={`${colorTheme} font-medium mb-2`}>{person.role}</p>
        <p className="text-gray-600 text-sm mb-3">{person.research}</p>
        
        {/* Bio for PI and Full-time Researchers */}
        {person.bio && (
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">{person.bio}</p>
        )}
        
        {/* Education for all members */}
        {person.education && (
          <div className="mb-3">
            <h4 className="font-semibold text-gray-900 text-sm mb-2">Education</h4>
            <div className="space-y-1">
              {person.education.phd && (
                <p className="text-gray-600 text-xs">{person.education.phd}</p>
              )}
              {person.education.msc && (
                <p className="text-gray-600 text-xs">{person.education.msc}</p>
              )}
              {person.education.bsc && (
                <p className="text-gray-600 text-xs">{person.education.bsc}</p>
              )}
            </div>
          </div>
        )}
        
        {person.expertise && (
          <p className="text-gray-600 text-sm mb-3">
            <span className="font-medium">Expertise:</span> {person.expertise}
          </p>
        )}

        {person.joinDate && (
          <p className="text-gray-500 text-xs mb-3">Joined: {person.joinDate}</p>
        )}
        <a href={`mailto:${person.email}`} className={`${colorTheme} hover:${colorTheme.replace('text', 'text')} text-sm flex items-center`}>
          <Mail className="w-4 h-4 mr-1" /> Email
        </a>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <CommonHeader activePage="team" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Meet the dedicated researchers and students driving innovation at NIO-Lab
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Team Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
              {['pi', 'people', 'alumni', 'collaborators'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab === 'pi' && 'PI'}
                  {tab === 'people' && 'Members'}
                  {tab === 'alumni' && 'Alumni'}
                  {tab === 'collaborators' && 'Collaborators'}
                </button>
              ))}
            </div>
          </div>
          
          {/* Team Content */}
          <div className="transition-all duration-300">
            {/* PI Tab */}
            {activeTab === 'pi' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 flex items-center justify-center p-6">
                      <img 
                        src={piImageUrl} 
                        alt="Dr. Quynh V. Le" 
                        className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{teamData.pi[0].name}</h3>
                      <p className="text-blue-600 font-medium text-lg mb-3">{teamData.pi[0].role}</p>
                      <p className="text-gray-700 mb-4">{teamData.pi[0].bio}</p>
                      
                      {/* Education */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                        <div className="space-y-2">
                          {teamData.pi[0].education?.phd && (
                            <p className="text-gray-600 text-sm">{teamData.pi[0].education.phd}</p>
                          )}
                          {teamData.pi[0].education?.msc && (
                            <p className="text-gray-600 text-sm">{teamData.pi[0].education.msc}</p>
                          )}
                          {teamData.pi[0].education?.bsc && (
                            <p className="text-gray-600 text-sm">{teamData.pi[0].education.bsc}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* People Tab */}
            {activeTab === 'people' && (
              <div>
                {/* Sub-tabs for Members categories */}
                <div className="flex justify-center mb-12">
                  <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
                    {['fullTimeResearchers', 'researchAssistants', 'undergraduateStudents'].map((subTab) => (
                      <button
                        key={subTab}
                        onClick={() => setActiveSubTab(subTab)}
                        className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                          activeSubTab === subTab
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {subTab === 'fullTimeResearchers' && 'Full-time Researchers'}
                        {subTab === 'researchAssistants' && 'Research Assistants'}
                        {subTab === 'undergraduateStudents' && 'Undergraduate Students'}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Members content based on active sub-tab */}
                <div className="transition-all duration-300">
                  {/* Full-time Researchers */}
                  {activeSubTab === 'fullTimeResearchers' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {teamData.fullTimeResearchers.map((person, index) => (
                        <div key={index}>
                          {renderMemberCard(person, 'text-purple-600', index)}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Research Assistants */}
                  {activeSubTab === 'researchAssistants' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {teamData.researchAssistants.map((person, index) => (
                        <div key={index}>
                          {renderMemberCard(person, 'text-green-600', index)}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Undergraduate Students */}
                  {activeSubTab === 'undergraduateStudents' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {teamData.undergraduateStudents.map((person, index) => (
                        <div key={index}>
                          {renderMemberCard(person, 'text-orange-600', index)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Alumni Tab */}
            {activeTab === 'alumni' && (
              <div>
                {/* Sub-tabs for Alumni categories */}
                <div className="flex justify-center mb-12">
                  <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
                    {['undergraduateStudents', 'researchAssistants'].map((subTab) => (
                      <button
                        key={subTab}
                        onClick={() => setActiveAlumniSubTab(subTab)}
                        className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                          activeAlumniSubTab === subTab
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {subTab === 'undergraduateStudents' && 'Undergraduate Students'}
                        {subTab === 'researchAssistants' && 'Research Assistants'}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Alumni content based on active sub-tab */}
                <div className="transition-all duration-300">
                  {/* Undergraduate Students Alumni */}
                  {activeAlumniSubTab === 'undergraduateStudents' && (
                    <div className="max-w-4xl mx-auto space-y-6">
                      {teamData.alumni.undergraduateStudents.map((alumnus, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{alumnus.name}</h3>
                              <p className="text-blue-600 font-medium mb-2">{alumnus.role}</p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span>Current: {alumnus.currentPosition}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Research Assistants Alumni */}
                  {activeAlumniSubTab === 'researchAssistants' && (
                    <div className="max-w-4xl mx-auto space-y-6">
                      {teamData.alumni.researchAssistants.map((alumnus, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{alumnus.name}</h3>
                              <p className="text-blue-600 font-medium mb-2">{alumnus.role}</p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span>Duration: {alumnus.duration}</span>
                                <span>Current: {alumnus.currentPosition}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Collaborators Tab */}
            {activeTab === 'collaborators' && (
              <div className="max-w-4xl mx-auto space-y-6">
                {teamData.collaborators.map((collaborator, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{collaborator.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{collaborator.role}</p>
                        <p className="text-gray-600 mb-2">{collaborator.research}</p>
                        <p className="text-gray-500 text-sm">{collaborator.institution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <CommonFooter />
    </div>
  )
}