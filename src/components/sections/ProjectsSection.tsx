/**
 * Projects Section Component
 * Project showcase in newspaper format
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import type { Project } from '@/types';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ className = '' }) => {
  
  const handleProjectClick = (project: Project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const ProjectsList = () => (
    <div className="newspaper-projects">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project}
          variant="default"
          onClick={handleProjectClick}
        />
      ))}
    </div>
  );

  const ReadMoreFooter = () => (
    <a 
      href="https://github.com/jedkx" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="read-more"
    >
      View complete project archive ➤
    </a>
  );

  return (
    <div id="projects" className={`feature-article ${className}`}>
      <div className="article-header">
        <span className="article-category">PROJECTS</span>
        <span className="article-date">Academic & Personal Work</span>
      </div>
      <h3 className="article-headline">INNOVATIVE PROJECTS SHOWCASE TECHNICAL GROWTH</h3>
      <div className="byline">Academic Excellence Meets Practical Application</div>
      <div className="article-divider"></div>
      
      <ProjectsList />
      
      <div className="article-footer">
        <ReadMoreFooter />
      </div>
    </div>
  );
};
