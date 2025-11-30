# 🎯 Bento Dashboard

A modern, professional business dashboard built with React, TypeScript, and Tailwind CSS. Features analytics, revenue tracking, and customer insights with a beautiful, responsive UI.

## ✨ Features

- 📊 **Analytics Dashboard** - Real-time data visualization with interactive charts
- 💰 **Revenue Tracking** - Monitor sales and financial metrics
- 👥 **Customer Management** - Track and manage customer data
- 📦 **Order Management** - View and process orders efficiently
- 🎨 **Modern UI** - Clean, responsive design with shadcn/ui components
- 🌙 **Theme Support** - Built-in dark/light mode theming
- 📱 **Mobile Responsive** - Fully optimized for all screen sizes

## 🚀 Tech Stack

### Core
- ⚛️ **React 18.3.1** - Modern React with hooks and concurrent features
- 📘 **TypeScript 5.8.3** - Type-safe JavaScript
- ⚡ **Vite 5.4.19** - Next-generation frontend build tool

### UI & Styling
- 🎨 **Tailwind CSS 3.4.17** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Re-usable component library built on Radix UI
- 🎭 **Radix UI** - Unstyled, accessible component primitives
- 🔤 **Lucide React** - Beautiful icon library
- 🌈 **class-variance-authority** - CSS variant management
- ✨ **tailwindcss-animate** - Animation utilities

### Data & Forms
- 📊 **Recharts 2.15.4** - Composable charting library
- 📝 **React Hook Form 7.61.1** - Performant form validation
- ✅ **Zod 3.25.76** - TypeScript-first schema validation
- 🔄 **TanStack Query 5.83.0** - Powerful data synchronization

### Routing & Navigation
- 🧭 **React Router DOM 6.30.1** - Declarative routing for React

### Development Tools
- 🔧 **ESLint 9.32.0** - Code linting and quality
- 🎯 **TypeScript ESLint 8.38.0** - TypeScript-specific linting
- 🔥 **Vite Plugin React SWC** - Fast refresh with SWC compiler

## 📁 Project Structure

```
bento-dashboard/
├── 📂 public/
│   └── robots.txt
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 layout/
│   │   │   ├── DashboardLayout.tsx    # Main layout wrapper
│   │   │   ├── Header.tsx             # Top navigation bar
│   │   │   └── Sidebar.tsx            # Side navigation menu
│   │   ├── 📂 ui/                     # shadcn/ui components
│   │   │   ├── AreaChart.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── table.tsx
│   │   │   └── ... (40+ reusable components)
│   │   └── NavLink.tsx                # Custom navigation link
│   ├── 📂 data/
│   │   ├── customersData.ts           # Customer mock data
│   │   ├── mockData.ts                # General mock data
│   │   └── ordersData.ts              # Order mock data
│   ├── 📂 features/
│   │   └── 📂 dashboard/
│   │       ├── ActivityFeed.tsx       # Activity feed component
│   │       ├── DashboardPage.tsx      # Main dashboard view
│   │       └── TransactionTable.tsx   # Transaction display
│   ├── 📂 hooks/
│   │   ├── use-mobile.tsx             # Mobile detection hook
│   │   └── use-toast.ts               # Toast notification hook
│   ├── 📂 lib/
│   │   └── utils.ts                   # Utility functions
│   ├── 📂 pages/
│   │   ├── Analytics.tsx              # Analytics page
│   │   ├── Customers.tsx              # Customers page
│   │   ├── Index.tsx                  # Home/Dashboard page
│   │   ├── NotFound.tsx               # 404 page
│   │   ├── Orders.tsx                 # Orders page
│   │   └── Settings.tsx               # Settings page
│   ├── 📂 types/
│   │   └── index.ts                   # TypeScript type definitions
│   ├── App.tsx                        # Root application component
│   ├── App.css                        # Global styles
│   ├── index.css                      # Tailwind imports
│   ├── main.tsx                       # Application entry point
│   └── vite-env.d.ts                  # Vite type definitions
├── 📄 components.json                 # shadcn/ui configuration
├── 📄 eslint.config.js                # ESLint configuration
├── 📄 index.html                      # HTML entry point
├── 📄 package.json                    # Dependencies and scripts
├── 📄 postcss.config.js               # PostCSS configuration
├── 📄 tailwind.config.ts              # Tailwind CSS configuration
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 tsconfig.app.json               # App-specific TS config
├── 📄 tsconfig.node.json              # Node-specific TS config
└── 📄 vite.config.ts                  # Vite configuration
```

## 🛠️ Installation

### Prerequisites
- 📦 Node.js (v18 or higher)
- 📥 npm or yarn package manager

### Setup

1️⃣ **Clone the repository**
```bash
git clone <repository-url>
cd bento-dashboard
```

2️⃣ **Install dependencies**
```bash
npm install
```

## 📜 Available Scripts

### 🔥 Development
```bash
npm run dev
```
Starts the development server at `http://localhost:8080`
- ⚡ Hot Module Replacement (HMR)
- 🔍 Fast Refresh with SWC

### 🏗️ Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder
- 📦 Minified and bundled
- 🎯 Tree-shaking applied
- ⚡ Optimized assets

### 🏗️ Development Build
```bash
npm run build:dev
```
Creates a development build with source maps

### 👀 Preview
```bash
npm run preview
```
Preview the production build locally
- 🌐 Serves the `dist/` folder
- ✅ Test production build before deployment

### 🔍 Lint
```bash
npm run lint
```
Run ESLint to check code quality
- 🛡️ Enforce code standards
- 🐛 Catch common errors

## 🎨 Customization

### Adding New Components

Add shadcn/ui components:
```bash
npx shadcn-ui@latest add <component-name>
```

### Tailwind Configuration

Customize colors, fonts, and themes in `tailwind.config.ts`

### Path Aliases

The project uses `@/*` for imports:
```typescript
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## 🔧 Configuration Files

- **vite.config.ts** - Vite bundler configuration
- **tailwind.config.ts** - Tailwind CSS customization
- **tsconfig.json** - TypeScript compiler options
- **components.json** - shadcn/ui component configuration
- **eslint.config.js** - Code linting rules

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

---

<div align="center">
  Made with ❤️ using React + TypeScript + Tailwind CSS
</div>