"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ImagePreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  images?: Array<{ src: string; alt: string }>;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
}

export default function ImagePreviewDialog({
  isOpen,
  onClose,
  imageSrc,
  images = [],
  currentIndex = -1,
  onIndexChange,
}: ImagePreviewDialogProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Handle arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !onIndexChange || currentIndex === -1 || !images.length)
        return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const handlePrevious = () => {
    if (!onIndexChange || currentIndex === -1 || !images.length) return;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    onIndexChange(newIndex);
  };

  const handleNext = () => {
    if (!onIndexChange || currentIndex === -1 || !images.length) return;
    const newIndex = (currentIndex + 1) % images.length;
    onIndexChange(newIndex);
  };

  const hasNavigation =
    images.length > 1 && currentIndex !== -1 && onIndexChange;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt="Preview"
            width={1200}
            height={800}
            className="object-contain max-h-[80vh] rounded-lg"
          />

          {hasNavigation && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 z-50 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 focus:outline-none transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 z-50 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 focus:outline-none transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
