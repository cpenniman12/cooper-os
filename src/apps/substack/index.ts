import { BaseApp } from "../base/types";
import { SubstackComponent } from "./components/SubstackComponent";

export const appMetadata = {
  name: "Substack Writings",
  version: "1.0.0",
  creator: { name: "Cooper Penniman", url: "https://cpenniman12.github.io/Cooper-Penniman-CV/" },
  github: "https://github.com/cpenniman12/cooper-os",
  icon: "/icons/default/substack.svg",
};

export const helpItems = [
  { icon: "📝", title: "Read Articles", description: "Browse Cooper's latest AI and technology writings" },
  { icon: "🔗", title: "External Links", description: "Click to read full articles on Substack" },
  { icon: "💡", title: "Tech Insights", description: "Explore thoughts on AI, programming, and strategy" },
];

export const SubstackApp: BaseApp = {
  id: "substack",
  name: "Substack Writings",
  icon: { type: "image", src: "/icons/default/substack.svg" },
  description: "Cooper's AI and technology writings",
  component: SubstackComponent,
  helpItems,
  metadata: appMetadata,
};