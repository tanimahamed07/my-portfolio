# Project Structure

This portfolio app follows React best practices with a clean, organized folder structure.

## Directory Structure

```
src/
├── assets/              # Images, icons, and static files
│   ├── react.svg
│   ├── Unknown-2.jpg
│   └── Untitled_design-removebg-preview.png
├── components/          # Reusable UI components
│   └── Navbar.jsx
├── layouts/             # Layout components (page wrappers)
│   └── Root.jsx
├── pages/               # Page-specific components
│   └── Home/
│       ├── Banner.jsx
│       ├── AboutSection.jsx
│       ├── Skills.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── index.js     # Barrel export for cleaner imports
├── routes/              # Routing configuration
│   └── routes.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx             # Application entry point
```

## Folder Naming Conventions

- **components/** - Reusable components used across multiple pages
- **layouts/** - Layout wrappers that define page structure
- **pages/** - Page-specific components organized by route
- **routes/** - React Router configuration
- **assets/** - Static files (images, fonts, etc.)

## Import Examples

```javascript
// Clean imports using barrel exports
import { Banner, AboutSection, Skills } from "../pages/Home";

// Component imports
import Navbar from "../components/Navbar";

// Layout imports
import Root from "../layouts/Root";

// Route configuration
import { router } from "./routes/routes";
```

## What Changed

### Old Structure → New Structure

- `src/component/` → `src/components/` (plural)
- `src/page/` → `src/pages/` (plural)
- `src/layout/` → `src/layouts/` (plural)
- `src/routs/` → `src/routes/` (correct spelling)

### Benefits

- ✅ Follows React community standards
- ✅ Consistent plural naming convention
- ✅ Better organization and scalability
- ✅ Cleaner imports with barrel exports
- ✅ All UI code remains unchanged

## Empty Folders to Remove

You can manually delete these empty folders:

- `src/component/`
- `src/page/`
- `src/layout/`
- `src/routs/`
