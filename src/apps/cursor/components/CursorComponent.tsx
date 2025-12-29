import { WindowFrame } from "@/components/layout/WindowFrame";
import { AppProps } from "../../base/types";

interface Project {
  name: string;
  path?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const weekendProjects: Project[] = [
  {
    name: "oura-daily-email",
    path: "~",
    githubUrl: "https://github.com/cpenniman12/oura-daily-email"
  },
  {
    name: "ai-news-podcast",
    path: "~",
    liveUrl: "https://ai-news-podcast-pqct.onrender.com",
    githubUrl: "https://github.com/cpenniman12/ai-news-podcast"
  },
  {
    name: "nl2sql-mcp-server",
    path: "~",
    githubUrl: "https://github.com/cpenniman12/postgres"
  },
  {
    name: "habits",
    path: "~",
    liveUrl: "https://habits-y979.onrender.com",
    githubUrl: "https://github.com/cpenniman12/habits"
  },
  {
    name: "flight-data-chatbot",
    path: "~",
    liveUrl: "https://flight-data-chatbot.onrender.com",
    githubUrl: "https://github.com/cpenniman12/flight-data-chatbot"
  }
];

export function CursorComponent({
  isWindowOpen,
  onClose,
  isForeground,
  instanceId,
}: AppProps) {
  if (!isWindowOpen) return null;

  return (
    <WindowFrame
      title="Cursor"
      onClose={onClose}
      isForeground={isForeground}
      appId="cursor"
      instanceId={instanceId}
    >
      <div className="h-full bg-[#1e1e1e] text-white overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col items-center pt-20 pb-12">
          <div className="w-14 h-14 mb-3">
            <img
              src="/icons/default/cursor.png"
              alt="Cursor"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-semibold tracking-wide mb-1">CURSOR</h1>
          <p className="text-sm text-gray-500">Pro • Settings</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 px-8 mb-16">
          <button className="flex flex-col items-center justify-center gap-2 w-36 h-20 bg-[#2a2a2a] hover:bg-[#333333] rounded-md transition-colors">
            <div className="text-xl">📁</div>
            <span className="text-sm text-gray-300">Open project</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 w-36 h-20 bg-[#2a2a2a] hover:bg-[#333333] rounded-md transition-colors">
            <div className="text-xl">📋</div>
            <span className="text-sm text-gray-300">Clone repo</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 w-36 h-20 bg-[#2a2a2a] hover:bg-[#333333] rounded-md transition-colors">
            <div className="text-xl">🔌</div>
            <span className="text-sm text-gray-300">Connect via SSH</span>
          </button>
        </div>

        {/* Recent Projects */}
        <div className="px-12 pb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm text-gray-400">Recent projects</h2>
            <a
              href="https://github.com/cpenniman12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              + more (including this site)
            </a>
          </div>

          <div className="space-y-0">
            {weekendProjects.map((project, index) => (
              <div
                key={index}
                className="group flex items-center justify-between py-2 hover:bg-[#2a2a2a] px-2 -mx-2 rounded transition-colors cursor-pointer"
              >
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <span className="text-sm text-gray-300">{project.name}</span>
                  <span className="text-sm text-gray-500 ml-4">{project.path}</span>
                </div>
                <div className="flex items-center gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded transition-colors whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 text-xs bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded transition-colors whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
