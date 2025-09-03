/**
 * Education Section Component
 * Education and certifications in newspaper format
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { education } from '@/lib/data';

interface EducationSectionProps {
  className?: string;
}

export const EducationSection: FC<EducationSectionProps> = ({ className = '' }) => {
  const EducationCards = () => (
    <div className="education-cards">
      {education.map((edu) => (
        <a key={edu.id} href="#education" className="education-card newspaper-card">
          <div className="education-icon">{edu.icon}</div>
          <h4 className="education-title">{edu.degree}</h4>
          <div className="education-institution">{edu.institution}</div>
          <div className="education-period">{edu.period}</div>
          <p className="education-description">
            {edu.description}
          </p>
        </a>
      ))}
    </div>
  );

  const ReadMoreFooter = () => (
    <a href="#education" className="read-more">Complete education  ➤</a>
  );

  return (
    <section id="education" className={`education-section ${className}`}>
      <div className="article-header">
        <span className="article-category">EDUCATION</span>
        <span className="article-date">Academic Journey</span>
      </div>
      <h3 className="article-headline">BUILDING STRONG ACADEMIC FOUNDATION</h3>
      <div className="byline">Educational Excellence & Professional Certifications</div>
      <div className="article-divider"></div>


      <EducationCards />
      <div className="article-footer">
        <ReadMoreFooter />
      </div>
    </section>
  );
};
