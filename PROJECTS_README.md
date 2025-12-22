# Dynamic Projects System

This portfolio now includes a dynamic project system that allows you to easily add new projects and automatically generate individual project pages.

## Features

- **Dynamic Project Pages**: Each project with a `slug` gets its own dedicated page at `/projects/[slug]`
- **Project Grid View**: Browse all projects at `/projects` in a responsive grid layout
- **Enhanced Data Structure**: Support for detailed project information including tech stacks, features, and categories
- **Navigation Integration**: Projects link added to the main navigation menu
- **SEO Optimized**: Each project page has proper meta tags and structured data

## How to Add a New Project

### 1. Basic Method (Manual)

Add a new project object to the `projects` array in `data/projects.js`:

```javascript
{
  id: uid(16),
  slug: 'my-new-project', // URL-friendly identifier
  img: '/img/my-project.png', // Main project screenshot/image
  title: 'My New Project',
  description: 'Brief description for project cards',
  fullDescription: 'Detailed description for the project page',
  tech: 'React | Node.js | MongoDB', // Tech string for display
  techStack: ['React', 'Node.js', 'MongoDB'], // Array for tech pills
  features: ['Feature 1', 'Feature 2', 'Feature 3'], // Key features
  github: 'https://github.com/username/repo', // Optional
  live: 'https://myproject.com', // Optional
  ios: 'https://apps.apple.com/app/id123', // Optional
  private: false, // Set to true if private repo
  year: '2024',
  category: 'Web Application',
  screenshots: [ // Optional - Additional screenshots for gallery
    '/img/my-project-dashboard.png',
    '/img/my-project-mobile.png',
    '/img/my-project-admin.png'
  ]
}
```

### 2. Using Helper Functions

Use the helper functions in `utils/projectHelpers.ts`:

```javascript
import { createProject, generateSlug } from '../utils/projectHelpers'

const newProject = createProject({
  slug: generateSlug('My Awesome New App'), // Auto-generates slug
  img: '/img/my-awesome-app.png',
  title: 'My Awesome New App',
  description: 'Brief description',
  fullDescription: 'Detailed description...',
  tech: 'React Native | Firebase',
  techStack: ['React Native', 'Firebase', 'Redux'],
  features: ['Push Notifications', 'Offline Support'],
  year: '2024',
  category: 'Mobile App'
})
```

## Project Data Structure

### Required Fields
- `id`: Unique identifier (auto-generated with `uid(16)`)
- `slug`: URL-friendly identifier for the project page
- `img`: Path to project image/screenshot
- `title`: Project name
- `description`: Brief description (used in cards and meta tags)

### Optional Fields
- `fullDescription`: Detailed description for project page
- `tech`: Technology string for display
- `techStack`: Array of technologies (creates tech pills)
- `features`: Array of key features
- `github`: GitHub repository URL
- `live`: Live demo/website URL
- `ios`: App Store URL (for mobile apps)
- `private`: Boolean indicating if repo is private
- `year`: Project year
- `category`: Project category (see available categories below)
- `screenshots`: Array of additional screenshot paths for project gallery

### Available Categories
- Mobile App
- Web Application
- Desktop App
- API/Backend
- Library/Package
- Website
- E-commerce
- Dashboard
- Game
- Other

## File Structure

```
src/
├── pages/
│   ├── projects/
│   │   ├── index.tsx          # Projects grid page
│   │   └── [slug].tsx         # Dynamic project pages
│   └── work/
│       └── index.tsx          # Original work page (still functional)
├── components/
│   └── WorkItem.tsx           # Updated with "View Details" button
├── layout/
│   └── Navbar/
│       └── Navbar.tsx         # Updated with Projects link
data/
├── projects.js                # Project data (enhanced structure)
└── packages.js                # Package data (separate)
utils/
└── projectHelpers.ts          # Helper functions for creating projects
```

## URLs and Navigation

- `/projects` - Grid view of all projects
- `/projects/[slug]` - Individual project page (e.g., `/projects/pedals-app`)
- `/work` - Original work page (still available)

The navigation menu now includes a "PROJECTS" link that takes users to the projects grid page.

## Adding Images

### Main Project Image
1. Add the main project image to the `public/img/` directory
2. Reference it in the project data as `/img/filename.png`
3. This image appears on the project cards and as the hero image on the detail page

### Additional Screenshots (Gallery)
1. Add additional screenshots to the `public/img/` directory
2. Add them to the `screenshots` array in the project data:
   ```javascript
   screenshots: [
     '/img/project-dashboard.png',
     '/img/project-mobile-view.png',
     '/img/project-admin-panel.png'
   ]
   ```
3. Screenshots will appear in a responsive gallery on the project detail page
4. Recommended image size: 1200x800px or similar aspect ratio for all images

## SEO and Meta Tags

Each project page automatically generates:
- Page title: `{Project Title} | Jonathan Sanchez Portfolio`
- Meta description from project description
- Proper viewport and favicon tags

## Examples

The following projects have been enhanced with the new structure:
- Pedals App (`/projects/pedals-app`)
- DBenToby Sales App (`/projects/dbentoby-sales-app`)
- Marinera en el Mundo Florida (`/projects/marinera-en-el-mundo-florida`)

## Future Enhancements

Potential improvements you could add:
- Project filtering by category or technology
- Search functionality
- Project tags system
- Related projects section
- Project timeline/chronological view
- Admin interface for managing projects
