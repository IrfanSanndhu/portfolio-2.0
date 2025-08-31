# Portfolio 2.0 - React + Firebase Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Firebase. Features dynamic content fetching from Firestore, beautiful animations with Framer Motion, and a light/dark theme toggle.

## ✨ Features

- **Dynamic Content**: All portfolio data is fetched from Firebase Firestore
- **Modern Design**: Clean, minimal design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Animations**: Framer Motion animations throughout the site
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Enable Authentication (if you plan to add admin features later)
   - Get your Firebase config

4. **Configure Firebase**
   - Update `src/config/firebase.ts` with your Firebase configuration
   - Replace the placeholder values with your actual Firebase project details

5. **Set up Firestore Collections**
   Create the following collections in your Firestore database:

   **Collection: `profile`**
   - Document ID: `profile`
   - Fields:
     - `headline` (string)
     - `slogan` (string)
     - `summary` (string)
     - `currentPosition` (string)
     - `aboutMe` (string)
     - `quote` (string)
     - `quoteAuthor` (string)
     - `funFacts` (array of strings)

   **Collection: `projects`**
   - Multiple documents with fields:
     - `projectName` (string)
     - `description` (string)
     - `languagesUsed` (array of strings)
     - `githubLink` (string)
     - `liveLink` (string)
     - `thumbnail` (string)

   **Collection: `skills`**
   - Multiple documents with fields:
     - `title` (string)
     - `skills` (array of strings)

   **Collection: `experiences`**
   - Multiple documents with fields:
     - `company` (string)
     - `role` (string)
     - `duration` (string)
     - `description` (array of strings)

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### Firebase Setup

1. **Get Firebase Config**
   - In Firebase Console, go to Project Settings
   - Scroll down to "Your apps" section
   - Click on the web app icon
   - Copy the config object

2. **Update Configuration**
   ```typescript
   // src/config/firebase.ts
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

### Customization

- **Colors**: Update the color palette in `tailwind.config.js`
- **Content**: Modify the sample data in `src/data/sampleData.ts`
- **Styling**: Customize Tailwind classes in component files
- **Animations**: Adjust Framer Motion animations in components

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Home.tsx        # Home section
│   ├── Projects.tsx    # Projects section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer
│   └── Loading.tsx     # Loading component
├── context/            # React context providers
│   ├── DataContext.tsx # Portfolio data management
│   └── ThemeContext.tsx # Theme management
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── utils/              # Utility functions
│   └── firestore.ts    # Firebase data fetching
├── config/             # Configuration files
│   └── firebase.ts     # Firebase configuration
├── data/               # Sample data
│   └── sampleData.ts   # Sample portfolio data
└── App.tsx             # Main application component
```

## 🎨 Design System

### Color Palette

- **Light Mode**:
  - Background: `#F9FAFB`
  - Primary Text: `#111827`
  - Secondary Text: `#4B5563`
  - Accent: `#3B82F6`
  - Card Background: `#FFFFFF`

- **Dark Mode**:
  - Background: `#111827`
  - Primary Text: `#F9FAFB`
  - Secondary Text: `#9CA3AF`
  - Accent: `#3B82F6`
  - Card Background: `#1F2937`

### Typography

- **Headings**: Inter font, bold weight
- **Body**: Inter font, regular weight
- **Sizes**: Responsive scaling from mobile to desktop

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

## 🔮 Future Enhancements

- [ ] Admin panel for content management
- [ ] Blog section
- [ ] Portfolio analytics
- [ ] Contact form backend integration
- [ ] Image optimization and lazy loading
- [ ] SEO optimization
- [ ] PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the Firebase documentation
2. Review the console for error messages
3. Ensure all dependencies are properly installed
4. Verify your Firebase configuration

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Firebase](https://firebase.google.com/) - Backend services
- [Lucide React](https://lucide.dev/) - Icons
