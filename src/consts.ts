import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "HermeticOS",
  DESCRIPTION: "Welcome to Ultimate Privacy OS for You and Yours device.",
  AUTHOR: "Heretics",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hermeticosv@hermeticos.dev",
    HREF: "mailto:hermeticosv@hermeticos.dev",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "hermetic+dev",
    HREF: "https://github.com/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "hermetic-dev",
    HREF: "https://www.linkedin.com/in/hermetic-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "HermeticOS",
    HREF: "https://twitter.com/",
  },
]

