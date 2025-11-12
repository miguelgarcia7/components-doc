# Component Documentation Site

A modern, professional documentation website built with Next.js 16, TypeScript, and Tailwind CSS v4 - inspired by shadcn/ui.

## Features

### Core Features
-  **Modern Stack**: Next.js 16, TypeScript, Tailwind CSS v4
-  **MDX Support**: Write documentation in Markdown with React components
-  **Syntax Highlighting**: Beautiful code blocks with react-syntax-highlighter
-  **Dark Mode**: Full dark mode support with theme toggle
-  **Responsive Design**: Mobile-first, fully responsive layout
-  **Component Previews**: Live component demos with copy-to-clipboard
-  **Search Functionality**: Keyboard shortcut (⌘K/Ctrl+K) search modal
-  **Table of Contents**: Auto-generated TOC with active section highlighting
-  **Breadcrumb Navigation**: Clear page hierarchy navigation
-  **Mobile Navigation**: Slide-out menu for mobile devices
-  **Smooth Animations**: Polished transitions and hover effects
-  **SEO Optimized**: Proper meta tags, Open Graph, and Twitter cards

### Documentation Features
- MDX-powered documentation pages
- Code syntax highlighting
- Component preview with show/hide code
- Copy code to clipboard
- Auto-generated heading IDs for anchor links
- Responsive table of contents

## Project Structure
```
my-component-docs/
├── src/
│   ├── app/
│   │   ├── docs/
│   │   │   ├── components/
│   │   │   │   └── page.mdx          # Components documentation
│   │   │   ├── installation/
│   │   │   │   └── page.mdx          # Installation guide
│   │   │   ├── layout.tsx            # Docs layout with sidebar & TOC
│   │   │   └── page.tsx              # Docs homepage
│   │   ├── globals.css               # Global styles & Tailwind
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Homepage
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx            # Button component
│   │   ├── breadcrumb.tsx            # Breadcrumb navigation
│   │   ├── code-block.tsx            # Syntax highlighted code
│   │   ├── component-preview.tsx     # Component preview container
│   │   ├── footer.tsx                # Site footer
│   │   ├── header.tsx                # Site header
│   │   ├── mobile-nav.tsx            # Mobile navigation
│   │   ├── search.tsx                # Search modal
│   │   ├── theme-provider.tsx        # Dark mode provider
│   │   ├── theme-toggle.tsx          # Dark mode toggle
│   │   └── toc.tsx                   # Table of contents
│   └── mdx-components.tsx            # MDX component mappings
├── public/                           # Static assets
├── next.config.ts                    # Next.js configuration
├── package.json                      # Dependencies
├── postcss.config.mjs                # PostCSS config
└── tsconfig.json                     # TypeScript config
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX for documentation
- **Syntax Highlighting**: react-syntax-highlighter
- **Dark Mode**: next-themes
- **Icons**: SVG icons (inline)

## Key Dependencies
```json
{
  "next": "^16.0.1",
  "react": "^19.x",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "@next/mdx": "latest",
  "@mdx-js/react": "latest",
  "next-themes": "latest",
  "react-syntax-highlighter": "latest"
}
```

## Customization Guide

### Adding New Documentation Pages

1. Create a new `.mdx` file in `src/app/docs/your-page/page.mdx`
2. Add the page to the sidebar in `src/app/docs/layout.tsx`
3. Add to search data in `src/components/search.tsx`

### Adding New Components

1. Create component in `src/components/ui/your-component.tsx`
2. Document it in MDX using `<ComponentPreview>`
3. Import the component in your MDX file

Example:
```mdx
import { YourComponent } from '@/components/ui/your-component';

<ComponentPreview code={`...`}>
  <YourComponent />
</ComponentPreview>
```

### Styling with Tailwind v4

This project uses Tailwind CSS v4. Key points:
- No config file needed for most cases
- Dark mode uses `@custom-variant dark (&:where(.dark, .dark *));`
- Use standard utility classes
- Custom animations in `globals.css`

### Customizing Colors

Update the theme in `src/app/globals.css`:
```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Writing Documentation

### Basic MDX Page
```mdx
# Page Title

Introduction paragraph.

## Section

Content here.

\`\`\`tsx
// Code example
const example = "code";
\`\`\`
```

### Component Preview
```mdx
import { Button } from '@/components/ui/button';

<ComponentPreview code={`import { Button } from '@/components/ui/button';

export default function Example() {
  return <Button>Click me</Button>;
}`}>
  <Button>Click me</Button>
</ComponentPreview>
```

## Next Steps & Improvements

### Content
- [ ] Add more component examples (Input, Card, Dialog, etc.)
- [ ] Write comprehensive getting started guide
- [ ] Add API reference documentation
- [ ] Create examples page
- [ ] Add troubleshooting guide

### Features
- [ ] Add fulltext search (Algolia or similar)
- [ ] Add component variations/themes
- [ ] Add accessibility documentation
- [ ] Add keyboard shortcuts guide
- [ ] Add version selector
- [ ] Add changelog page
- [ ] Add CLI tool for component installation

### Performance
- [ ] Add image optimization
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Add analytics (Vercel Analytics, Google Analytics)
- [ ] Add search analytics

### SEO
- [ ] Generate sitemap.xml dynamically
- [ ] Add structured data (JSON-LD)
- [ ] Create proper OG images for each page
- [ ] Add meta descriptions for all pages

### Developer Experience
- [ ] Add Prettier configuration
- [ ] Add ESLint rules
- [ ] Add Husky pre-commit hooks
- [ ] Add component testing (Jest/React Testing Library)
- [ ] Add E2E testing (Playwright)

### Deployment
- [ ] Deploy to Vercel/Netlify
- [ ] Set up custom domain
- [ ] Configure environment variables
- [ ] Set up CI/CD pipeline

## 📄 License

MIT License - feel free to use this for your own projects!

## 🙏 Credits

Inspired by [shadcn/ui](https://ui.shadcn.com) documentation design.