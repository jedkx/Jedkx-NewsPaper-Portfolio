/**
 * Main Portfolio Application Component - TypeScript Version
 * Modern architecture with component-based design
 * @author Caner Coşkun
 * @version 2.0.0
 */

import { useState, useEffect, Suspense } from 'react';
import type { FC } from 'react';
import type { SectionId } from '@/types';

// Styles
import '@/styles/newspaper.css';
import '@/styles/typography.css'; 
import '@/styles/layout.css';

// Components
import { ErrorBoundary } from '@/components';
import {
  NewspaperHeader,
  NewspaperFooter,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
  BreakingNewsSection,
  NewsSidebar
} from '@/components';

// Utilities
import { setupScrollSpy } from '@/lib/scroll';

// Loading component for Suspense
const LoadingSpinner: FC = () => (
  <div className="loading-wrapper">
    <div className="newspaper-card loading-card">
      <div className="article-header">
        <span className="article-category">LOADING</span>
        <span className="article-date">Please Wait...</span>
      </div>
      <h3 className="article-headline">NEWSROOM PREPARING LATEST EDITION</h3>
      <div className="byline">Technical Operations | System Status</div>
      <div className="article-divider"></div>
      <p className="loading-message">
        Our editorial team is preparing the latest edition of your portfolio. 
        Thank you for your patience while we ensure the highest quality content delivery.
      </p>
    </div>
  </div>
);

const App: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>('about');

  useEffect(() => {
    // Set up scroll spy for active section tracking
    const cleanup = setupScrollSpy((section) => {
      setActiveSection(section);
    });

    // Cleanup on unmount
    return cleanup;
  }, []);

  const handleSectionChange = (section: SectionId) => {
    setActiveSection(section);
  };

  return (
    <ErrorBoundary>
      <div className="newspaper-wrapper">
        <div className="newspaper-page single-page">
          
          {/* Enhanced Newspaper Header with Navigation */}
          <NewspaperHeader 
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />

          {/* Main Breaking News Headline */}
          <BreakingNewsSection />

          {/* Main Content Grid - Enhanced 6 Column Layout */}
          <main className="newspaper-grid">
            
            {/* About Section - Lead Article (2 columns) */}
            <Suspense fallback={<LoadingSpinner />}>
              <AboutSection />
            </Suspense>

            {/* Skills Section - Tech Article (2 columns) */}
            <Suspense fallback={<LoadingSpinner />}>
              <SkillsSection />
            </Suspense>

            {/* Experience Section - Business Article (1 column) */}
            <Suspense fallback={<LoadingSpinner />}>
              <ExperienceSection />
            </Suspense>

            {/* News Sidebar - Brief Updates */}
            <Suspense fallback={<LoadingSpinner />}>
              <NewsSidebar />
            </Suspense>

            {/* Education Section - Project Style Cards */}
            <Suspense fallback={<LoadingSpinner />}>
              <EducationSection />
            </Suspense>

            {/* Contact Section - Telegraph Office */}
            <Suspense fallback={<LoadingSpinner />}>
              <ContactSection />
            </Suspense>

            {/* Projects Section - Feature Stories */}
            <Suspense fallback={<LoadingSpinner />}>
              <ProjectsSection />
            </Suspense>

          </main>

          {/* Enhanced Newspaper Footer */}
          <NewspaperFooter />

        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
