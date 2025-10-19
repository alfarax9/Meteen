# Meteen - Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Menu Management**: Browse menu items with filtering by category and search
- **Team Showcase**: Meet the talented team behind Meteen
- **Contact Form**: Get in touch with direct form submission to Supabase
- **Smooth Animations**: Enhanced UX with Framer Motion animations
- **Database Integration**: Full Supabase integration for data persistence

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Color Palette

- **Primary**: #CB3A1A (Red-Orange)
- **Secondary**: #111111 (Near Black)
- **Paragraph**: #74787C (Gray)
- **White**: #FFFFFF
- **Muted**: #F5F5F5

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (already configured)

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already set up in `.env`:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

4. The database schema has been created with sample data including:
   - Menu items (10 dishes)
   - Team members (4 members)
   - Contact messages table

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   └── Card.tsx
│   ├── layout/          # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── home/            # Home page specific components
│       ├── Hero.tsx
│       └── MenuPreview.tsx
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Team.tsx
│   ├── TeamDetail.tsx
│   └── Contact.tsx
├── lib/                 # Utilities and configurations
│   ├── supabase.ts      # Supabase client and types
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles

```

## Database Schema

### Tables

1. **menu_items**
   - Menu items with categories, prices, and images
   - Public read access via RLS

2. **team_members**
   - Team member profiles with roles and bios
   - Public read access via RLS

3. **contact_messages**
   - Contact form submissions
   - Public insert access via RLS

## Features by Page

### Home Page
- Hero section with CTA buttons
- Featured menu preview (4 items)
- About section with statistics
- Customer testimonials
- Call-to-action section

### Menu Page
- Full menu display with all items
- Category filtering (All, Main, Grill, Snack, Drink, Dessert)
- Search functionality
- Responsive grid layout

### Team Page
- Grid display of all team members
- Hover effects and animations
- Links to individual team member profiles

### Team Detail Page
- Full team member profile
- Biography and contact information
- Social media links
- Back navigation

### Contact Page
- Contact form with validation
- Contact information display
- Google Maps integration
- Form submission to Supabase

## Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Screen reader friendly

## Performance Optimizations

- Lazy loading for images
- Optimized animations
- Efficient state management
- Database query optimization with indexes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2025 Meteen Restaurant
