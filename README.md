# NoteHub

![NoteHub Preview](./public/readme.jpg)

A modern Next.js notes application with authentication, public/private route separation, client state management via Zustand, API routes, and dark/light theme support.

## Important

- The current UI is desktop-oriented (desktop version only).

## Key Features

- User registration, login, logout, and session validation.
- Public routes for unauthenticated users: `sign-in`, `sign-up`.
- Private area after login: notes and profile management.
- Notes list view with pagination, filtering, and search.
- Note creation, note details, and modal preview for quick viewing.
- Profile page and profile editing.
- Dark/light theme switch.
- Client requests via Axios with caching/sync via TanStack Query.
- Local global state via Zustand.

## Public and Private Sections

### Public Routes

- `/(auth routes)/sign-in`
- `/(auth routes)/sign-up`

These routes are intended for user authentication.

### Private Routes

- `/(private routes)/notes`
- `/(private routes)/notes/action/create`
- `/(private routes)/notes/[id]`
- `/(private routes)/profile`
- `/(private routes)/profile/edit`

These routes are accessible only after successful authentication.

## Authentication

The project includes the following auth API endpoints:

- `POST /api/auth/register` - register.
- `POST /api/auth/login` - login.
- `POST /api/auth/logout` - logout.
- `GET /api/auth/session` - check current session.

User endpoint:

- `GET /api/users/me` - get current user profile.

## Notes API

- `GET /api/notes` - get notes list.
- `POST /api/notes` - create a note.
- `GET /api/notes/:id` - get note details.
- `PATCH /api/notes/:id` - update a note.
- `DELETE /api/notes/:id` - delete a note.

## Tech Stack

### Core

- Next.js `16.2.1`
- React `19.2.4`
- TypeScript `^5`

### State and Data Layer

- Zustand `^5.0.12`
- @tanstack/react-query `^5.95.2`
- Axios `^1.13.6`

### Forms and Validation

- Formik `^2.4.9`
- Yup `^1.7.1`

### UI/UX and Animation

- GSAP `^3.14.2`
- Lenis `^1.3.21`
- Lottie React `^2.4.1`
- React Hot Toast `^2.6.0`
- React Icons `^5.6.0`
- React Spinners `^0.17.0`
- React Paginate `^8.3.0`
- use-debounce `^10.1.0`

### Styling and Quality

- CSS Modules
- Tailwind CSS `^4`
- ESLint `^9`

## Architecture (High Level)

- `app/` - App Router, pages, layouts, route groups, modal routes.
- `app/api/` - server API routes.
- `components/` - reusable UI components.
- `lib/api/` - API client and helper methods.
- `lib/store/` - Zustand stores (`authStore`, `noteStore`).
- `types/` - domain types (`note`, `user`).

## Dark/Light Theme

The project includes a Theme Provider and store-based theme control. Users can switch between dark and light mode, and the UI adapts accordingly.
