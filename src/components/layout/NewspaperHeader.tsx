/**
 * Newspaper Header Component
 * Vintage newspaper masthead with navigation
 * @author Caner Coşkun
 * @version 2.0.0
 */

import React, { type FC } from 'react';
import type { SectionId } from '@/types';
import { handleNavClick } from '@/lib/scroll';
import { newspaperContent } from '@/lib/data';

interface NewspaperHeaderProps {
  activeSection?: SectionId | null;
  onSectionChange?: (section: SectionId) => void;
  className?: string;
}

export const NewspaperHeader: FC<NewspaperHeaderProps> = ({ 
  activeSection, 
  onSectionChange, 
  className = '' 
}) => {
  const { masthead } = newspaperContent;

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(event, onSectionChange);
  };

  return (
    <header className={`newspaper-header ${className}`}>
      {/* Masthead Information */}
      <div className="masthead-info">
        <div className="masthead-line">
          <span className="vol-info">{masthead.volume}</span>
          <span className="date-info">{masthead.date}</span>
          <span className="price-info">{masthead.edition}</span>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="newspaper-title">{masthead.title}</h1>
      <div className="subtitle-line">{masthead.subtitle}</div>
      <div className="newspaper-index">{masthead.index}</div>
      
      {/* Navigation Bar */}
      <nav className="newspaper-nav" aria-label="Main navigation">
        <a 
          href="#about" 
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={handleNavigation}
          aria-label="Navigate to About section"
        >
          About
        </a>
        <a 
          href="#skills" 
          className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={handleNavigation}
          aria-label="Navigate to Skills section"
        >
          Skills
        </a>
        <a 
          href="#experience" 
          className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={handleNavigation}
          aria-label="Navigate to Experience section"
        >
          Experience
        </a>
        <a 
          href="#projects" 
          className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={handleNavigation}
          aria-label="Navigate to Projects section"
        >
          Projects
        </a>
        <a 
          href="#education" 
          className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
          onClick={handleNavigation}
          aria-label="Navigate to Education section"
        >
          Education
        </a>
        <a 
          href="#contact" 
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={handleNavigation}
          aria-label="Navigate to Contact section"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
