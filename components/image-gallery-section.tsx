"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/data/gallery-data";
import ImagePreviewDialog from "./image-preview-dialog";

export default function ImageGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Get 6 random images from the gallery
  const randomImages = [...galleryImages]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0B0C10]">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-[#45A29E]/10 px-3 py-1 text-sm text-[#45A29E] dark:text-[#45A29E]">
            Gallery
          </div>
          <h2 className="section-title">Wellness Journey in Pictures</h2>
          <p className="max-w-[700px] text-[#1F2833] dark:text-[#C5C6C7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A visual showcase of our wellness activities, events, and
            transformations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {randomImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity card-hover"
              onClick={() => handleImageClick(image.src, index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#45A29E] px-8 text-sm font-medium text-[#45A29E]-foreground shadow transition-colors hover:bg-[#45A29E]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
          >
            <span>View All Gallery</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <ImagePreviewDialog
          isOpen={!!selectedImage}
          onClose={() => {
            setSelectedImage(null);
            setSelectedIndex(-1);
          }}
          imageSrc={selectedImage || ""}
          images={randomImages}
          currentIndex={selectedIndex}
          onIndexChange={(newIndex) => {
            setSelectedIndex(newIndex);
            setSelectedImage(randomImages[newIndex].src);
          }}
        />
      </div>
    </section>
  );
}
