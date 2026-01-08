# 🐾 Furry Futures - Pet Adoption Website

A responsive web application for pet adoption and animal shelter management. Built with React and Vite, featuring a foster parent portal and donation system.

**Built With:** React · Vite · React Router

## ✨ Features

### Public Features
- **Animal Browsing**: Browse available pets with filtering by personality type (cuddly, adventurous, hardworking)
- **Animal Details**: View detailed information including bio, health records, and hobbies
- **Adoption Scheduling**: Schedule meet-and-greet appointments with selected animals
- **Donation System**: Integrated Stripe payment processing for one-time and recurring donations
- **About Page**: Learn about the shelter's mission with an interactive carousel
- **Newsletter Signup**: Subscribe to receive updates from the shelter

### Foster Parent Portal
- **Dashboard**: View placement statistics, volunteer hours, and calendar events
- **Adoptee Management**: Track and manage foster animals in your care
- **Health Records**: Access detailed health information for each adoptee
- **Secure Login**: Protected routes for foster parent access

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.3.0
- **Payment Processing**: Stripe (@stripe/react-stripe-js, @stripe/stripe-js)
- **Carousel**: Embla Carousel React
- **API Mocking**: MirageJS (for development)
- **SVG Support**: vite-plugin-svgr
- **Linting**: ESLint with React plugins

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pet-adoption-site.git
   cd pet-adoption-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
pet-adoption-site/
├── source/
│   ├── assets/           # Fonts, icons, and images
│   ├── components/       # Reusable React components
│   │   ├── AnimalDetails/
│   │   ├── EmblaCarousel/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── FosterParentLayout.jsx
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   │   ├── Animals/
│   │   ├── Donation/
│   │   └── FosterParents/
│   ├── dist/            # Build output
│   ├── index.css        # Global styles
│   ├── index.html       # HTML template
│   ├── index.jsx        # Application entry point
│   └── server.js        # MirageJS mock API server
├── public/              # Static assets
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🔑 Default Login Credentials

**Note**: This is a demo application. For production, implement proper authentication.

- **Email**: `foster@furryfutures.org`
- **Password**: `password`

## 🎨 Key Features Explained

### Animal Filtering
Filter animals by personality type using URL search parameters. The filter state is preserved in the URL, making it shareable.

### Donation System
Integrated Stripe Checkout with support for:
- Preset donation amounts ($20, $30, $40, $50, $100)
- Custom donation amounts
- One-time or monthly recurring donations

### Foster Parent Portal
Protected routes that require authentication to access:
- Dashboard with statistics and calendar
- Adoptee management and tracking
- Health record access

### Responsive Design
Fully responsive layout that works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🧪 API Mocking

This project uses [MirageJS](https://miragejs.com/) to mock API responses during development. The mock server is configured in `source/server.js` and provides:

- `GET /api/animals` - List all animals
- `GET /api/animals/:id` - Get animal by ID
- `GET /api/foster-parent/adoptees` - List foster parent's adoptees
- `GET /api/foster-parent/adoptees/:id` - Get adoptee by ID

## 🎭 Custom Hooks

### `useFadeInOnScroll`
Custom hook for scroll-triggered fade-in animations using Intersection Observer API.

## 🔐 Security Notes

⚠️ **Important**: This is a demonstration application. For production use:

- Replace hardcoded credentials with proper authentication
- Implement secure session management
- Add API authentication middleware
- Use environment variables for sensitive keys
- Implement proper error handling and logging
- Add rate limiting and security headers



