import { useState } from "react";
import { WindowFrame } from "@/components/layout/WindowFrame";
import { AppProps } from "../../base/types";

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
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="text-center space-y-6">
          <div className="w-32 h-32 mx-auto mb-6">
            <img
              src="/icons/default/cursor.png"
              alt="Cursor IDE"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cursor
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
            The AI-powered code editor built for productivity
          </p>

          <div className="space-y-4 mt-8">
            <a
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Download Cursor
            </a>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              Visit <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">cursor.sh</a> to get started
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Features</h3>
            <div className="grid grid-cols-1 gap-3 text-left max-w-md mx-auto">
              <div className="flex items-start gap-2">
                <span className="text-2xl">💻</span>
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">AI-Powered Editing</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Write code faster with AI assistance</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">Chat with Your Code</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ask questions about your codebase</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">Lightning Fast</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Built on VS Code for familiar experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
