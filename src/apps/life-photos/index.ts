import { BaseApp } from "../base/types";
import { LifePhotosComponent } from "./components/LifePhotosComponent";

export const appMetadata = {
  name: "Life",
  version: "1.0.0",
  creator: {
    name: "Cooper Penniman",
    url: "https://cpenniman12.github.io/Cooper-Penniman-CV/",
  },
  github: "https://github.com/cpenniman12",
  icon: "/icons/default/photo-booth.png",
};

export const helpItems = [
  {
    icon: "🖼️",
    title: "Viewing Photos",
    description: "Browse through my life photos using the arrow buttons or click the thumbnails at the bottom.",
  },
  {
    icon: "⬅️",
    title: "Navigation",
    description: "Use the left and right arrow buttons to move between photos, or click on a thumbnail to jump directly to that photo.",
  },
  {
    icon: "📝",
    title: "Photo Details",
    description: "Each photo includes a title and description shown below the image.",
  },
];

export const LifePhotosApp: BaseApp = {
  id: "life-photos",
  name: "Life",
  icon: { type: "image", src: "/icons/default/photo-booth.png" },
  description: "Browse through my life photos and memories",
  component: LifePhotosComponent,
  helpItems,
  metadata: appMetadata,
};
