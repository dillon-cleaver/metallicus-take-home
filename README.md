# Metallicus Take Home Assignment

A React Native app built with Expo featuring theme toggling, custom fonts, and animated components. This project was created as a take-home assignment to demonstrate mobile development skills and best practices.

## Preview

Scan the QR code below with [Expo Go](https://expo.dev/go) to preview the app:

![Scan to preview](https://qr.expo.dev/eas-update?projectId=602174c5-39cf-4eb5-892d-152032c41822&runtimeVersion=1.0.0&channel=preview)

## Walkthrough Video Demo

Watch a full walkthrough of the app's features and implementation:
[Video Walkthrough](https://youtu.be/nIUWo2EOYUU?si=YPexEGacVb2Rgsbo)

## Technologies

- **React Native** - Mobile framework
- **Expo SDK 54** - Development platform
- **TypeScript** - Type safety
- **React Navigation** - Navigation
- **Fraunces Font** - Custom Google Font
- **EAS Build & Update** - Deployment

## Running the Project

### Prerequisites

- Node.js 18+ installed
- [Expo Go](https://expo.dev/go) app on your iOS or Android device
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dillon-cleaver/metallicus-take-home.git
cd metallicus-take-home
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Scan the QR code with Expo Go:
   - **iOS**: Use the Camera app to scan the QR code
   - **Android**: Use the Expo Go app to scan the QR code

### Development Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start on Android emulator
- `npm run ios` - Start on iOS simulator
- `npm run web` - Start on web browser

## Features

- Light/Dark theme toggle
- Animated button interactions with haptic feedback
- Custom Fraunces Google Font with proper typography
- Random dog image API integration
- Accessibility-first design with proper ARIA labels
- Responsive layout design

## 📂 Project Structure

```
├── App.tsx                 # Root component with navigation & font loading
├── screens/
│   ├── HomeScreen.tsx      # Main screen with theme toggle
│   └── DogScreen.tsx       # Dog image display screen
├── components/
│   ├── AnimatedButton.tsx  # Reusable animated button component
│   └── DogImage.tsx        # Dog image fetcher component
├── hooks/
│   ├── usePressAnimation.ts # Animation hook for press interactions
│   └── useJson.ts          # Data fetching hook
└── constants/
    └── styles.ts           # Theme color constants
```
