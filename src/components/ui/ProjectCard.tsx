/**
 * Project Card Component
 * Displays project information in newspaper article format
 * @author Caner Coşkun
 * @version 2.0.0
 */

import React, { type FC } from 'react';
import type { Project } from '@/types';

import githubIcon from '@/assets/github.svg';

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured' | 'minimal';
  onClick?: (project: Project) => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
  variant = 'default',
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={`project-story-block newspaper-card ${variant}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
    >
      <div className="project-image-box">
        <div className="image-placeholder">
          <div className="image-border">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={`${project.title} preview`}
                className="project-image"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
            ) : null}
            <div 
              className={`project-visual ${project.id === 'forg-game' ? 'forg-character' : ''}`}
              style={{ display: project.imageUrl ? 'none' : 'flex' }}
            >
              {project.icon}
            </div>
          </div>
          {project.githubUrl && (
            <div className="project-buttons">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-btn" 
                title="View Source Code"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={githubIcon} alt="GitHub" className="btn-icon-svg" />
              </a>
            </div>
          )}
        </div>
      </div>
      
      <div className="project-article-text">
        <h4 className="article-headline project-story-headline">
          {project.title}
        </h4>
        <p className="project-story-content">
          {project.description}
        </p>
        
        {project.technologies.length > 0 && (
          <div className="project-technologies">
            <span className="tech-label">Technologies: </span>
            {project.technologies.join(', ')}
          </div>
        )}
        
        {project.status && (
          <div className={`project-status ${project.status}`}>
            Status: {project.status.replace('-', ' ')}
          </div>
        )}
      </div>
    </div>
  );
};
