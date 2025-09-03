/**
 * Skills Section Component
 * Technology stack showcase in newspaper format
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { skills } from '@/lib/data';

interface SkillsSectionProps {
  className?: string;
}

export const SkillsSection: FC<SkillsSectionProps> = ({ className = '' }) => {
  // Split skills into two columns for the newspaper layout
  const midpoint = Math.ceil(skills.length / 2);
  const firstColumn = skills.slice(0, midpoint);
  const secondColumn = skills.slice(midpoint);

  const SkillsList = () => (
    <div className="skills-list">
      <div className="skills-column">
        {firstColumn.map((skill) => (
          <div key={skill.id} className="skill-item">
            {skill.name}
          </div>
        ))}
      </div>
      <div className="skills-column">
        {secondColumn.map((skill) => (
          <div key={skill.id} className="skill-item">
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );

  const ReadMoreFooter = () => (
    <a href="#skills" className="read-more">Complete technology portfolio ➤</a>
  );

  return (
    <ArticleCard
      id="skills"
      title="DIVERSE TECHNOLOGY MASTERY"
      category="SKILLS"
      date="Technology Stack"
      byline="Comprehensive Skill Portfolio Assessment"
      variant="tech"
      href="#skills"
      className={className}
      footer={<ReadMoreFooter />}
    >
      <SkillsList />
    </ArticleCard>
  );
};
