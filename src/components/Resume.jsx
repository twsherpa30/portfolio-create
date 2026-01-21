function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-bg"></div>

      <div className="resume-box">
        <h2>FULL RESUME</h2>
        <p>Grab my resume to see my experience, education, and the details of my work history.</p>
        
        <a href="/resume.pdf" download className="brutal-box download-btn">
          <span>DOWNLOAD RESUME</span>
          <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Resume