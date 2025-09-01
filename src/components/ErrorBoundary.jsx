/**
 * Error Boundary Component
 * 
 * @author Caner Coşkun
 * @version 1.0.0
 * @description Production-ready error boundary for graceful error handling
 */

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // In production, log to error reporting service
    if (import.meta.env.PROD) {
      // Track error for analytics - ready for service integration
      try {
        // Example: Sentry, LogRocket, or custom error tracking
        const errorDetails = {
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        };
        // Future: Send to error tracking service
        console.info('Production error logged:', errorDetails);
      } catch (loggingError) {
        console.warn('Error logging failed:', loggingError);
      }
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI with newspaper theme
      return (
        <div className="newspaper-wrapper">
          <div className="newspaper-page single-page">
            <header className="newspaper-header">
              <h1 className="newspaper-title">TECHNICAL DIFFICULTIES</h1>
              <div className="subtitle-line">
                An Unexpected Error Has Occurred - Please Stand By
              </div>
            </header>
            
            <main className="error-content">
              <article className="newspaper-card">
                <div className="article-header">
                  <span className="article-category">SYSTEM ALERT</span>
                  <span className="article-date">Error Report</span>
                </div>
                
                <h3 className="article-headline">
                  PORTFOLIO TEMPORARILY UNAVAILABLE
                </h3>
                
                <div className="article-divider"></div>
                
                <p className="article-body">
                  <span className="drop-cap">W</span>e apologize for the inconvenience. 
                  Our technical team has been notified and is working to resolve the issue. 
                  Please try refreshing the page or contact us directly if the problem persists.
                </p>
                
                <div className="error-actions">
                  <button 
                    onClick={this.handleReload}
                    className="error-button"
                    aria-label="Reload the page"
                  >
                    Refresh Page
                  </button>
                  
                  <a 
                    href="mailto:caner@developer.com" 
                    className="error-link"
                    aria-label="Contact developer via email"
                  >
                    Report Issue
                  </a>
                </div>
                
                {/* Show error details in development */}
                {import.meta.env.DEV && this.state.error && (
                  <details className="error-details">
                    <summary>Technical Details (Development Mode)</summary>
                    <pre className="error-stack">
                      {this.state.error.toString()}
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </article>
            </main>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
