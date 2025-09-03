/**
 * About Section Component
 * Lead article about personal information
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { ArticleCard } from '@/components/ui/ArticleCard';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ className = '' }) => {
  const ReadMoreFooter = () => (
    <>
      <a href="#about" className="read-more">Full story ➤</a>
      <div className="article-tags">#Student #FullStack #Innovation #Creative</div>
    </>
  );

  return (
    <ArticleCard
      id="about"
      title="THE RISING STAR OF SOFTWARE ENGINEERING"
      category="ABOUT"
      date="March 27, 2004"
      byline="By Campus Reporter | Atılım University"
      variant="lead"
      href="#about"
      className={className}
      footer={<ReadMoreFooter />}
    >
      <p className="lead-paragraph">
        <span className="drop-cap">C</span>aner Coşkun, a dedicated Software Engineering 
        student at Atılım University who has been making remarkable strides in the tech industry. 
        Currently in his 4th year and expected to graduate in June 2026, this multi-talented developer 
        brings together full-stack development expertise with over 6 years of creative video editing experience.
        He has also gained valuable cybersecurity experience through hands-on research and earned his 
        Fortinet Certified Fundamentals certification.
      </p>
      
      <p className="article-body">
        Currently serving as an intern at Belsis in Ankara, Coşkun works on enterprise applications 
        using cutting-edge technologies including ASP.NET, MVC, JavaScript, and modern frameworks. 
        His work involves developing robust applications while contributing to agile development processes 
        using Jira for project management and participating in technical reviews and design decisions.
      </p>
      
      <p className="article-body">
        Beyond his technical prowess, Coşkun has been serving as a Student Ambassador at Atılım University 
        since September 2023, where he bridges the gap between prospective students and the university. 
        His dual role showcases his exceptional communication skills and leadership qualities that 
        complement his technical abilities.
      </p>
      
      <p className="article-body">
        What sets Coşkun apart is his unique combination of technical skills and creative vision. 
        With 6+ years of experience as a Video Editor for Ssport+ & NFcomtr, he brings a creative 
        perspective to software development. "I believe technology should not only function flawlessly 
        but also provide an aesthetically pleasing and intuitive user experience," he explains.
      </p>
    </ArticleCard>
  );
};
