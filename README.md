# Mahmoud Mousa - Frontend Developer Portfolio

This is my personal portfolio website built with React and TypeScript. It showcases my frontend development projects, skills, and professional background. The site includes a full CV page, interactive 3D animations, and professional certifications from Meta/Coursera.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **html2pdf.js** - PDF export functionality

## Features

- **Interactive 3D animations** - Falling papers and floating cards with transform effects
- **Responsive design** - Works great on mobile, tablet, and desktop
- **CV download** - Generate and download CV as PDF directly from the site
- **Professional certifications** - Clickable links to verified Coursera credentials
- **Optimized performance** - Fast load times with code splitting and minification
- **SEO ready** - Meta tags, structured data, and proper semantic HTML
- **Security headers** - Content Security Policy and XSS protection

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. Clone the repo
```bash
git clone https://github.com/MahmoudMousaSharaf/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Start the dev server
```bash
npm run dev
# or
bun run dev
```

The site will be available at `http://localhost:8082`

### Build for production
```bash
npm run build
# or
bun run build
```

This creates an optimized production build in the `dist` folder.

## What I Learned

Working on this portfolio helped me improve my skills in several areas:

- **3D CSS animations** - Learned about transform-style, perspective, and multi-axis rotations
- **Performance optimization** - Reduced bundle size, optimized animations with willChange, and implemented proper code splitting
- **React patterns** - Used hooks effectively, optimized re-renders with useMemo, and structured components properly
- **Responsive design** - Mobile-first approach using Tailwind CSS utilities
- **CV generation** - Figured out how to convert DOM to PDF and handle the complexity of styling for print
- **Git workflow** - Version control, meaningful commits, and deploying to production

The hardest part was making the 3D animations performant without causing lag - lots of trial and error with GPU acceleration and animation timing.

## Deployment

The portfolio is deployed on Netlify at [mahmoud-portfolio.netlify.app](https://mahmoud-portfolio.netlify.app)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Project info

**URL**: https://lovable.dev/projects/649ad01b-078a-48b1-9b34-026082b0a8c8

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/649ad01b-078a-48b1-9b34-026082b0a8c8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/649ad01b-078a-48b1-9b34-026082b0a8c8) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
