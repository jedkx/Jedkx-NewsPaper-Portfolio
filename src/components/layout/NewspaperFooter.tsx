/**
 * Newspaper Footer Component
 * Vintage newspaper footer with publication info
 * @author Caner Coşkun
 * @version 2.0.0
 */

import type { FC } from 'react';
import { newspaperContent } from '@/lib/data';

interface NewspaperFooterProps {
  className?: string;
}

export const NewspaperFooter: FC<NewspaperFooterProps> = ({ className = '' }) => {
  const { footer } = newspaperContent;

  return (
    <footer className={`newspaper-footer ${className}`}>
      <div className="footer-line"></div>
      <div className="footer-content">
        <div className="publisher-info">
          <strong>{footer.publisher}</strong>
        </div>
        <div className="copyright-notice">
          {footer.copyright}
        </div>
        <div className="edition-info">
          {footer.edition}
        </div>
      </div>
      <div className="footer-line"></div>
    </footer>
  );
};
