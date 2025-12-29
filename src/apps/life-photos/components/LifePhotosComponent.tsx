import { useState, useCallback } from "react";
import { WindowFrame } from "@/components/layout/WindowFrame";
import { HelpDialog } from "@/components/dialogs/HelpDialog";
import { AboutDialog } from "@/components/dialogs/AboutDialog";
import { helpItems, appMetadata } from "..";
import { LifePhotosMenuBar } from "./LifePhotosMenuBar";
import { AppProps } from "../../base/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "@/stores/useThemeStore";

interface Photo {
  id: string;
  src: string;
  title: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: "new-york",
    src: "/images/life/new-york.jpg",
    title: "Moving to New York",
    description: "Moving to New York from Boston in fall of 2023.",
  },
  {
    id: "shanghai",
    src: "/images/life/shanghai.jpg",
    title: "Shanghai Skyline",
    description: "View of the Shanghai Skyline from my trip to China in December, 2024.",
  },
  {
    id: "teals",
    src: "/images/life/teals.jpg",
    title: "Microsoft TEALS",
    description: "Certificates of appreciation from Microsoft TEALS - A volunteer organization connecting technology professionals and computer science students.",
  },
  {
    id: "haiti",
    src: "/images/life/haiti.jpg",
    title: "Teaching in Haiti",
    description: "The week after college graduation I took a solo trip to Haiti to teach computer fundamentals to students.",
  },
];

export function LifePhotosComponent({
  isWindowOpen,
  onClose,
  isForeground,
  skipInitialSound,
  instanceId,
  onNavigateNext,
  onNavigatePrevious,
}: AppProps) {
  const [showHelp, setShowHelp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentTheme = useThemeStore((state) => state.current);
  const isXpTheme = currentTheme === "xp" || currentTheme === "win98";

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, []);

  const currentPhoto = photos[currentIndex];

  const menuBar = (
    <LifePhotosMenuBar
      onClose={onClose}
      onShowHelp={() => setShowHelp(true)}
      onShowAbout={() => setShowAbout(true)}
      onPrevious={goToPrevious}
      onNext={goToNext}
      currentIndex={currentIndex}
      totalPhotos={photos.length}
    />
  );

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  if (!isWindowOpen) return null;

  return (
    <>
      {!isXpTheme && isForeground && menuBar}
      <WindowFrame
        title="Life"
        onClose={onClose}
        isForeground={isForeground}
        appId="life-photos"
        skipInitialSound={skipInitialSound}
        instanceId={instanceId}
        onNavigateNext={onNavigateNext}
        onNavigatePrevious={onNavigatePrevious}
        menuBar={isXpTheme ? menuBar : undefined}
      >
        <div className="flex flex-col w-full h-full bg-neutral-900 overflow-hidden select-none">
          {/* Photo display area */}
          <div className="flex-1 relative flex items-center justify-center min-h-0 p-4">
            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Photo container */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentPhoto.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Caption area */}
          <div className="flex-shrink-0 px-6 py-4 bg-black/60 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-white text-lg font-semibold mb-1">
                  {currentPhoto.title}
                </h2>
                <p className="text-white/80 text-sm">
                  {currentPhoto.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail strip */}
          <div className="flex-shrink-0 bg-black/80 px-4 py-3">
            <div className="flex justify-center gap-2">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`relative w-16 h-12 rounded overflow-hidden transition-all ${
                    index === currentIndex
                      ? "ring-2 ring-white ring-offset-2 ring-offset-black scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <HelpDialog
          isOpen={showHelp}
          onOpenChange={setShowHelp}
          helpItems={helpItems}
          appId="life-photos"
        />
        <AboutDialog
          isOpen={showAbout}
          onOpenChange={setShowAbout}
          metadata={appMetadata}
          appId="life-photos"
        />
      </WindowFrame>
    </>
  );
}
