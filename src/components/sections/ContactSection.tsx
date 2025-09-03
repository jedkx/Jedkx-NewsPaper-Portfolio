/**
 * Contact Section Component
 * Contact information in newspaper format
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { contactInfo } from '@/lib/data';

import emailIcon from '@/assets/email.svg';
import linkedinIcon from '@/assets/linkedin.svg';
import mediumIcon from '@/assets/medium.svg';
import githubIcon from '@/assets/github.svg';

interface ContactSectionProps {
  className?: string;
}

export const ContactSection: FC<ContactSectionProps> = ({ className = '' }) => {
  const ContactLinks = () => (
    <div className="minimal-contact-links">
      <a 
        href={`mailto:${contactInfo.email}`} 
        className="minimal-contact-item" 
        title="Send Email"
      >
        <img src={emailIcon} alt="Email" className="contact-logo" />
      </a>
      <a 
        href={contactInfo.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="minimal-contact-item" 
        title="LinkedIn Profile"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="contact-logo" />
      </a>
      {contactInfo.medium && (
        <a 
          href={contactInfo.medium} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="minimal-contact-item" 
          title="Medium Articles"
        >
          <img src={mediumIcon} alt="Medium" className="contact-logo" />
        </a>
      )}
      <a 
        href={contactInfo.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="minimal-contact-item" 
        title="GitHub Repository"
      >
        <img src={githubIcon} alt="GitHub" className="contact-logo" />
      </a>
    </div>
  );

  const ContactNote = () => (
    <div className="article-footer">
      <div className="contact-note">
        Professional correspondence welcomed through any of the above channels
      </div>
    </div>
  );

  return (
    <div id="contact" className={`contact-section ${className}`}>
      <div className="article-header">
        <span className="article-category">CONTACT</span>
        <span className="article-date">Communication Services</span>
      </div>
      <h3 className="article-headline">TELEGRAPH & POST OFFICE</h3>
      <div className="byline">Direct Communication Channels Available</div>
      <div className="article-divider"></div>
      
      <ContactLinks />
      <ContactNote />
    </div>
  );
};
