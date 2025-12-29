import { BaseApp } from "../base/types";
import { SpotifyComponent } from "./components/SpotifyComponent";

export const appMetadata = {
  name: "Spotify",
  version: "1.0.0",
  creator: { name: "Cooper Penniman", url: "https://cpenniman12.github.io/Cooper-Penniman-CV/" },
  github: "https://github.com/cpenniman12/cooper-os",
  icon: "/icons/default/spotify.svg",
};

export const helpItems = [
  { icon: "🎧", title: "Play Podcasts", description: "Listen to your favorite podcast episodes" },
  { icon: "📚", title: "Browse Library", description: "Explore your podcast collection" },
  { icon: "📻", title: "Discover", description: "Find new podcasts and episodes" },
];

export const SpotifyApp: BaseApp = {
  id: "spotify",
  name: "Spotify",
  icon: { type: "image", src: "/icons/default/spotify.svg" },
  description: "Podcast streaming app",
  component: SpotifyComponent,
  helpItems,
  metadata: appMetadata,
};