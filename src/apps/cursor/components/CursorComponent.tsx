import { WindowFrame } from "@/components/layout/WindowFrame";
import { AppProps } from "../../base/types";

interface Project {
  name: string;
  description: string;
  techStack: string;
  liveUrl?: string;
  githubUrl: string;
}

const weekendProjects: Project[] = [
  {
    name: "Oura Ring/Claude Integration",
    description: "Schedules Oura ring data to be sent via Gmail",
    techStack: "Claude Desktop, Gmail MCP, Oura Ring API, Python",
    githubUrl: "https://github.com/cpenniman12/oura-daily-email"
  },
  {
    name: "Custom Podcast Generator",
    description: "AI tool that retrieves latest AI news and generates personalized podcast episodes",
    techStack: "TypeScript, OpenAI, TTS, Brave Search, Supabase",
    liveUrl: "https://ai-news-podcast-pqct.onrender.com",
    githubUrl: "https://github.com/cpenniman12/ai-news-podcast"
  },
  {
    name: "NL2SQL MCP Server",
    description: "Enable LLMs to query Postgres databases using natural language",
    techStack: "JavaScript, Postgres, Anthropic, Pgvector",
    githubUrl: "https://github.com/cpenniman12/postgres"
  },
  {
    name: "Habits",
    description: "Challenge-tracking app enabling friends to monitor progress on healthy habits",
    techStack: "JS, CSS, EJS, Cron Jobs, Supabase",
    liveUrl: "https://habits-y979.onrender.com",
    githubUrl: "https://github.com/cpenniman12/habits"
  },
  {
    name: "Flight Data Chatbot",
    description: "Natural language interface for querying NYC flight data with visualizations",
    techStack: "Python, JS, HTML, Anthropic, Postgres",
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
        <div className="flex flex-col items-center pt-16 pb-8">
          <div className="w-16 h-16 mb-4">
            <img
              src="/icons/default/cursor.png"
              alt="Cursor"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-wide mb-1">CURSOR</h1>
          <p className="text-sm text-gray-400">Weekend Projects • Cooper Penniman</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 px-8 mb-12">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-md transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm">View All Projects</span>
          </button>
          <a
            href="https://github.com/cpenniman12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#2d2d2d] hover:bg-[#3d3d3d] rounded-md transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">GitHub Profile</span>
          </a>
        </div>

        {/* Recent Projects */}
        <div className="px-8 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-gray-400">Weekend projects</h2>
            <span className="text-xs text-gray-500">({weekendProjects.length})</span>
          </div>

          <div className="space-y-1">
            {weekendProjects.map((project, index) => (
              <div
                key={index}
                className="group flex items-center justify-between px-4 py-3 hover:bg-[#2d2d2d] rounded-md transition-colors cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium truncate">{project.name}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate mb-1">{project.description}</p>
                  <p className="text-xs text-gray-500">{project.techStack}</p>
                </div>
                <div className="flex items-center gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Site
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs bg-[#3d3d3d] hover:bg-[#4d4d4d] rounded transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
