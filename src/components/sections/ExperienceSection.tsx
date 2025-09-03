/**
 * Experience Section Component
 * Professional experience in newspaper article format
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { experiences } from '@/lib/data';

interface ExperienceSectionProps {
  className?: string;
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({ className = '' }) => {
  const ExperienceList = () => (
    <div className="experience-list">
      {experiences.map((experience) => (
        <div key={experience.id} className="experience-entry">
          <h4 className="experience-role">{experience.role}</h4>
          <p className="experience-org">{experience.company} | {experience.location}</p>
          <div className="experience-meta">{experience.period}</div>
          <p className="experience-summary">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );

  const ReadMoreFooter = () => (
    <a href="#experience" className="read-more">Complete experience timeline ➤</a>
  );

  return (
    <ArticleCard
      id="experience"
      title="BUILDING EXPERTISE THROUGH DIVERSE ROLES"
      category="EXPERIENCE"
      date="Career Timeline"
      byline="Professional Journey & Impact Assessment"
      variant="business"
      href="#experience"
      className={className}
      footer={<ReadMoreFooter />}
    >
      <ExperienceList />
    </ArticleCard>
  );
};
