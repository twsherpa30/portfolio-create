function Hero() {
  return (
    <header>
      {/* Decorative SVG Doodles */}
      <svg 
        className="svg-doodle animate-float" 
        style={{ top: '8rem', right: '10%', width: '6rem', height: '6rem', color: 'black', opacity: 0.8 }}
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3"
      >
        <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" strokeLinejoin="round"/>
      </svg>
      
      <svg 
        className="svg-doodle" 
        style={{ bottom: '5rem', left: '5%', width: '8rem', height: '8rem', color: '#ff5e5e', opacity: 0.8 }}
        viewBox="0 0 200 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="4"
      >
        <path d="M10 50 Q 50 10 90 50 T 170 50" />
        <path d="M160 40 L170 50 L160 60" />
      </svg>

      <div className="hero-content">
        <div className="hero-text">
          <div className="badge"></div>
          
          <h1>
            I BUILD <br />
            <span className="highlight">AI STUFF</span><br />
            THAT WORKS.
          </h1>
          
          <p className="bio">
            Hi, I'm <span style={{ color: '#ff5e5e' }}>Tsering Wangchuk Sherpa</span>. With a BSc in Computer Science and professional experience as a Junior Web Developer, I know how to write clean, production-ready code.
            Currently, I am specializing in Artificial Intelligence, moving beyond traditional CRUD apps to build vector-database powered tools and semantic search engines. 
          </p>

          <div className="cta-buttons">
            <a href="#projects" className="brutal-box btn" style={{ background: '#ffeb3b' }}>
              SEE MY WORK ↓
            </a>
            <a href="https://github.com/twsherpa30" target="_blank" rel="noopener noreferrer" className="brutal-box btn">
              <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GITHUB
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="profile-container">
          <div className="tape"></div>
          <div className="profile-image">
            <img src="/public/img.jpeg" alt="Profile Photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero