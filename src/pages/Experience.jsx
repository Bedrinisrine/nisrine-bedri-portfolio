export default function Experience() {
  const experiences = [
    {
      company: "Prodware",
      position: "Graduation Internship – Software Engineer Intern",
      period: "04/2025 – present",
      location: "Casablanca, Maroc",
      description: [
        "Developed a multilingual voice-command system (Darija, French, English)",
        "Integrated a speech-to-text engine and a semantic analysis API",
        "Designed and implemented backend services and RESTful APIs",
        "Built the user interface and connected it with the backend system",
        "Collaborated on deployment and testing for both desktop and web environments"
      ],
      technologies: ["Node.js", "Express", "Next.js", "JavaScript", "Whisper", "Gemini API", "APE", "SQL Server", "React"],
      logo: "/images/prodware-logo.png"
    },
    {
      company: "ONCF",
      position: "Web Development Intern",
      period: "07/2024 – 08/2024",
      location: "Casablanca, Maroc",
      description: [
        "Designed and implemented a web-based tool for railway maintenance operations"
      ],
      technologies: ["Angular", "Spring Boot", "MySQL"],
      logo: "/images/oncf-logo.png"
    },
    {
      company: "Sonasid",
      position: "IT Intern – Analyst",
      period: "07/2023 – 08/2023",
      location: "Casablanca, Maroc",
      description: [
        "Conducted system analysis and documentation for an internal application",
        "Developed a dashboard for data visualization and reporting"
      ],
      technologies: ["Python", "Django", "SQL", "Chart.js"],
      logo: "/images/sonasid-logo.png"
    }
  ]


  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
        <p className="text-lg text-gray-600">My journey in software development and AI engineering</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl border border-pink-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center border border-pink-200">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-12 h-12 bg-pink-200 rounded flex items-center justify-center text-pink-700 font-bold text-lg hidden">
                    {exp.company.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{exp.position}</h2>
                    <h3 className="text-lg font-semibold text-pink-700">{exp.company}</h3>
                  </div>
                  <div className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right">
                    <p className="font-medium">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm border border-pink-200 hover:bg-pink-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}