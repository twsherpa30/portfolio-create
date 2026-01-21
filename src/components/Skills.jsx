function Skills() {
  const skills = [
    { name: "JAVA", bg: "#ffeb3b", color: "black", rotate: -3 },
    { name: "PYTHON", bg: "white", color: "black", rotate: 2 },
    { name: "REACT.JS", bg: "#ff5e5e", color: "white", rotate: -1 },
    { name: "OOP", bg: "black", color: "white", rotate: 3 },
    { name: "TAILWIND", bg: "white", color: "black", rotate: -2 },
    { name: "GIT & GITHUB", bg: "#ffeb3b", color: "black", rotate: 1 },
    { name: "SPRINGBOOT", bg: "white", color: "black", rotate: 6 },
    { name: "SQL", bg: "black", color: "white", rotate: -6 },
    { name: "AWS", bg: "#ff5e5e", color: "white", rotate: 4 },
    { name: "JS", bg: "white", color: "black", rotate: -4 },
    { name: "FASTAPI", bg: "#ffeb3b", color: "black", rotate: 2 },
    { name: "DOCKER", bg: "black", color: "white", rotate: -2 },
    { name: "AI/ML FRAMEWORKS", bg: "#ff5e5e", color: "white", rotate: 5 },

  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">SKILL SET</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="doodle-border skill-tag" 
              style={{ 
                background: skill.bg, 
                color: skill.color,
                transform: `rotate(${skill.rotate}deg)` 
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '3rem', 
          fontFamily: "'Gochi Hand', cursive", 
          fontSize: '1.5rem', 
          color: '#ff5e5e', 
          transform: 'rotate(-2deg)' 
        }}>
          <span style={{ display: 'inline-block', borderBottom: '2px solid #ff5e5e' }}>
            Always learning new stuff!
          </span> 
          <svg 
            style={{ display: 'inline-block', width: '2rem', height: '2rem', marginLeft: '0.5rem' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Skills