# Technical Guide for Website Creators

This template provides a powerful technical foundation for your website. This guide explains the technology that powers your site and how to customize it to meet your specific needs.

## Technology Stack Overview

### Core Technologies
- **Next.js**: Modern React framework for fast, SEO-friendly websites
- **React**: Component-based UI library for interactive interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **TypeScript**: JavaScript with type safety for more reliable code
- **Radix UI**: Accessible, unstyled UI components
- **Framer Motion & GSAP**: Animation libraries for engaging visual effects

### Why This Stack?
This combination of technologies provides:
- **Performance**: Fast load times and smooth interactions
- **SEO**: Search engine friendly with static generation
- **Accessibility**: Compliant with accessibility standards
- **Maintainability**: Modern code patterns for easier updates
- **Scalability**: Starts simple but can grow with your needs

## How to Customize Your Website

### Customizing Content
Most content is in the `src` directory. Key files to modify:

1. **Pages & Sections**:
   - `src/app/page.tsx`: Main landing page content
   - `src/components/sections/`: Individual page sections

2. **Navigation**:
   - `src/components/nav.tsx`: Site navigation
   - `messages/en.json`: Text content for menu items

### Customizing Colors and Branding

The template uses CSS variables for theming. After researching competitor color schemes, update these in `src/styles/globals.css`:

```css
:root {
  /* Replace these values with your brand colors */
  --color-primary: #3b82f6;    /* Main brand color */
  --color-primary-light: #60a5fa;
  --color-primary-dark: #2563eb;

  --color-secondary: #10b981;  /* Secondary brand color */
  --color-accent: #f59e0b;     /* Accent/highlight color */

  --color-text: #1f2937;       /* Main text color */
  --color-text-light: #6b7280; /* Secondary text color */

  --color-background: #ffffff; /* Background color */
  /* Add more color variables as needed */
}

/* Dark mode colors - update based on your dark mode design */
.dark {
  --color-text: #f3f4f6;
  --color-text-light: #d1d5db;
  --color-background: #1f2937;
  /* Adjust other colors for dark mode */
}
```

The website uses these variables throughout, so making changes here will update your entire site consistently.

### Adding New Sections

To add a new section to your landing page:

1. Create a new component in `src/components/sections/` (copy an existing one as a template)
2. Import it in `src/app/page.tsx`
3. Add it to the page component in the desired order

Example section component structure:
```jsx
export default function NewSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Section Title</h2>
        {/* Section content here */}
      </div>
    </section>
  );
}
```

### Customizing Animations

After analyzing competitor animations, customize yours in the animation components:

1. **Basic Animations**: Use `src/components/animations/fade-in.tsx` for simple effects
2. **Scroll Animations**: Adjust timing and effects in components that use `whileInView`
3. **Advanced Effects**: For complex animations, modify GSAP effects in their respective files

## Implementing Results from Competitor Research

### 1. Apply Design Inspiration

After collecting screenshots and analyzing competitor websites:

1. **Color Schemes**: Update CSS variables in `globals.css` with colors from screenshots
2. **Typography**: Adjust font sizes and weights in `tailwind.config.js`
3. **Layouts**: Reference the layout patterns in the System Patterns documentation

### 2. Implement Common Sections

Based on your competitor analysis, implement these common sections:

1. **Hero Section**: Update `src/components/sections/hero.tsx`
2. **Features**: Customize `src/components/sections/features.tsx`
3. **Testimonials**: Modify `src/components/sections/testimonials.tsx`
4. **CTAs**: Adjust calls-to-action throughout the site

### 3. Match Animation Style

If competitors use subtle animations:
```jsx
// Example of subtle fade animation
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true, margin: "-10%" }}
>
  {/* Content */}
</motion.div>
```

If they use more dynamic animations:
```jsx
// Example of more dynamic animation
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{
    type: "spring",
    damping: 15,
    stiffness: 100
  }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

## Code Generation

### Approach

- Never remove packages from `package.json`
- Never forget about "use client"
- Never fuse next/image use img instead
- Always use `"` for strings in js and ts

## Running & Testing Your Website

### Local Development

```bash
# Start the development server
npm run dev
```

Your site will be available at http://localhost:3000 (or the port you configured).

### Building for Production

```bash
# Create production build
npm run build
```
