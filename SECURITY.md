# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this portfolio project, please send an email to caner@developer.com. All security vulnerabilities will be promptly addressed.

Please include the following information:
- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

## Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Resolution**: Varies based on complexity, typically within 30 days

## Security Measures

This portfolio implements several security measures:

### Frontend Security
- **Content Security Policy**: Prevents XSS attacks
- **HTTPS Enforcement**: All connections secured
- **Secure Headers**: X-Frame-Options, X-Content-Type-Options
- **Input Validation**: All user inputs validated
- **Dependency Scanning**: Regular security audits

### Build Security
- **Dependency Audits**: `npm audit` in CI/CD
- **Vulnerability Scanning**: Automated security checks
- **Code Analysis**: ESLint security rules
- **Supply Chain Security**: Package integrity verification

Thank you for helping keep this project secure!
