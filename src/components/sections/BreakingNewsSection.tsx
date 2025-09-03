/**
 * Breaking News Section Component
 * Main headline section of the newspaper
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { newspaperContent } from '@/lib/data';

interface BreakingNewsSectionProps {
  className?: string;
}

export const BreakingNewsSection: FC<BreakingNewsSectionProps> = ({ 
  className = '' 
}) => {
  const { breakingNews } = newspaperContent;

  return (
    <section className={`breaking-news-section ${className}`}>
      <div className="breaking-label">{breakingNews.label}</div>
      <h2 className="main-headline">{breakingNews.headline}</h2>
      <div className="headline-subtitle">"{breakingNews.subtitle}"</div>
      <div className="news-dateline">{breakingNews.dateline}</div>
    </section>
  );
};
