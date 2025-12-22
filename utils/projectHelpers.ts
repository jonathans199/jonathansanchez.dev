import { uid } from 'uid'

export interface ProjectData {
  slug: string
  img: string
  title: string
  description: string
  fullDescription?: string
  tech: string
  techStack?: string[]
  features?: string[]
  github?: string
  live?: string
  ios?: string
  private?: boolean
  year?: string
  category?: string
  screenshots?: string[]
}

/**
 * Helper function to create a new project object with proper structure
 * @param projectData - The project data without id (id will be auto-generated)
 * @returns Complete project object with generated id
 */
export function createProject(projectData: ProjectData) {
  return {
    id: uid(16),
    ...projectData,
  }
}

/**
 * Helper function to generate a URL-friendly slug from a title
 * @param title - The project title
 * @returns URL-friendly slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
}

/**
 * Example of how to add a new project:
 * 
 * const newProject = createProject({
 *   slug: 'my-awesome-app',
 *   img: '/img/my-awesome-app.png',
 *   title: 'My Awesome App',
 *   description: 'A brief description of what the app does',
 *   fullDescription: 'A detailed description with more context about the project, its goals, and implementation details.',
 *   tech: 'React Native | Node.js | MongoDB',
 *   techStack: ['React Native', 'Node.js', 'MongoDB', 'Express.js'],
 *   features: ['User Authentication', 'Real-time Updates', 'Push Notifications'],
 *   github: 'https://github.com/username/repo',
 *   live: 'https://myawesomeapp.com',
 *   ios: 'https://apps.apple.com/app/my-awesome-app/id123456789',
 *   year: '2024',
 *   category: 'Mobile App'
 * })
 * 
 * Then add it to the projects array in data/projects.js
 */

export const projectCategories = [
  'Mobile App',
  'Web Application',
  'Desktop App',
  'API/Backend',
  'Library/Package',
  'Website',
  'E-commerce',
  'Dashboard',
  'Game',
  'Other'
] as const

export type ProjectCategory = typeof projectCategories[number]
