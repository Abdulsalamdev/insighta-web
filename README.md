
---

## WEB PORTAL README

```md
# Insighta Web Portal

A secure analytics dashboard for Insighta Labs profile intelligence system.

---

## Features

- GitHub OAuth login
- Secure session cookies (HTTP-only)
- CSRF protection
- Profile filtering dashboard
- Natural language search UI
- Role-based UI rendering

---

## Authentication Flow

1. User logs in via GitHub OAuth
2. Backend issues session cookie
3. Cookie is HTTP-only (not accessible via JS)
4. CSRF token required for mutations

---

## 👥 Roles

### Admin
- Full dashboard access

### Analyst
- Read-only access

---

## Features

- Advanced filtering UI
- Sorting controls
- Pagination UI
- Search bar (natural language input)

---

## Security

- HTTP-only cookies
- CSRF tokens
- Rate limiting
- Secure session handling

---

## Architecture

- Next.js frontend
- Backend API integration
- Secure auth middleware
- State-managed UI (React)

---

##  API Integration

Consumes:

- GET /api/profiles
- GET /api/profiles/search
- GET /api/profiles/export