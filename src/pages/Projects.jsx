import { useState } from 'react'

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({})
  const [selectedImage, setSelectedImage] = useState(null)

  const toggleExpanded = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const openImageModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }
  const projects = [
    {
      id: "omra",
      title: "OMRA – Omra Booking Web Application",
      description: "MYOMRA is a full-stack web application developed to simplify the booking of Omra travel packages. It allows users to browse, compare, and book Omra trips that include flights, hotels, and additional services — all within a single platform. The application also features admin management, real-time availability, and future mobile integration.",
      technologies: ["Angular", "Django REST Framework", "MySQL", "Docker", "Nginx", "JWT Auth"],
      media: {
        video: "/videos/omra-demo.mp4",
        screenshots: [
          "/images/projects/omra/home-page.jpg",
          "/images/projects/omra/hotel-list.jpg", 
          "/images/projects/omra/packages-list.jpg"
        ]
      },
      features: [
        "Dynamic and responsive Angular interface with advanced search and filters",
        "Hotel page integrated with external APIs (Agoda, Expedia, Booking.com)",
        "Booking form with seat availability and price calculation",
        "Sacred Destinations section (Mecca, Medina) with visuals",
        "Admin dashboard for package and hotel management",
        "Secure payment integration and JWT authentication",
        "Deployed with Docker and Nginx for scalability"
      ]
    },
    {
      id: "mywalletapp",
      title: "MyWallet – Personal Budget Management App",
      description: "MyWallet is a web application designed to help users manage their personal finances efficiently. It offers advanced features for tracking transactions, managing multiple wallets, defining budgets, and following financial goals — all within an intuitive and secure interface.",
      technologies: ["Spring Boot (Java 21)", "Thymeleaf", "Bootstrap", "MySQL", "Chart.js", "FullCalendar.js", "Maven"],
      media: {
        video: "/videos/mywalletapp-demo.mp4",
        screenshots: []
      },
      features: [
        "Multi-wallet management (bank accounts, savings, cash)",
        "Transaction tracking with income, expenses, filters, and categories",
        "Interactive dashboard with charts and summaries using Chart.js",
        "Financial calendar with alerts and deadlines using FullCalendar.js",
        "Budget creation and monitoring",
        "Debt and loan tracking",
        "Goal management (saving, purchases)",
        "Custom shopping lists",
        "Planned future integration with bank accounts"
      ]
    },
    {
      id: "oncf-fleet",
      title: "Railway Maintenance Fleet Management System",
      description: "A comprehensive web application to digitize and optimize the management of railway maintenance equipment for ONCF (Moroccan National Railways). The platform replaced manual Excel-based workflows with a secure, centralized system to manage machine data, daily reports, and maintenance interventions.",
      technologies: ["Spring Boot (Java)", "Thymeleaf", "HTML", "CSS", "JavaScript", "MySQL", "GitHub", "IntelliJ IDEA"],
      media: {
        video: null,
        screenshots: [
          "/images/projects/oncf/Interfaces des Dirigeants/Page d'accueil des Dirigeants .png",
          "/images/projects/oncf/Interfaces des Dirigeants/Interface de gestion des Engins.png",
          "/images/projects/oncf/Interfaces des Dirigeants/Interface des détails des engins .png",
          "/images/projects/oncf/Interfaces des Dirigeants/Interface des Interventions pour les dirigeants .png",
          "/images/projects/oncf/Interfaces des Dirigeants/Interface des Rapports Journaliers des Dirigeants .png",
          "/images/projects/oncf/Interfaces des chefs de Cellule/Page d'Accueil des Chefs de Cellule .png",
          "/images/projects/oncf/Interfaces des chefs de Cellule/Interface des Pannes pour les Chefs d'Atelier .png",
          "/images/projects/oncf/Interfaces des chefs de Cellule/Interface des Statistiques des Chefs de Cellule.png",
          "/images/projects/oncf/Interfaces des chefs de Cellule/Interface des Tâches des Chefs de Cellule.png",
          "/images/projects/oncf/Interfaces des Chefs de Département/Page d'Accueil des Chefs de Département.png",
          "/images/projects/oncf/Interfaces des Intervenants/Interface d'Accueil des Intervenants.png",
          "/images/projects/oncf/Interfaces des Intervenants/Interfaces des Productions des Intervenants .png",
          "/images/projects/oncf/Pages Communes à Plusieurs Utilisateurs/Page de Connexion .png",
          "/images/projects/oncf/Pages Communes à Plusieurs Utilisateurs/Interface des Interventions .png",
          "/images/projects/oncf/Pages Communes à Plusieurs Utilisateurs/Interface des Rapports Journaliers .png"
        ]
      },
      features: [
        "Role-Based Access Control (RBAC) for 7 distinct roles",
        "Centralized fleet management with status tracking (In Service, Under Maintenance, Out of Service)",
        "Digital daily production and maintenance reports",
        "Breakdown and intervention tracking",
        "Analytical dashboards and exportable reports",
        "Replaced manual Excel-based workflows with secure digital system",
        "Real-time visibility and control over all maintenance activities"
      ]
    },
    {
      id: "sonasid-safety",
      title: "Safety Management System Dashboard (SAS)",
      description: "An interactive reporting dashboard that transforms large volumes of raw safety data into visual insights for SONASID (steel manufacturing company). This tool improved safety performance tracking and promoted a proactive safety culture by providing real-time KPI summaries and dynamic filtering capabilities.",
      technologies: ["Python (Django Framework)", "HTML", "CSS", "JavaScript", "Chart.js", "SQLite", "Git", "Django Admin"],
      media: {
        video: null,
        screenshots: [
          "/images/projects/sonasid/Tableau de Bord des Audits.png",
          "/images/projects/sonasid/Tableau de Bord des Incidents.png",
          "/images/projects/sonasid/Tableau de Bord des Plan d'Action.png",
          "/images/projects/sonasid/Tableau de Bord des Remontées.png",
          "/images/projects/sonasid/Tableau de Bord des Vigilance Partagée.png",
          "/images/projects/sonasid/bases des audits.png",
          "/images/projects/sonasid/cartes de types des audits.png",
          "/images/projects/sonasid/détails des audits.png",
          "/images/projects/sonasid/Filtrage Global et Personnalisé dans les Statistiques des Remontées.png",
          "/images/projects/sonasid/Filtrage par Site.png",
          "/images/projects/sonasid/Interaction Dynamique.png"
        ]
      },
      features: [
        "Interactive charts using Chart.js (bar, pie, donut, and line charts)",
        "Real-time KPI summaries (total reports, audit completion rate, action plan effectiveness)",
        "Dynamic filtering by site, status, and criticality",
        "Drill-down capability to access detailed data tables",
        "Role-based views tailored for managers and safety officers",
        "Covers 5 key safety modules: Reports, Audits, Shared Vigilance, Action Plans, Incidents",
        "Transformed complex safety data into actionable intelligence"
      ]
    },
    {
      id: "voice-command",
      title: "Voice Command Order System (Web & Mobile)",
      description: "An intelligent multilingual system capable of recognizing and processing voice commands in Darija, French, and English. The solution allows sales agents to manage product orders using natural voice instructions, both via a web interface and a mobile application.",
      technologies: ["Node.js (Express)", "React (Web)", "React Native (Mobile)", "SQL Server", "Whisper (OpenAI)", "Python (for transcription and NLP)"],
      media: {
        video: "/videos/voicecommand-demo.mp4",
        screenshots: [
          "/images/projects/voicecommand/capture mobile .png",
          "/images/projects/voicecommand/darija screen.png",
          "/images/projects/voicecommand/engscreen.png",
          "/images/projects/voicecommand/frc page .png",
          "/images/projects/voicecommand/lenvio de api.png",
          "/images/projects/voicecommand/mobile start recording .png",
          "/images/projects/voicecommand/product unown .png",
          "/images/projects/voicecommand/response .png",
          "/images/projects/voicecommand/response backend darija.png",
          "/images/projects/voicecommand/response backend.png"
        ]
      },
      features: [
        "Real-time speech recognition using Whisper",
        "Automatic language detection (Darija / French / English)",
        "Command parsing and intent detection (add, remove, order items, etc.)",
        "SQL Server database for order and client management",
        "Synchronization between web and mobile interfaces",
        "Offline voice recording with delayed sync when connected",
        "Natural voice instructions for sales agents"
      ]
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600">A showcase of my development work and technical expertise</p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={project.id} className="bg-white rounded-xl border border-pink-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              {/* Technologies */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm border border-pink-200 hover:bg-pink-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {project.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Media Section */}
            <div className="space-y-4">
              {/* Video */}
              {project.media.video && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Demo Video:</h3>
                  <div className="relative w-full max-w-md mx-auto bg-gray-100 rounded-lg overflow-hidden">
                    <video 
                      controls 
                      className="w-full h-auto"
                      preload="metadata"
                    >
                      <source src={project.media.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              {/* Screenshots */}
              {project.media.screenshots.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Screenshots ({project.media.screenshots.length}):
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {(expandedProjects[project.id] 
                      ? project.media.screenshots 
                      : project.media.screenshots.slice(0, 4)
                    ).map((screenshot, screenIdx) => (
                      <div 
                        key={screenIdx} 
                        className="relative group cursor-pointer"
                        onClick={() => {
                          openImageModal(screenshot, `${project.title} screenshot ${screenIdx + 1}`);
                        }}
                      >
                        <img 
                          src={screenshot} 
                          alt={`${project.title} screenshot ${screenIdx + 1}`}
                          className="w-full h-32 object-cover rounded-lg border border-pink-200 hover:border-pink-300 transition-colors"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-32 bg-pink-50 rounded-lg border border-pink-200 flex items-center justify-center text-pink-600 text-sm hidden">
                          Image not found
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center pointer-events-none">
                          <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded-lg transition-all duration-300">
                            Click to enlarge
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {project.media.screenshots.length > 4 && (
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => toggleExpanded(project.id)}
                        className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors text-sm font-medium"
                      >
                        {expandedProjects[project.id] 
                          ? `Show Less` 
                          : `Show All ${project.media.screenshots.length} Screenshots...`
                        }
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}