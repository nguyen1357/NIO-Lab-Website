/**
 * Team Section Component
 * 
 * Displays team members with tabs for different categories
 * Separated from main component for better performance
 */

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { teamData, TeamMember, Alumnus, Collaborator } from '../data/teamData';
// Using online image URLs instead of local files
const piImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/2a21d6f9-9061-407c-89b3-d755f26c76a2.jpg'
const teamMember1ImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/1ed6976b-2ce7-42d4-8a21-357ddbd2bf2c.jpg'
const teamMember2ImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/f725eb7d-5160-4e17-9ed2-751f12e38d65.jpg'
const teamMember3ImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/ca61c0fa-20df-45d9-891f-70e1d9d1fa3a.jpg'
const teamMember4ImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/5b243191-acd2-4f25-8752-53a0db09bb88.jpg'
const teamMember5ImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/784247ed-636f-465c-9b70-835e5d26687f.jpg'
const teamMember6ImageUrl = 'https://pub-cdn.sider.ai/u/U0R7HR73Z88/web-coder/68c0cee370ddcc6cca3ab017/resource/6eeaef52-723c-4b18-afa9-cccec293ba33.jpg'

interface TeamSectionProps {
  id?: string;
}

export default function TeamSection({ id = "team" }: TeamSectionProps) {
  const [activeTab, setActiveTab] = useState('pi');
  const [activeSubTab, setActiveSubTab] = useState('fullTimeResearchers');
  const [activeAlumniSubTab, setActiveAlumniSubTab] = useState('undergraduateStudents');

  const renderMemberCard = (person: TeamMember, colorTheme: string, index: number) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 relative">
        <img 
          src={person.imageUrl || (person.name === "Dr. Nguyen Hung Son" || person.name === "Nguyen Viet Anh" ? undefined : (index % 2 === 0 ? teamMember1ImageUrl : teamMember2ImageUrl))}
          alt={person.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl ${person.name === "Dr. Nguyen Hung Son" || person.name === "Nguyen Viet Anh" ? "text-cyan-600" : colorTheme} shadow-lg`}>
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
  );

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
        </div>
        
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamData.alumni.undergraduateStudents.map((alumnus, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 relative">
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            {alumnus.imageUrl ? (
                              <img 
                                src={alumnus.imageUrl} 
                                alt={alumnus.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-blue-600 text-4xl font-bold">
                                {alumnus.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            )}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl text-blue-600 shadow-lg">
                              {alumnus.name.charAt(0)}
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{alumnus.name}</h3>
                          <p className="text-blue-600 font-medium mb-2">{alumnus.role}</p>
                          <p className="text-gray-600 text-sm mb-3">{alumnus.research || "Undergraduate Research"}</p>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded">Current: {alumnus.currentPosition}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Research Assistants Alumni */}
                {activeAlumniSubTab === 'researchAssistants' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamData.alumni.researchAssistants.map((alumnus, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 relative">
                          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                            {alumnus.imageUrl ? (
                              <img 
                                src={alumnus.imageUrl} 
                                alt={alumnus.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-green-600 text-4xl font-bold">
                                {alumnus.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            )}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl text-green-600 shadow-lg">
                              {alumnus.name.charAt(0)}
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{alumnus.name}</h3>
                          <p className="text-green-600 font-medium mb-2">{alumnus.role}</p>
                          <p className="text-gray-600 text-sm mb-3">{alumnus.research || "Research Assistant"}</p>
                          <div className="space-y-2 text-sm text-gray-500">
                            <div className="bg-gray-100 px-2 py-1 rounded inline-block">Duration: {alumnus.duration}</div>
                            <div className="bg-gray-100 px-2 py-1 rounded inline-block ml-2">Current: {alumnus.currentPosition}</div>
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
  );
}
