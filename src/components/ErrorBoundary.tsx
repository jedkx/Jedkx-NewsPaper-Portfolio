/**
 * Error Boundary Component - TypeScript Version
 * Production-ready error boundary for graceful error handling
 * @author Caner Coşkun
 * @version 2.0.0
 */

import { Component, ReactNode, ErrorInfo } from 'react';
import type { ErrorInfo as CustomErrorInfo } from '@/types';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

declare const __PROD__: boolean;
declare const __DEV__: boolean;

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Call onError prop if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, log to error reporting service
    const isProduction = process.env.NODE_ENV === 'production';
    if (isProduction) {
      // Track error for analytics - ready for service integration
      try {
        const errorDetails: CustomErrorInfo = {
          message: error.message,
          stack: error.stack || '',
          componentStack: errorInfo.componentStack || '',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        };
        // Future: Send to error tracking service
        console.info('Production error logged:', errorDetails);
      } catch (loggingError) {
        console.error('Failed to log error:', loggingError);
      }
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI with newspaper theme
      return (
        <div className="error-boundary-wrapper newspaper-card">
          <div className="error-boundary-content">
            <div className="article-header">
              <span className="article-category">ERROR</span>
              <span className="article-date">System Notice</span>
            </div>
            
            <h2 className="article-headline">BREAKING: TECHNICAL DIFFICULTIES</h2>
            <div className="byline">System Error Reporter | Emergency Edition</div>
            <div className="article-divider"></div>
            
            <p className="error-message">
              <span className="drop-cap">W</span>e apologize for the technical difficulties. 
              Our newsroom is currently experiencing an unexpected system error. 
              Please refresh the page to continue reading the latest developments 
              in software engineering excellence.
            </p>
            
            <div className="error-actions">
              <button 
                onClick={() => window.location.reload()} 
                className="error-button"
              >
                🔄 Refresh Edition
              </button>
              <button 
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })} 
                className="error-button"
              >
                📰 Continue Reading
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Development Error Details</summary>
                <pre className="error-stack">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            
            <div className="error-footer">
              <p>If this issue persists, please contact our technical support team.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
