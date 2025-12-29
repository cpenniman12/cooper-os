import { useState } from "react";
import { WindowFrame } from "@/components/layout/WindowFrame";
import { AppProps } from "../../base/types";

interface PodcastEpisode {
  id: string;
  title: string;
  podcast: string;
  duration: string;
  description: string;
  releaseDate: string;
}

const SAMPLE_EPISODES: PodcastEpisode[] = [
  {
    id: "e1",
    title: "#2054 - Elon Musk",
    podcast: "The Joe Rogan Experience",
    duration: "2:45:30",
    description: "Elon Musk discusses SpaceX, Tesla, Neuralink, and the future of humanity",
    releaseDate: "Dec 20, 2024"
  },
  {
    id: "e2",
    title: "Episode 12: What We Inherit",
    podcast: "Serial",
    duration: "45:22",
    description: "The final episode of Season 4 explores generational trauma and justice",
    releaseDate: "Dec 18, 2024"
  },
  {
    id: "e3",
    title: "How to build your creative confidence",
    podcast: "TED Talks Daily",
    duration: "18:45",
    description: "David Kelley talks about rediscovering your creative spark",
    releaseDate: "Dec 15, 2024"
  },
  {
    id: "e4",
    title: "Blueprint for Armageddon VI",
    podcast: "Hardcore History",
    duration: "4:12:15",
    description: "Dan Carlin concludes his epic WWI series with the final brutal years",
    releaseDate: "Dec 10, 2024"
  },
  {
    id: "e5",
    title: "The Algorithm That Runs Everything",
    podcast: "Lex Fridman Podcast",
    duration: "1:58:42",
    description: "Deep dive into machine learning algorithms that power modern tech",
    releaseDate: "Dec 8, 2024"
  },
  {
    id: "e6",
    title: "The Rise and Fall of Crypto Empires",
    podcast: "Planet Money",
    duration: "32:15",
    description: "How cryptocurrency markets created and destroyed billions in wealth",
    releaseDate: "Dec 5, 2024"
  },
  {
    id: "e7",
    title: "Building the Perfect Team",
    podcast: "How I Built This",
    duration: "52:18",
    description: "Reid Hoffman discusses team dynamics at LinkedIn and PayPal",
    releaseDate: "Dec 1, 2024"
  },
  {
    id: "e8",
    title: "The Science of Sleep Optimization",
    podcast: "Huberman Lab",
    duration: "1:24:33",
    description: "Dr. Andrew Huberman breaks down the latest sleep research",
    releaseDate: "Nov 28, 2024"
  }
];

export function SpotifyComponent({
  isWindowOpen,
  onClose,
  isForeground,
  instanceId,
}: AppProps) {
  const [currentView, setCurrentView] = useState<'home' | 'episodes' | 'shows'>('home');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<PodcastEpisode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isWindowOpen) return null;

  const handlePlay = (episode: PodcastEpisode) => {
    setCurrentlyPlaying(episode);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const formatDuration = (duration: string) => {
    return duration;
  };

  return (
    <WindowFrame
      title="Spotify"
      onClose={onClose}
      isForeground={isForeground}
      appId="spotify"
      instanceId={instanceId}
    >
      <div className="h-full w-full bg-black text-white flex flex-col">
        {/* Top Navigation */}
        <div className="flex bg-gray-900 border-b border-gray-700">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              currentView === 'home'
                ? 'bg-green-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView('episodes')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              currentView === 'episodes'
                ? 'bg-green-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            Episodes
          </button>
          <button
            onClick={() => setCurrentView('shows')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              currentView === 'shows'
                ? 'bg-green-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            Shows
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          {currentView === 'home' && (
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6 text-white">Welcome to Spotify Podcasts</h1>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h2 className="text-xl font-semibold mb-4 text-green-400">Recently Played Episodes</h2>
                  <div className="space-y-3">
                    {SAMPLE_EPISODES.slice(0, 3).map((episode) => (
                      <div key={episode.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-white font-medium">{episode.title}</div>
                          <div className="text-gray-400 text-sm">{episode.podcast}</div>
                          <div className="text-gray-500 text-xs">{episode.releaseDate}</div>
                        </div>
                        <button
                          onClick={() => handlePlay(episode)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs ml-4"
                        >
                          ▶️ Play
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <h2 className="text-xl font-semibold mb-4 text-green-400">Trending Episodes</h2>
                  <div className="space-y-3">
                    {SAMPLE_EPISODES.slice(3, 6).map((episode) => (
                      <div key={episode.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-white font-medium">{episode.title}</div>
                          <div className="text-gray-400 text-sm">{episode.podcast}</div>
                          <div className="text-gray-500 text-xs">{episode.releaseDate}</div>
                        </div>
                        <button
                          onClick={() => handlePlay(episode)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs ml-4"
                        >
                          ▶️ Play
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'episodes' && (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-white">All Episodes</h1>
              <div className="space-y-3">
                {SAMPLE_EPISODES.map((episode, index) => (
                  <div
                    key={episode.id}
                    className="flex items-start p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="text-white font-semibold text-lg mb-1">{episode.title}</div>
                      <div className="text-green-400 text-sm mb-2">{episode.podcast}</div>
                      <div className="text-gray-300 text-sm mb-3 line-clamp-2">{episode.description}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{episode.releaseDate}</span>
                        <span className="text-gray-400 text-sm">{formatDuration(episode.duration)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePlay(episode)}
                      className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      ▶️ Play
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentView === 'shows' && (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-white">Your Podcast Shows</h1>
              <div className="space-y-6">
                {Array.from(new Set(SAMPLE_EPISODES.map(ep => ep.podcast))).map((showName) => {
                  const showEpisodes = SAMPLE_EPISODES.filter(ep => ep.podcast === showName);
                  return (
                    <div key={showName} className="bg-gray-900 rounded-lg p-4">
                      <h3 className="text-white font-semibold text-xl mb-3">{showName}</h3>
                      <div className="space-y-2">
                        {showEpisodes.slice(0, 3).map((episode) => (
                          <div
                            key={episode.id}
                            className="flex items-center justify-between p-3 rounded hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex-1">
                              <div className="text-white font-medium">{episode.title}</div>
                              <div className="text-gray-400 text-sm">{episode.releaseDate} • {episode.duration}</div>
                            </div>
                            <button
                              onClick={() => handlePlay(episode)}
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs transition-colors"
                            >
                              ▶️ Play
                            </button>
                          </div>
                        ))}
                        {showEpisodes.length > 3 && (
                          <div className="text-gray-500 text-sm pt-2 text-center">
                            +{showEpisodes.length - 3} more episodes
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Now Playing Bar */}
        {currentlyPlaying && (
          <div className="bg-gray-900 border-t border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-white font-medium text-sm">{currentlyPlaying.title}</div>
                  <div className="text-gray-400 text-xs">{currentlyPlaying.podcast}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
              </div>

              <div className="text-gray-400 text-sm">
                {formatDuration(currentlyPlaying.duration)}
              </div>
            </div>
          </div>
        )}
      </div>
    </WindowFrame>
  );
}