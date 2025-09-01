/**
 * Main Portfolio Application Component
 * @description Vintage newspaper-themed portfolio for Caner Coşkun
 * @version 1.0.0
 * @author Caner Coşkun
 */

import React, { Suspense } from 'react';
import './styles/newspaper.css';
import './styles/typography.css'; 
import './styles/layout.css';
import emailIcon from './assets/email.svg';
import linkedinIcon from './assets/linkedin.svg';
import mediumIcon from './assets/medium.svg';
import githubIcon from './assets/github.svg';
import forgCharacter from './assets/forg-character.png';

const App = () => {
  return (
    <div className="newspaper-wrapper">
      <div className="newspaper-page single-page">
        
        {/* Newspaper Header - Enhanced Masthead */}
        <header className="newspaper-header">
          <div className="masthead-info">
            <div className="masthead-line">
              <span className="vol-info">VOL. 1 - NO. 1</span>
              <span className="date-info">SATURDAY, MARCH 27, 2004 | Fair 18°C</span>
              <span className="price-info">FIRST DIGITAL EDITION</span>
            </div>
          </div>
          <h1 className="newspaper-title">DEVELOPER DAILY</h1>
          <div className="subtitle-line">The Professional Tech Chronicle - Ankara Edition</div>
          <div className="newspaper-index">INSIDE: About p.1, Skills p.1, Experience p.1, Projects p.1, Education p.1, Contact p.1</div>
          
          {/* Navigation Bar */}
          <nav className="newspaper-nav" aria-label="Main navigation">
            <a href="#about" className="nav-link" aria-label="Navigate to About section">About</a>
            <a href="#skills" className="nav-link" aria-label="Navigate to Skills section">Skills</a>
            <a href="#experience" className="nav-link" aria-label="Navigate to Experience section">Experience</a>
            <a href="#projects" className="nav-link" aria-label="Navigate to Projects section">Projects</a>
            <a href="#education" className="nav-link" aria-label="Navigate to Education section">Education</a>
            <a href="#contact" className="nav-link" aria-label="Navigate to Contact section">Contact</a>
          </nav>
        </header>

        {/* Main Headline - Breaking News Style */}
        <section className="breaking-news-section">
          <div className="breaking-label">BREAKING NEWS</div>
          <h2 className="main-headline">SOFTWARE ENGINEERING STUDENT MAKES WAVES IN TECH INDUSTRY</h2>
          <div className="headline-subtitle">"Multi-talented Developer Combines Full-Stack Skills with Creative Vision"</div>
          <div className="news-dateline">Ankara Bureau | Student Spotlight</div>
        </section>

        {/* Newspaper Content Grid - 6 Column Layout */}
        <main className="newspaper-grid">
          
          {/*  STORY - About Me (2 columns) */}
          <a href="#about" id="about" className="lead-article newspaper-card">
            <div className="article-header">
              <span className="article-category">ABOUT</span>
              <span className="article-date">March 27, 2004</span>
            </div>
            <h3 className="article-headline">THE RISING STAR OF SOFTWARE ENGINEERING</h3>
            <div className="byline">By Campus Reporter | Atılım University</div>
            <div className="article-divider"></div>
            
            <p className="lead-paragraph">
              <span className="drop-cap">C</span>aner Coşkun, a dedicated Software Engineering 
              student at Atılım University who has been making remarkable strides in the tech industry. 
              Currently in his 4th year and expected to graduate in June 2026, this multi-talented developer 
              brings together full-stack development expertise with over 6 years of creative video editing experience.
              He has also gained valuable cybersecurity experience through hands-on research and earned his 
              Fortinet Certified Fundamentals certification.
            </p>
            
            <p className="article-body">
              Currently serving as an intern at Belsis in Ankara, Coşkun works on enterprise applications 
              using cutting-edge technologies including ASP.NET, MVC, JavaScript, and modern frameworks. 
              His work involves developing robust applications while contributing to agile development processes 
              using Jira for project management and participating in technical reviews and design decisions.
            </p>
            
            <p className="article-body">
              Beyond his technical prowess, Coşkun has been serving as a Student Ambassador at Atılım University 
              since September 2023, where he bridges the gap between prospective students and the university. 
              His dual role showcases his exceptional communication skills and leadership qualities that 
              complement his technical abilities.
            </p>
            
            <p className="article-body">
              What sets Coşkun apart is his unique combination of technical skills and creative vision. 
              With 6+ years of experience as a Video Editor for Ssport+ & NFcomtr, he brings a creative 
              perspective to software development. "I believe technology should not only function flawlessly 
              but also provide an aesthetically pleasing and intuitive user experience," he explains.
            </p>
            
            <div className="article-footer">
              <a href="#about" className="read-more">Full story ➤</a>
              <div className="article-tags">#Student #FullStack #Innovation #Creative</div>
            </div>
          </a>

          {/* TECH SECTION - Career Timeline (2 columns) */}
          <a href="#skills" id="skills" className="tech-article newspaper-card">
            <div className="article-header">
              <span className="article-category">SKILLS</span>
              <span className="article-date">Technology Stack</span>
            </div>
            <h3 className="article-headline">DIVERSE TECHNOLOGY MASTERY</h3>
            <div className="byline">Comprehensive Skill Portfolio Assessment</div>
            <div className="article-divider"></div>
            
            <div className="skills-list">
              <div className="skills-column">
                <div className="skill-item">C</div>
                <div className="skill-item">C++</div>
                <div className="skill-item">Python</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">.NET</div>
                <div className="skill-item">React</div>
                <div className="skill-item">HTML5</div>
                <div className="skill-item">CSS3</div>
                <div className="skill-item">Bootstrap</div>
                <div className="skill-item">Git</div>
                <div className="skill-item">Docker</div>
              </div>
              <div className="skills-column">
                <div className="skill-item">Jira</div>
                <div className="skill-item">GitLab</div>
                <div className="skill-item">Photoshop</div>
                <div className="skill-item">Premiere</div>
                <div className="skill-item">AfterEffects</div>
                <div className="skill-item">ASP.NET</div>
                <div className="skill-item">MVC</div>
                <div className="skill-item">DevExpress</div>
                <div className="skill-item">KendoUI</div>
                <div className="skill-item">AgileMethodology</div>
              </div>
            </div>
            
            <div className="article-footer">
              <a href="#skills" className="read-more">Complete technology portfolio ➤</a>
            </div>
          </a>

          {/* BUSINESS SECTION - Professional Experience (1 column) */}
          <a href="#experience" id="experience" className="business-article newspaper-card">
            <div className="article-header">
              <span className="article-category">EXPERIENCE</span>
              <span className="article-date">Career Timeline</span>
            </div>
            <h3 className="article-headline">BUILDING EXPERTISE THROUGH DIVERSE ROLES</h3>
            <div className="byline">Professional Journey & Impact Assessment</div>
            <div className="article-divider"></div>
            
            <div className="experience-list">
              <div className="experience-entry">
                <h4 className="experience-role">Software Development Intern</h4>
                <p className="experience-org">Belsis | Ankara</p>
                <div className="experience-meta">Jul 2025 - Present</div>
                <p className="experience-summary">
                  Developing enterprise applications using ASP.NET, MVC, JavaScript, HTML5, 
                  Bootstrap, Kendo UI, and DevExpress Reporting. Working in agile environment 
                  with Jira for project management, contributing to technical reviews and 
                  design decisions. Gaining hands-on experience in enterprise-level development.
                </p>
              </div>

              <div className="experience-entry">
                <h4 className="experience-role">Student Ambassador</h4>
                <p className="experience-org">Atılım University | Ankara</p>
                <div className="experience-meta">Sep 2023 - Present</div>
                <p className="experience-summary">
                  Serving as liaison between university and prospective students/parents. 
                  Conducting campus tours, providing information sessions, and facilitating 
                  communication between students and university personnel. Developing strong 
                  interpersonal and presentation skills.
                </p>
              </div>

              <div className="experience-entry">
                <h4 className="experience-role">Video Editor</h4>
                <p className="experience-org">Ssport+ & NFcomtr | Remote</p>
                <div className="experience-meta">Feb 2019 - Present</div>
                <p className="experience-summary">
                  Creating engaging short-form video content with advanced color correction, 
                  grading, transitions, and special effects. Managing social media content 
                  production and maintaining consistent quality standards. 6+ years of 
                  professional creative experience across multiple platforms.
                </p>
              </div>
            </div>
            
            <div className="article-footer">
              <a href="#experience" className="read-more">Complete technology stack ➤</a>
            </div>
          </a>

          {/* NEWS SIDEBAR - Brief Updates */}
          <aside className="news-sidebar">
            <div className="sidebar-header">
              <span className="sidebar-category">BRIEF UPDATES</span>
            </div>
            <h4 className="sidebar-title">INDUSTRY NOTES</h4>
            <div className="sidebar-divider"></div>
            
            <div className="brief-item">
              <h5 className="brief-headline">React 19 Release Notes</h5>
              <p className="brief-text">Latest framework updates bring enhanced performance optimizations.</p>
            </div>
            
            <div className="brief-item">
              <h5 className="brief-headline">TypeScript Adoption Rises</h5>
              <p className="brief-text">Industry surveys show 85% of developers now prefer strongly typed JavaScript.</p>
            </div>
            
            <div className="brief-item">
              <h5 className="brief-headline">Remote Work Continues</h5>
              <p className="brief-text">Tech companies maintain flexible policies post-pandemic era.</p>
            </div>
            
            <div className="brief-item">
              <h5 className="brief-headline">AI Integration Growing</h5>
              <p className="brief-text">Development tools increasingly incorporate artificial intelligence assistance.</p>
            </div>
            
            <div className="advertisement-box">
              <div className="ad-header">ADVERTISEMENT</div>
              <div className="ad-content">
                <strong>Professional Services Available</strong><br />
                Web Development<br />
                UI/UX Design<br />
                Consultation<br />
                <em>Contact for rates</em>
              </div>
            </div>
          </aside>

          {/* FEATURE STORIES - Projects */}
          <div id="projects" className="feature-article">
            <div className="article-header">
              <span className="article-category">PROJECTS</span>
              <span className="article-date">Academic & Personal Work</span>
            </div>
            <h3 className="article-headline">INNOVATIVE PROJECTS SHOWCASE TECHNICAL GROWTH</h3>
            <div className="byline">Academic Excellence Meets Practical Application</div>
            <div className="article-divider"></div>
            
            <div className="newspaper-projects">
              <a href="#projects" className="project-story-block newspaper-card">
                <div className="project-image-box">
                  <div className="image-placeholder">
                    <div className="image-border">
                      <div className="project-visual">♾️</div>
                    </div>
                    <div className="project-buttons">
                    <a href="https://gitlab.com/me2815443/my-project" target="_blank" className="project-btn" title="View Source Code">
                      <img src={githubIcon} alt="GitHub" className="btn-icon-svg" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="project-article-text">
                  <h4 className="article-headline project-story-headline">Full-Stack Calculator with CI Pipeline</h4>
                  <p className="project-story-content">
                    Responsive full-stack calculator application built with .NET 8 backend and React frontend. 
                    Features comprehensive CI/CD automation pipeline for seamless deployment and testing. 
                    Demonstrates modern development practices including automated testing, code quality checks, 
                    and deployment strategies essential for enterprise development.
                  </p>
                </div>
              </a>
              
              <a href="#projects" className="project-story-block newspaper-card">
                <div className="project-image-box">
                  <div className="image-placeholder">
                    <div className="image-border">
                      <img src={forgCharacter} alt="Forg Game Character" className="project-visual forg-character" />
                    </div>
                    <div className="project-buttons">
                    <a href="https://github.com/jedkx/forg" target="_blank" className="project-btn" title="View Source Code">
                      <img src={githubIcon} alt="GitHub" className="btn-icon-svg" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="project-article-text">
                  <h4 className="article-headline project-story-headline">Forg - Interactive Game Project</h4>
                  <p className="project-story-content">
                    An indie game project developed using Godot Engine 4.x and GDScript, featuring pixel art assets 
                    designed with Aseprite to create a top-down survival gameplay experience. Implemented core gameplay 
                    systems including player movement, automatic weapon systems, enemy AI, and dynamic spawning mechanics 
                    using object-oriented programming approach. Focused on performance optimization, UI/UX design, and 
                    maintained a modular game development process through Git version control.
                  </p>
                </div>
              </a>
              
              <a href="#projects" className="project-story-block newspaper-card">
                <div className="project-image-box">
                  <div className="image-placeholder">
                    <div className="image-border">
                      <div className="project-visual">🎬</div>
                    </div>
                    <div className="project-buttons">
                    <a href="https://github.com/jedkx/video-portfolio" target="_blank" className="project-btn" title="View Source Code">
                      <img src={githubIcon} alt="GitHub" className="btn-icon-svg" />
                    </a>
                  </div>
                  </div>
                </div>
                <div className="project-article-text">
                  <h4 className="article-headline project-story-headline">Video Editing Portfolio - React Web App</h4>
                  <p className="project-story-content">
                    A modern React-based portfolio website showcasing 6+ years of professional video editing work 
                    with Ssport+ and NFcomtr. Features responsive design, interactive video galleries, and smooth 
                    animations built with React components and modern CSS. Demonstrates expertise in both creative 
                    video production and frontend web development, including component-based architecture, state 
                    management, and performance optimization for media-rich content delivery.
                  </p>
                </div>
              </a>
            </div>
            
            <div className="article-footer">
              <a href="https://github.com/jedkx" target="_blank" rel="noopener noreferrer" className="read-more">
                View complete project archive ➤
              </a>
            </div>
          </div>

          {/* EDUCATION & CREDENTIALS SECTION - Project Style Cards */}
          <section id="education" className="education-section">
            <div className="article-header">
              <span className="article-category">EDUCATION</span>
              <span className="article-date">Academic Journey</span>
            </div>
            <h3 className="article-headline">BUILDING STRONG ACADEMIC FOUNDATION</h3>
            <div className="byline">Educational Excellence & Professional Certifications</div>
            <div className="article-divider"></div>
            
            <div className="education-cards">
              <a href="#education" className="education-card newspaper-card">
                <div className="education-icon">🎓</div>
                <h4 className="education-title">Software Engineering</h4>
                <div className="education-institution">Atılım University, Ankara</div>
                <div className="education-period">Expected June 2025</div>
                <p className="education-description">
                  Bachelor's degree in Software Engineering with focus on full-stack development, 
                  software architecture, and modern programming methodologies. Currently in final year 
                  with strong academic performance.
                </p>
              </a>
              
              <a href="#education" className="education-card newspaper-card">
                <div className="education-icon">🛡️</div>
                <h4 className="education-title">Fortinet Certified Fundamentals</h4>
                <div className="education-institution">Fortinet</div>
                <div className="education-period">2024</div>
                <p className="education-description">
                  Professional certification in network security fundamentals, 
                  cybersecurity best practices, and Fortinet security solutions. 
                  Demonstrates commitment to cybersecurity expertise.
                </p>
              </a>
              
              <a href="#education" className="education-card newspaper-card">
                <div className="education-icon">🌎</div>
                <h4 className="education-title">English Proficiency</h4>
                <div className="education-institution">Professional Level</div>
                <div className="education-period">B2 Certified</div>
                <p className="education-description">
                  Upper-intermediate English proficiency enabling effective 
                  communication in international tech environments and 
                  collaboration with global development teams.
                </p>
              </a>
              
              <a href="#education" className="education-card newspaper-card">
                <div className="education-icon">🎨</div>
                <h4 className="education-title">Adobe Creative Suite</h4>
                <div className="education-institution">Professional Training</div>
                <div className="education-period">6+ Years Experience</div>
                <p className="education-description">
                  Extensive hands-on experience with Adobe Applications for 
                  video editing, motion graphics, and creative content production. 
                  Self-taught through professional practice and continuous learning.
                </p>
              </a>
            </div>
            
            {/* Contact section with article structure */}
            <div id="contact" className="education-contact-section">
              <div className="article-header">
                <span className="article-category">CONTACT</span>
                <span className="article-date">Communication Services</span>
              </div>
              <h3 className="article-headline">TELEGRAPH & POST OFFICE</h3>
              <div className="byline">Direct Communication Channels Available</div>
              <div className="article-divider"></div>
              
              <div className="minimal-contact-links">
                <a href="mailto:ccoskun742@gmail.com" className="minimal-contact-item" title="Send Email">
                  <img src={emailIcon} alt="Email" className="contact-logo" />
                </a>
                <a href="https://www.linkedin.com/in/caner-co%C5%9Fkun/" target="_blank" rel="noopener noreferrer" className="minimal-contact-item" title="LinkedIn Profile">
                  <img src={linkedinIcon} alt="LinkedIn" className="contact-logo" />
                </a>
                <a href="https://medium.com/@ccoskun742" target="_blank" rel="noopener noreferrer" className="minimal-contact-item" title="Medium Articles">
                  <img src={mediumIcon} alt="Medium" className="contact-logo" />
                </a>
                <a href="https://github.com/jedkx" target="_blank" rel="noopener noreferrer" className="minimal-contact-item" title="GitHub Repository">
                  <img src={githubIcon} alt="GitHub" className="contact-logo" />
                </a>
              </div>
              
              <div className="article-footer">
                <div className="contact-note">
                  Professional correspondence welcomed through any of the above channels
                </div>
              </div>
            </div>
          </section>

        </main>        {/* Newspaper Footer */}
        <footer className="newspaper-footer">
          <div className="footer-line"></div>
          <div className="footer-content">
            <div className="publisher-info">
              <strong>DEVELOPER DAILY</strong> - Published by C. COŞKUN ENTERPRISES
            </div>
            <div className="copyright-notice">
              © Caner Coşkun 2025 | All Rights Reserved | Printed in Ankara, Turkey
            </div>
            <div className="edition-info">
              First Edition | Volume 1, Number 1 | Initial Commit 2025
            </div>
          </div>
          <div className="footer-line"></div>
        </footer>

      </div>
    </div>
  );
};

export default App;
