# 🛍️ Gadget Heaven - Your Ultimate Tech Accessories Store

![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css)

> 🚀 A modern, responsive e-commerce platform for cutting-edge gadgets and tech accessories. Built with React and styled with TailwindCSS for a seamless shopping experience.

## 🌐 Live Website

**[🔗 Visit Gadget Heaven](https://gadget-heaven-ass-08.netlify.app/)**

## ⚛️ React Fundamental Concepts Used

### 🎯 Core React Concepts
- **Components & JSX**: Modular component architecture with reusable UI components
- **Props & State Management**: Dynamic data flow between parent and child components
- **Hooks**: 
  - `useState` for local component state management
  - `useEffect` for side effects and lifecycle management
  - `useParams` for dynamic routing
  - `useSearchParams` for URL parameter handling
- **Event Handling**: Interactive user interactions with onClick, onChange events
- **Conditional Rendering**: Dynamic UI based on state and conditions
- **List Rendering**: Mapping through arrays to render dynamic content

### 🛣️ Routing & Navigation
- **React Router DOM**: Client-side routing with nested routes
- **Dynamic Routes**: Product detail pages with slug-based routing
- **Navigation Guards**: Protected routes and error boundaries

### 🎨 UI/UX Concepts
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Component Composition**: Building complex UIs from simple components
- **State Lifting**: Sharing state between components when needed

## 💾 Data Management & Storage

### 🔐 Local Storage Implementation
- **react-secure-storage**: Secure client-side data persistence
- **Cart Management**: 
  - Add/remove items from cart
  - Persistent cart data across sessions
  - Cart item validation and error handling
- **Wishlist Management**:
  - Add/remove items from wishlist
  - Persistent wishlist data
  - Move items between cart and wishlist
- **Data Validation**: Error handling for corrupted localStorage data
- **JSON Serialization**: Proper data formatting for storage and retrieval

### 📊 Data Flow
```
User Action → Component State → Local Storage → UI Update
```

## ✨ 5 Key Features

### 🛒 1. Smart Shopping Cart
- **Persistent Cart**: Items remain in cart across browser sessions
- **Real-time Updates**: Instant cart updates with toast notifications
- **Price Sorting**: Sort cart items by price for better organization
- **Purchase Simulation**: Complete checkout flow with success confirmation
- **Item Management**: Easy add/remove functionality with visual feedback

### 💝 2. Wishlist Management
- **Personal Wishlist**: Save favorite products for later
- **Cross-functionality**: Move items between cart and wishlist seamlessly
- **Persistent Storage**: Wishlist items saved across sessions
- **Visual Indicators**: Clear distinction between cart and wishlist items

### 📊 3. Interactive Statistics Dashboard
- **Data Visualization**: Beautiful charts using Recharts library
- **Product Analytics**: Price vs Rating analysis with logarithmic scaling
- **Responsive Charts**: Mobile-friendly chart display
- **Real-time Data**: Dynamic chart updates based on product database

### 🔍 4. Advanced Product Filtering
- **Category-based Filtering**: Browse products by category (headphones, smartphones, laptops, etc.)
- **Dynamic UI**: Interactive category buttons with visual feedback
- **Responsive Grid**: Adaptive product grid layout
- **Search & Browse**: Easy navigation through product categories

### 🎨 5. Modern UI/UX Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Purple Theme**: Consistent brand colors throughout the application
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Error Handling**: Graceful error handling with user-friendly messages
- **Loading States**: Proper loading indicators and state management

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: TailwindCSS 4.1.10
- **Routing**: React Router DOM 7.6.2
- **Charts**: Recharts 2.15.3
- **Storage**: react-secure-storage 1.3.2
- **UI Components**: shadcn/ui (built on Radix UI)
- **Icons**: Lucide React 0.515.0
- **Notifications**: Sonner 2.0.5
- **Alerts**: SweetAlert2 11.22.0
- **Rating**: @smastrom/react-rating 1.5.0

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/learner-of-string/gadget-heaven-ass8.git

# Navigate to project directory
cd gadget-heaven-ass8

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production
```bash
pnpm build
```

## 👨‍💻 Author

**Your Name**
- GitHub: [@learner-of-string](https://github.com/learner-of-string)

---

⭐ Star this repository if you found it helpful! But I think you won't found it helpful for sure🥴
