## Project Overview

This project is a plumbing service management application built with modern web technologies. It allows users to book plumbing services, manage appointments, and process payments seamlessly. The application is designed to be user-friendly and efficient, catering to both customers and service providers.

## Architecture & Key Patterns

### Content Management

- **Service pages**: Defined in \`src/content/services/\*.md\` with frontmatter schema including \`title\`, \`description\`, \`price\`, \`image\`, \`tags\`, \`featured\`, \`category\`
- **Content collections**: Configured in \`src/content/config.ts\` - use \`getCollection('services')\` to fetch all services
- **Dynamic routing**: Service pages use \`[slug].astro\` pattern in \`src/pages/services/\` with \`getStaticPaths()\`

### Layout System

- **BaseLayout**: Primary wrapper (\`src/layouts/BaseLayout.astro\`) - includes Header, Footer, and global styles
- **ServicesLayout**: Specialized layout for service content pages with hero sections
- **Page composition**: Most pages follow Hero → LogoCloud → Services → Prices → FAQ → Testimonials → Contact pattern

### Component Architecture

- **Foundations**: Reusable primitives in \`src/components/fundations/\` (Text, containers, head components)
- **Global**: Site-wide components (Header, Footer, TestimonialsCard)
- **Home**: Homepage-specific components (Hero, Services, FAQ)
- **Services**: Service page components (ServiceHeroSection, ServiceFeaturesList, ServiceProcessSteps, etc.)

### Styling System

- **Color usage**: Use \`[--color-primary-600]\` syntax in Tailwind classes, not direct color names
- **Typography**: Poppins font for headings, Inconsolata fonts for body text
- **Component styling**: Mix of Tailwind utility classes and CSS custom properties

### Service Page Structure

Service pages automatically render:

1. ServiceHeroSection (title, description, image, CTA)
2. ServiceFeaturesList (if \`features\` array in frontmatter)
3. ServiceProcessSteps (if \`steps\` array in frontmatter)
4. Testimonials (global component)
5. ServiceFaqList (if \`questions\` array in frontmatter)
6. ServiceCallToAction
7. RelatedServicesList (auto-filtered by category)

### Development Commands

\`\`\`bash
npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
npm run astro # Access Astro CLI
\`\`\`

### Key File Patterns

- **Icons**: Use Lucide icons imported from \`@lucide/astro\`
- **Images**: Store in \`src/images/\` with organized subdirectories (brands, lavori, etc.)
- **SEO**: Managed via \`@astrolib/seo\` and custom Schema.astro component
- **Contact info**: Hardcoded phone numbers (01273 123 456), Brighton location references

### Content Frontmatter Schema

\`\`\`yaml
title: \"Service Name\"
description: \"Brief description\"
price: 0 # Starting price or 0 for quote-based
image: \"/path/to/image.jpg\"
tags: [\"tag1\", \"tag2\"]
featured: true/false
category: \"category-name\"
features:

- title: \"Feature Name\"
  description: \"Feature description\"
  steps:
- title: \"Step Name\"
  description: \"Step description\"
  questions:
- question: \"FAQ Question\"
  answer: \"FAQ Answer\"
  \`\`\`

### Common Patterns

- **Service filtering**: Use \`filter()\` methods on service collections for related services, featured services, etc.
- **Color theming**: Consistent use of primary blue color scheme throughout
- **Responsive design**: Mobile-first approach with \`sm:\`, \`md:\`, \`lg:\` breakpoints
- **Contact CTAs**: Every service page should include contact information and booking CTAs

### Important Conventions

- Use semantic HTML with proper ARIA labels
- Maintain consistent spacing with Tailwind's spacing scale
- Include alt text for all images
- Use TypeScript for all new components
- Follow existing component prop patterns for consistency" > .github/copilot-instructions.md
