"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

const images = [
  "/Tek photo.png",
  "/Tek photo3.png",
  "/Tek photo4.png",
  "/Tek photo 5.png",
  "/Tek photo 6.png",
  "hero1.jpeg",
  "hero2.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setAutoplay(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setAutoplay(false);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent dark:from-[#0B0C10] dark:to-[#0B0C10]/80 z-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center dark:opacity-30"
        ></motion.div>
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content - Responsive for all screen sizes */}
        <div className="flex flex-col items-start justify-center px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-2"
          >
            <span className="text-[#45A29E] dark:text-[#66FCF1] text-lg md:text-xl font-medium">
              Namaste! I am
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2833] dark:text-white mb-4"
          >
            Tek Bahadur{" "}
            <span className="text-[#45A29E] dark:text-[#66FCF1]">Tamang</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[#1F2833]/80 dark:text-[#C5C6C7] max-w-2xl mb-8"
          >
            A passionate advocate for indigenous rights and the{" "}
            <strong className="text-[#45A29E] dark:text-[#66FCF1]">
              Founder General Secretary of Waiba Tamang Samaj Nepal
            </strong>
            , with extensive experience across hospitality, media, and manpower
            industries. Committed to social service, political activism, and
            advancing equality and justice for marginalized communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              className="bg-[#45A29E] hover:bg-[#66FCF1] hover:text-[#1F2833] text-white"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#45A29E] text-[#1F2833] dark:text-[#C5C6C7] dark:border-[#66FCF1] hover:bg-[#66FCF1]/10"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </motion.div>
        </div>

        {/* Desktop and Tablet Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] hidden sm:block"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 md:border-4 border-[#45A29E] dark:border-[#66FCF1] shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={`Tek Bahadur Tamang - Image ${currentImage + 1}`}
                className="w-full h-full object-cover object-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Navigation buttons - Responsive sizing */}
            <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 dark:bg-[#1F2833]/20 dark:hover:bg-[#1F2833]/40 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 dark:bg-[#1F2833]/20 dark:hover:bg-[#1F2833]/40 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
              </Button>
            </div>

            {/* Dots indicator - Responsive sizing */}
            <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center gap-1 md:gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all ${
                    currentImage === index
                      ? "bg-[#66FCF1] w-4 md:w-6 h-1.5 md:h-2"
                      : "bg-white/50 hover:bg-white/80 dark:bg-[#C5C6C7]/50 dark:hover:bg-[#C5C6C7]/80 w-1.5 md:w-2 h-1.5 md:h-2"
                  }`}
                  onClick={() => {
                    setCurrentImage(index);
                    setAutoplay(false);
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full px-4 mt-4 sm:hidden"
        >
          <div className="relative w-full h-[250px] rounded-xl overflow-hidden border-2 border-[#45A29E] dark:border-[#66FCF1] shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={`Tek Bahadur Tamang - Image ${currentImage + 1}`}
                className="w-full h-full object-cover object-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 dark:bg-[#1F2833]/20 dark:hover:bg-[#1F2833]/40 h-7 w-7"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 dark:bg-[#1F2833]/20 dark:hover:bg-[#1F2833]/40 h-7 w-7"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all ${
                    currentImage === index
                      ? "bg-[#66FCF1] w-3 h-1"
                      : "bg-white/50 hover:bg-white/80 dark:bg-[#C5C6C7]/50 dark:hover:bg-[#C5C6C7]/80 w-1 h-1"
                  }`}
                  onClick={() => {
                    setCurrentImage(index);
                    setAutoplay(false);
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-[#45A29E] dark:border-[#66FCF1]"
          >
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#45A29E] dark:text-[#66FCF1]" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
