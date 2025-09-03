/**
 * Article Card Component
 * Reusable newspaper article card with vintage styling
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC, ReactNode } from 'react';

export interface ArticleCardProps {
  id?: string;
  title: string;
  category: string;
  date?: string;
  children: ReactNode;
  href?: string;
  className?: string;
  footer?: ReactNode;
  byline?: string;
  variant?: 'default' | 'lead' | 'tech' | 'business' | 'feature';
}

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
  title,
  category,
  date,
  children,
  href,
  className = '',
  footer,
  byline,
  variant = 'default'
}) => {
  const baseClasses = `newspaper-card ${variant}-article`;
  const cardClasses = `${baseClasses} ${className}`.trim();

  const content = (
    <>
      <div className="article-header">
        <span className="article-category">{category}</span>
        {date && <span className="article-date">{date}</span>}
      </div>
      <h3 className="article-headline">{title}</h3>
      {byline && <div className="byline">{byline}</div>}
      <div className="article-divider"></div>
      
      <div className="article-content">
        {children}
      </div>
      
      {footer && (
        <div className="article-footer">
          {footer}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <div id={id} className={cardClasses}>
        {content}
      </div>
    );
  }

  return (
    <div id={id} className={cardClasses}>
      {content}
    </div>
  );
};
