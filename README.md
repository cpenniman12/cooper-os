# Cooper OS

A personalized fork of [ryOS](https://github.com/ryokun6/ryos) - a web-based desktop environment that recreates classic operating system interfaces with modern web technologies.

**Original Project**: [ryOS by Ryo Lu](https://github.com/ryokun6/ryos)

## 🎯 Project Goals

Cooper OS is a customized version of ryOS, designed to showcase my work, interests, and technical skills through a unique web-based desktop environment. The project demonstrates:

- **Full-stack web development** with modern React ecosystem
- **UI/UX design** through custom app interfaces
- **Personal branding** via integrated Life Photos and professional content
- **Integration capabilities** with third-party services (Spotify, Substack)
- **Creative expression** through a nostalgic yet functional OS interface

## ✅ Current Progress

- ✅ Custom Life Photos gallery app with personal milestones
- ✅ Spotify podcast streaming integration
- ✅ Substack newsletter reader integration
- ✅ Cursor IDE showcase app
- ✅ All apps added to macOS-style dock
- ✅ Fully functional multi-window environment
- 🚧 Future: Add more personal content and integrations

---

## 🚀 Quick Start

```bash
# Install dependencies (requires Node.js)
npm install --legacy-peer-deps --ignore-scripts

# Start development server
npm run dev

# Open in browser (default: http://localhost:5173)
```

## 📦 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Build**: Vite + Bun
- **Storage**: IndexedDB + LocalStorage

---

## 🖼️ Custom Apps Added

### 📸 Life Photos App (`src/apps/life-photos/`)

A photo gallery app showcasing personal life photos and milestones with:
- Smooth slide animations between photos
- Thumbnail navigation strip
- Photo captions with title and description
- Left/right arrow navigation
- Theme-aware menu bar (works with macOS and Windows themes)

**Photos located in**: `public/images/life/`
- `new-york.jpg` - Moving to New York from Boston (Fall 2023)
- `shanghai.jpg` - Shanghai Skyline (December 2024)
- `teals.jpg` - Microsoft TEALS volunteer certificates
- `haiti.jpg` - Teaching computer fundamentals in Haiti

### 🎧 Spotify App (`src/apps/spotify/`)

A podcast streaming app that showcases recent and trending podcast episodes:
- Recently played episodes with metadata
- Trending episodes across popular podcasts
- Clean, modern Spotify-inspired UI
- Responsive layout with episode cards
- Play button integration for each episode

**Features**:
- Browse recently played podcasts
- Discover trending episodes
- Episode metadata display (title, show, date)

### 📰 Substack App (`src/apps/substack/`)

A newsletter reader integration for browsing Substack content:
- Clean reading interface
- Newsletter discovery
- Article browsing capabilities
- Modern, minimalist design

### 💻 Cursor App (`src/apps/cursor/`)

A showcase app for the Cursor AI-powered code editor:
- Beautiful gradient UI with Cursor branding
- Feature highlights (AI-Powered Editing, Chat with Code, Lightning Fast)
- Direct links to cursor.sh for downloads
- Informative landing page design

**Features**:
- AI-powered code editing information
- Link to download Cursor IDE
- Feature breakdown with icons

---

## 📁 Project Structure

```
cooper-os/
├── public/
│   ├── icons/
│   │   └── default/     # App icons
│   │       ├── cursor.png    # Cursor IDE icon
│   │       ├── spotify.svg   # Spotify icon
│   │       └── substack.svg  # Substack icon
│   └── images/
│       └── life/        # Life photos gallery images
├── src/
│   ├── apps/            # Individual app implementations
│   │   ├── life-photos/ # ⭐ Custom Life Photos app
│   │   │   ├── components/
│   │   │   │   ├── LifePhotosComponent.tsx  # Main gallery component
│   │   │   │   └── LifePhotosMenuBar.tsx    # Menu bar
│   │   │   └── index.ts                      # App metadata & exports
│   │   ├── spotify/     # ⭐ Custom Spotify podcast app
│   │   │   ├── components/
│   │   │   │   └── SpotifyComponent.tsx     # Podcast UI
│   │   │   └── index.ts
│   │   ├── substack/    # ⭐ Custom Substack reader app
│   │   │   ├── components/
│   │   │   │   └── SubstackComponent.tsx    # Newsletter UI
│   │   │   └── index.ts
│   │   ├── cursor/      # ⭐ Custom Cursor showcase app
│   │   │   ├── components/
│   │   │   │   └── CursorComponent.tsx      # Cursor IDE info
│   │   │   └── index.ts
│   │   ├── finder/      # File browser
│   │   ├── photo-booth/ # Camera app
│   │   └── ...          # Other built-in apps
│   ├── components/      # Shared UI components
│   ├── config/
│   │   ├── appIds.ts    # App ID registry
│   │   └── appRegistry.tsx # App registration & window configs
│   ├── stores/
│   │   └── useDockStore.ts  # Dock state management
│   └── ...
└── package.json
```

---

## 🛠️ Adding a New App

### Step 1: Create App Directory
```bash
mkdir -p src/apps/your-app/components
```

### Step 2: Create Required Files

**`src/apps/your-app/index.ts`** - App metadata:
```typescript
import { BaseApp } from "../base/types";
import { YourAppComponent } from "./components/YourAppComponent";

export const appMetadata = {
  name: "Your App",
  version: "1.0.0",
  creator: { name: "Your Name", url: "https://example.com" },
  github: "https://github.com/you/repo",
  icon: "/icons/default/your-icon.png",
};

export const helpItems = [
  { icon: "📖", title: "Help Title", description: "Help description" },
];

export const YourApp: BaseApp = {
  id: "your-app",
  name: "Your App",
  icon: { type: "image", src: "/icons/default/your-icon.png" },
  description: "App description",
  component: YourAppComponent,
  helpItems,
  metadata: appMetadata,
};
```

**`src/apps/your-app/components/YourAppComponent.tsx`** - Main component:
```typescript
import { useState } from "react";
import { WindowFrame } from "@/components/layout/WindowFrame";
import { AppProps } from "../../base/types";

export function YourAppComponent({
  isWindowOpen,
  onClose,
  isForeground,
  instanceId,
}: AppProps) {
  if (!isWindowOpen) return null;

  return (
    <WindowFrame
      title="Your App"
      onClose={onClose}
      isForeground={isForeground}
      appId="your-app"
      instanceId={instanceId}
    >
      <div className="p-4">
        {/* Your app content here */}
      </div>
    </WindowFrame>
  );
}
```

### Step 3: Register the App

**`src/config/appIds.ts`** - Add app ID:
```typescript
export const appIds = [
  // ... existing apps
  "your-app",  // Add this
] as const;
```

**`src/apps/base/types.ts`** - Add to type union:
```typescript
export interface BaseApp<TInitialData = unknown> {
  id:
    | "soundboard"
    // ... existing IDs
    | "your-app";  // Add this
  // ...
}
```

**`src/config/appRegistry.tsx`** - Register component:
```typescript
// Add lazy loader
const LazyYourApp = createLazyComponent<unknown>(
  () => import("@/apps/your-app/components/YourAppComponent").then(m => ({ default: m.YourAppComponent })),
  "your-app"
);

// Add metadata import
import { appMetadata as yourappMetadata, helpItems as yourappHelpItems } from "@/apps/your-app";

// Add to registry object
["your-app"]: {
  id: "your-app",
  name: "Your App",
  icon: { type: "image", src: yourappMetadata.icon },
  description: "Your app description",
  component: LazyYourApp,
  helpItems: yourappHelpItems,
  metadata: yourappMetadata,
  windowConfig: {
    defaultSize: { width: 600, height: 400 },
    minSize: { width: 300, height: 200 },
  } as WindowConstraints,
},
```

---

## 🎨 Themes

The OS supports multiple themes:
- **macOS X** (default) - Modern Mac aesthetics
- **System 7** - Classic Mac OS look
- **Windows XP** - XP-style taskbar and Start menu
- **Windows 98** - Retro Windows experience

Theme-aware components use `useThemeStore` to adjust rendering.

---

## 📝 Key Files Reference

| File | Purpose |
|------|---------|
| `src/config/appIds.ts` | Add new app ID to the array |
| `src/apps/base/types.ts` | Add app ID to `BaseApp.id` union type |
| `src/config/appRegistry.tsx` | Register app component, metadata, window config |
| `public/images/life/` | Life Photos gallery images |
| `src/apps/life-photos/components/LifePhotosComponent.tsx` | Edit photo data array |

---

## 🔗 Credits

- **Original ryOS**: [Ryo Lu](https://ryo.lu) - [GitHub](https://github.com/ryokun6/ryos) | [Live Demo](https://os.ryo.lu)
- **Customization**: Cooper Penniman - [Website](https://cpenniman12.github.io/Cooper-Penniman-CV/)

## 📄 License

AGPL-3.0 — See [LICENSE](LICENSE) for details.
