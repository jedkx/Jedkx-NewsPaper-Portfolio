/**
 * News Sidebar Component
 * Brief updates and advertisement sidebar
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { newspaperContent } from '@/lib/data';

interface NewsSidebarProps {
  className?: string;
}

export const NewsSidebar: FC<NewsSidebarProps> = ({ className = '' }) => {
  const { briefUpdates, advertisement } = newspaperContent;

  const BriefUpdates = () => (
    <>
      {briefUpdates.map((update, index) => (
        <div key={index} className="brief-item">
          <h5 className="brief-headline">{update.headline}</h5>
          <p className="brief-text">{update.text}</p>
        </div>
      ))}
    </>
  );

  const Advertisement = () => (
    <div className="advertisement-box">
      <div className="ad-header">{advertisement.header}</div>
      <div className="ad-content">
        {advertisement.content.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < advertisement.content.split('\n').length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <aside className={`news-sidebar ${className}`}>
      <div className="sidebar-header">
        <span className="sidebar-category">BRIEF UPDATES</span>
      </div>
      <h4 className="sidebar-title">INDUSTRY NOTES</h4>
      <div className="sidebar-divider"></div>
      
      <BriefUpdates />
      <Advertisement />
    </aside>
  );
};
