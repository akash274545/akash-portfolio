import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          AN.
        </a>

        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
        </div>

        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Akash Narayankar</h1>

          <h2>Java Full Stack Developer</h2>

          <p className="description">
            M.Tech Computer Engineering student and B.Tech Information
            Technology graduate with a strong interest in Java, Spring Boot, web
            development, and database technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-hero-btn">
              View Projects
            </a>

            <a href="#contact" className="hero-btn gradient-border-btn">
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              className="hero-btn gradient-border-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akash-narayankar-873200268/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.76-2-5.52-4.67-5.52-2.15 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.5v-6.18c0-1.63.3-3.2 2.32-3.2 1.99 0 2.01 1.86 2.01 3.3V21H21v-7.15Z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/akash274545"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.5-3.76-1.5-.5-1.27-1.23-1.61-1.23-1.61-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.44 3.08-1.14 3.08-1.14.61 1.53.23 2.67.11 2.95.71.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.53.4.35.76 1.04.76 2.1v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:akashn2745@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 3.2V17h18V8.2l-9 5.6-9-5.6Zm1.4-1.2L12 12l7.6-5H4.4Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-wrapper">
            <div className="profile-glow"></div>

            <div className="profile-circle">
              <img src="/images/profile.jpg" alt="Akash Narayankar" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-heading">
            <p className="section-subtitle">GET TO KNOW ME</p>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-content">
            {/* Left Side */}
            <div className="about-main">
              <p>
                Hello! I'm <strong>Akash Narayankar</strong>, an Information
                Technology graduate currently pursuing M.Tech in Computer
                Engineering at Bharti Vidyapeeth (Deemed to be University),
                Pune.
              </p>

              <p>
                I have a strong interest in{" "}
                <strong>Java Full Stack Development</strong> and enjoy building
                practical applications using Java, Spring Boot, databases, and
                modern web technologies.
              </p>

              <p>
                I am passionate about learning new technologies, solving
                programming problems, and developing efficient and user-friendly
                applications.
              </p>

              <div className="about-highlight">
                <span>🚀</span>
                <div>
                  <strong>My Career Focus</strong>
                  <p>
                    Building scalable backend systems and modern full-stack
                    applications using Java and Spring Boot.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🎓</div>

                <div>
                  <span>Currently Pursuing</span>
                  <strong>M.Tech Computer Engineering</strong>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">💻</div>

                <div>
                  <span>Undergraduate Degree</span>
                  <strong>B.Tech Information Technology</strong>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🏫</div>

                <div>
                  <span>University</span>
                  <strong>Shivaji University, Kolhapur</strong>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">⚡</div>

                <div>
                  <span>Primary Focus</span>
                  <strong>Java Full Stack Development</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <p className="section-subtitle">WHAT I WORK WITH</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p>Core Java, OOP, Collections, Exception Handling</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Spring Boot</h3>
            <p>REST APIs, Backend Development, MVC Architecture</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, Bootstrap</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Databases</h3>
            <p>MySQL, MongoDB, Firebase Realtime Database</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Programming</h3>
            <p>C, C++, Data Structures and Problem Solving</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🔗</div>
            <h3>Tools &amp; Platforms</h3>
            <p>Git, GitHub, VS Code, Maven</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-heading">
            <p className="section-subtitle">MY WORK</p>
            <h2 className="section-title">Projects</h2>

            <p className="projects-intro">
              A selection of projects I have built using modern technologies and
              practical problem-solving approaches.
            </p>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <article className="project-card">
              <div className="project-icon qr-project-icon">
                <div className="phone-icon">
                  <div className="phone-screen">
                    <div className="qr-pattern">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <div className="qr-badge">QR</div>
              </div>

              <div className="project-content">
                <span className="project-number">PROJECT 01</span>

                <h3>QR Based Smart Attendance and Reporting System</h3>

                <p>
                  A smart attendance management system using QR technology with
                  an admin panel, attendance tracking, reporting, and
                  email-based report generation.
                </p>

                <div className="project-technologies">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>Firebase</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://www.youtube.com"
                    className="project-btn primary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://www.youtube.com"
                    className="project-btn secondary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 2 - Placeholder */}
            {/* Project 2 */}

            {/* Project 2 */}
            <article className="project-card">
              <div className="project-icon spam-project-icon">
                <div className="email-icon-box">
                  <div className="email-envelope">
                    <div className="email-flap"></div>
                  </div>

                  <div className="spam-badge">SPAM</div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">PROJECT 02</span>

                <h3>Spam Email Detection</h3>

                <p>
                  A machine learning based application designed to identify and
                  classify emails as spam or legitimate, helping users detect
                  unwanted and potentially harmful messages.
                </p>

                <div className="project-technologies">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Data Processing</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://github.com/akash274545/SpamEmailDetection"
                    className="project-btn primary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/akash274545/SpamEmailDetection"
                    className="project-btn secondary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 3 */}
            <article className="project-card">
              <div className="project-icon pet-project-icon">
                <div className="pet-icon-box">
                  <div className="paw-icon">🐾</div>

                  <div className="pet-badge">PET</div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">PROJECT 03</span>

                <h3>PetFodie Web</h3>

                <p>
                  A responsive pet food shopping website designed to provide
                  users with a simple and convenient platform for browsing and
                  purchasing pet food products.
                </p>

                <div className="project-technologies">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://pet-care-one.vercel.app"
                    className="project-btn primary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/akash274545/PetFodie_Web"
                    className="project-btn secondary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 4 */}
            <article className="project-card">
              <div className="project-icon fee-project-icon">
                <div className="fee-icon-box">
                  <div className="fee-card">
                    <div className="fee-card-line"></div>
                    <div className="fee-card-line short"></div>
                    <div className="fee-rupee">₹</div>
                  </div>

                  <div className="fee-badge">FEE</div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">PROJECT 04</span>

                <h3>Student Fee Management System</h3>

                <p>
                  A student fee management application designed to manage
                  student fee records, payment details, and related academic
                  information efficiently.
                </p>

                <div className="project-technologies">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://github.com/akash274545/Student_Fee"
                    className="project-btn primary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/akash274545/Student_Fee"
                    className="project-btn secondary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 5 */}
            <article className="project-card">
              <div className="project-icon ai-project-icon">
                <div className="ai-icon-box">
                  <div className="chatbot-icon">
                    <div className="bot-face">
                      <span></span>
                      <span></span>
                    </div>

                    <div className="bot-mouth"></div>
                  </div>

                  <div className="ai-badge">AI</div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">PROJECT 05</span>

                <h3>AI Chatbot</h3>

                <p>
                  An AI-powered chatbot application designed to provide
                  interactive conversations and intelligent responses through a
                  user-friendly chat interface.
                </p>

                <div className="project-technologies">
                  <span>Python</span>
                  <span>AI</span>
                  <span>Machine Learning</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://github.com/akash274545/AI-Chatbot"
                    className="project-btn primary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/akash274545/AI-Chatbot"
                    className="project-btn secondary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 6 */}
            <article className="project-card">
              <div className="project-icon meal-project-icon">
                <div className="meal-icon-box">
                  <div className="meal-plate">
                    <div className="meal-food">🍽️</div>
                  </div>

                  <div className="meal-badge">MEAL</div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">PROJECT 06</span>

                <h3>Meal Tracker</h3>

                <p>
                  A meal tracking application designed to help users record
                  their daily meals, organize food information, and maintain a
                  simple overview of their eating habits.
                </p>

                <div className="project-technologies">
                  <span>Web Development</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://github.com/akash274545/meal-tracker"
                    className="project-btn primary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/akash274545/meal-tracker"
                    className="project-btn secondary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 7 */}
            <article className="project-card">
              <div className="project-icon portfolio-project-icon">
                <div className="portfolio-icon-box">
                  <div className="browser-icon">
                    <div className="browser-top">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-screen">
                      <div className="browser-line"></div>
                      <div className="browser-line short"></div>
                      <div className="browser-line"></div>
                    </div>
                  </div>

                  <div className="portfolio-badge">AN</div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">PROJECT 07</span>

                <h3>Akash Portfolio</h3>

                <p>
                  A modern and responsive personal portfolio website designed to
                  showcase my skills, projects, education, experience, and
                  professional profiles through a clean and interactive
                  interface.
                </p>

                <div className="project-technologies">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>

                <div className="project-buttons">
                  <a
                    href="YOUR_LIVE_PORTFOLIO_LINK"
                    className="project-btn primary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                  <a
                    href="YOUR_GITHUB_PORTFOLIO_REPOSITORY"
                    className="project-btn secondary-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="education-container">
          <div className="education-heading">
            <p className="section-subtitle">MY JOURNEY</p>
            <h2 className="section-title">Education</h2>

            <p className="education-intro">
              My academic journey in Information Technology and Computer
              Engineering.
            </p>
          </div>

          <div className="education-timeline">
            {/* M.Tech */}
            <div className="education-item">
              <div className="education-icon">🎓</div>

              <div className="education-card">
                <div className="education-top">
                  <span className="education-year">2026 – Present</span>

                  <span className="education-status">Currently Pursuing</span>
                </div>

                <h3>M.Tech — Computer Engineering</h3>

                <p className="education-institute">
                  Bharti Vidyapeeth (Deemed to be University), Pune
                </p>

                <p className="education-description">
                  Currently pursuing postgraduate studies in Computer
                  Engineering with a focus on strengthening technical knowledge
                  and advanced computing concepts.
                </p>
              </div>
            </div>

            {/* B.Tech */}
            <div className="education-item">
              <div className="education-icon">💻</div>

              <div className="education-card">
                <div className="education-top">
                  <span className="education-year">2022 – 2026</span>

                  <span className="education-score">84.45%</span>
                </div>

                <h3>B.Tech — Information Technology</h3>

                <p className="education-institute">
                  Shivaji University, Kolhapur
                </p>

                <p className="education-description">
                  Completed undergraduate studies in Information Technology,
                  developing a strong foundation in programming, databases,
                  software development, and computer science concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-heading">
            <p className="section-subtitle">GET IN TOUCH</p>

            <h2 className="section-title">Contact Me</h2>

            <p className="contact-intro">
              Interested in working together or discussing a project? Feel free
              to get in touch. I would be happy to connect with you.
            </p>
          </div>

          <div className="contact-grid">
            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon">✉️</div>

              <div>
                <span>Email</span>
                <strong> akashn2745@gmail.com</strong>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-card">
              <div className="contact-icon">💬</div>

              <div>
                <span>WhatsApp</span>

                <strong>Available for conversation</strong>
              </div>
            </div>

            {/* Location */}
            <div className="contact-card">
              <div className="contact-icon">📍</div>

              <div>
                <span>Location</span>

                <strong>Kolhapur, Maharashtra</strong>
              </div>
            </div>
          </div>

          <a href="mailto:akashn2745@gmail.com" className="contact-email-btn">
            ✉️ &nbsp; Send Me an Email
          </a>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="social-container">
          <p className="section-subtitle">LET'S CONNECT</p>

          <h2>Find Me Online</h2>

          <p className="social-description">
            Connect with me through my professional and social platforms.
          </p>

          <div className="social-grid">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akash-narayankar-873200268/"
              className="social-card"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon linkedin-icon">in</div>

              <div>
                <strong>LinkedIn</strong>
                <span>Professional Network</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/akash274545"
              className="social-card"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon github-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="27"
                  height="27"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </div>

              <div>
                <strong>GitHub</strong>
                <span>Projects &amp; Code</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917796758256"
              className="social-card"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon whatsapp-icon">☎</div>

              <div>
                <strong>WhatsApp</strong>
                <span>Let's Chat</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:akashn2745@gmail.com"
              className="social-card"
              aria-label="Email"
            >
              <div className="social-icon email-icon">✉</div>

              <div>
                <strong>Email</strong>
                <span>Send a Message</span>
              </div>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/AkashNarayank27"
              className="social-card"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon twitter-icon">X</div>

              <div>
                <strong>Twitter / X</strong>
                <span>Follow &amp; Connect</span>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/gcnZgmBhTSw7BiY96"
              className="social-card"
              aria-label="Location"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon location-icon">📍</div>

              <div>
                <strong>Location</strong>
                <span>View My Location</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">AN.</div>

          <p className="footer-role">Java Full Stack Developer</p>

          <div className="footer-line"></div>

          <p className="footer-copyright">
            © 2026 Akash Narayankar. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
