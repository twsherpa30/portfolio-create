import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

function Projects() {
  const images = { 1: project1, 2: project2, 3: project3 }
  const projects = [
    {
      id: 1,
      title: "AI onboarding RAG application",
      description: "RAG Application using LangChain and ChromaDB to automate document-based onboarding, enabling semantic search and context-aware responses from localized knowledge bases",
      tags: ["PYTHON", "STREAMLIT", "LANGCHAIN", "CHROMADB"],
      tagBg: "#ffeb3b",
      github: "https://github.com/twsherpa30/sherpa-ai-onboarding"
    },
    {
      id: 2,
      title: "Research Assistant - Chrome Extension",
      description: "SpringBoot RESTful API with Gemini API for summarizing and storing notes, integrated with a Chrome Extension for seamless user interaction.",
      tags: ["JAVA", "SPRING BOOT", "GEMINI API", "CHROME EXTENSION"],
      tagBg: "#ffeb3b",
      github: "https://github.com/twsherpa30/research-assistant-springboot",
      rotate: true
    },
    {
      id: 3,
      title: "CREATE MANGA AI",
      description: "React web app that leverages OpenAI API to generate manga stories, allowing users to create and experience manga story play.",
      tags: ["REACT", "PYTHON", "FASTAPI", "OPENAI API"],
      tagBg: "#ffeb3b",
      github: "https://github.com/twsherpa30/create-manga-ai"
    },
  ]

  return (
    <section id="projects">
      <div className="section-container">
        <div style={{ marginBottom: '4rem', position: 'relative', display: 'inline-block' }}>
          <h2 className="section-title">PROJECTS</h2>
          <svg 
            style={{ position: 'absolute', bottom: '-1rem', left: 0, width: '100%', height: '1.5rem', color: '#ff5e5e' }}
            preserveAspectRatio="none" 
            viewBox="0 0 200 20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4"
          >
            <path d="M0 10 Q 20 20 40 10 T 80 10 T 120 10 T 160 10 T 200 10" />
          </svg>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="brutal-box project-card"
              style={project.rotate ? { transform: 'rotate(1deg)' } : {}}
            >
              <div 
                className="project-img"
              >
                <img src={images[project.id]} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag" style={{ background: project.tagBg }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <span>VIEW CODE</span>
                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects