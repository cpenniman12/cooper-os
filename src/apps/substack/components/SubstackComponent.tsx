import { useState } from "react";
import { WindowFrame } from "@/components/layout/WindowFrame";
import { AppProps } from "../../base/types";

interface SubstackArticle {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  link: string;
  excerpt?: string;
}

const SUBSTACK_ARTICLES: SubstackArticle[] = [
  {
    id: "article1",
    title: "Tool Calling and the Power of Verification",
    date: "December 14, 2025",
    imageUrl: "/icons/default/substack.svg", // Placeholder, would need actual images
    link: "https://substack.com/home/post/p-181557853",
    excerpt: "Exploring how AI tool calling enables powerful verification and validation workflows."
  },
  {
    id: "article2",
    title: "AI Capability Overhang",
    date: "May 28, 2025",
    imageUrl: "/icons/default/substack.svg",
    link: "https://substack.com/@cooperpenniman/p-164666088",
    excerpt: "Understanding the implications when AI capabilities suddenly advance beyond current applications."
  },
  {
    id: "article3",
    title: "Build What You Want",
    date: "June 6, 2025",
    imageUrl: "/icons/default/substack.svg",
    link: "https://cooperpenniman.substack.com/p/build-what-you-want",
    excerpt: "Why building exactly what you need is often the best approach to software development."
  },
  {
    id: "article4",
    title: "RAG's Future",
    date: "May 26, 2025",
    imageUrl: "/icons/default/substack.svg",
    link: "https://substack.com/@cooperpenniman/p-164526774",
    excerpt: "Examining the evolution and future potential of Retrieval-Augmented Generation systems."
  },
  {
    id: "article5",
    title: "Contextual Programming",
    date: "May 11, 2025",
    imageUrl: "/icons/default/substack.svg",
    link: "https://substack.com/@cooperpenniman/p-163019880",
    excerpt: "How programming paradigms are shifting toward context-aware development approaches."
  },
  {
    id: "article6",
    title: "Abstracting Away Work",
    date: "April 27, 2025",
    imageUrl: "/icons/default/substack.svg",
    link: "https://substack.com/@cooperpenniman/p-162297037",
    excerpt: "The art and science of building abstractions that eliminate repetitive tasks."
  }
];

export function SubstackComponent({
  isWindowOpen,
  onClose,
  isForeground,
  instanceId,
}: AppProps) {
  const [selectedArticle, setSelectedArticle] = useState<SubstackArticle | null>(null);

  if (!isWindowOpen) return null;

  const openArticle = (article: SubstackArticle) => {
    window.open(article.link, '_blank');
  };

  return (
    <WindowFrame
      title="Substack Writings"
      onClose={onClose}
      isForeground={isForeground}
      appId="substack"
      instanceId={instanceId}
    >
      <div className="h-[600px] bg-gradient-to-br from-orange-50 to-red-50 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
                <path d="M4 9h24v2H4zm0 6h24v2H4zm0 6h24l-3 6H7l-3-6z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Cooper Penniman</h1>
              <p className="text-gray-600">AI, Technology & Strategy</p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {SUBSTACK_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openArticle(article)}
              >
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center border-b border-gray-200">
                  <svg width="48" height="48" viewBox="0 0 32 32" className="text-orange-500">
                    <rect width="32" height="32" rx="6" fill="currentColor"/>
                    <path d="M4 9h24v2H4zm0 6h24v2H4zm0 6h24l-3 6H7l-3-6z" fill="white"/>
                  </svg>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <time className="text-sm text-gray-500">{article.date}</time>
                    <div className="flex items-center gap-1 text-orange-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3z"/>
                        <path d="M5 5v14h14v-7h-2v5H7V7h5V5z"/>
                      </svg>
                      <span className="text-xs font-medium">Read Article</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  {article.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>Substack</span>
                    </div>

                    <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <svg width="20" height="20" viewBox="0 0 32 32" className="text-orange-500">
                <rect width="32" height="32" rx="6" fill="currentColor"/>
                <path d="M4 9h24v2H4zm0 6h24v2H4zm0 6h24l-3 6H7l-3-6z" fill="white"/>
              </svg>
              <a
                href="https://cooperpenniman.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Visit Full Substack →
              </a>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}