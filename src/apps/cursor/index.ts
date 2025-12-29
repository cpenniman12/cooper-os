import { BaseApp } from "../base/types";
import { CursorComponent } from "./components/CursorComponent";

export const appMetadata = {
  name: "Cursor",
  version: "1.0.0",
  creator: { name: "Cooper Penniman", url: "https://cpenniman12.github.io/Cooper-Penniman-CV/" },
  github: "https://github.com/cpenniman12/cooper-os",
  icon: "/icons/default/cursor.png",
};

export const helpItems = [
  { icon: "💻", title: "AI-Powered IDE", description: "Code with AI assistance" },
  { icon: "🤖", title: "Chat with Code", description: "Ask questions about your codebase" },
  { icon: "⚡", title: "Fast Editing", description: "Edit code with AI suggestions" },
];

export const CursorApp: BaseApp = {
  id: "cursor",
  name: "Cursor",
  icon: { type: "image", src: "/icons/default/cursor.png" },
  description: "AI-powered code editor",
  component: CursorComponent,
  helpItems,
  metadata: appMetadata,
};
