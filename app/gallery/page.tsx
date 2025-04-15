"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { galleryImages } from "@/data/gallery-data";
import ImagePreviewDialog from "@/components/image-preview-dialog";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="section-container">
        <Link
          href="/"
          className="inline-flex items-center text-[#1F2833] dark:text-[#C5C6C7] hover:text-[#45A29E] dark:hover:text-[#45A29E] mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12 text-center">
          <h1 className="section-title">Wellness Gallery</h1>
          <p className="mt-4 text-xl text-[#1F2833] dark:text-[#C5C6C7] max-w-2xl mx-auto">
            A visual journey through our wellness activities, events, and
            transformations over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
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

        <ImagePreviewDialog
          isOpen={!!selectedImage}
          onClose={() => {
            setSelectedImage(null);
            setSelectedIndex(-1);
          }}
          imageSrc={selectedImage || ""}
          images={galleryImages}
          currentIndex={selectedIndex}
          onIndexChange={(newIndex) => {
            setSelectedIndex(newIndex);
            setSelectedImage(galleryImages[newIndex].src);
          }}
        />
      </div>
      <Footer />
    </>
  );
}
