# Ankit Dhotre - Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and TailwindCSS. Features a clean dark theme with cyan accents.

## 🎨 Features

- **Modern Design**: Clean, professional dark theme with cyan accent colors
- **Fully Responsive**: Optimized for all screen sizes
- **Static Export**: Built for GitHub Pages deployment
- **Fast Performance**: Optimized with Next.js and static generation
- **Sections**: Hero, About, Skills, Projects, and Contact

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

```bash
npm run build
```

This generates a static export in the `out/` folder.

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

**Setup Steps:**

1. Go to your repository settings on GitHub
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Push your code to the main branch
5. The workflow will automatically build and deploy your site
6. Your site will be available at: `https://ankkrypt.github.io/portfolio/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The static files will be in the 'out' folder
# Push the contents to gh-pages branch or upload to your hosting
```

## 🛠 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: GitHub Pages

## 📝 Customization

### Update Personal Information

Edit the following in `app/page.tsx`:

- Personal details (name, tagline, description)
- Social links (GitHub, LinkedIn, Email)
- Skills array
- Projects array

### Change Colors

Modify the color scheme in `app/globals.css`:

```css
:root {
  --cyan-primary: #22d3ee;
  --cyan-secondary: #06b6d4;
  --dark-900: #020617;
  --dark-800: #0f172a;
}
```

### Update Profile Picture

Replace `public/perfectlyCropped.jpg` with your own image (recommended size: 400x400px).

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!

## 🤝 Contact

- **Email**: ankitdhotre21@gmail.com
- **GitHub**: [@ankkrypt](https://github.com/ankkrypt)
- **LinkedIn**: [ankitdhotre](https://linkedin.com/in/ankitdhotre)

---

Built with ❤️ by Ankit Dhotre
