import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'motion/react';

interface CookieBoxSequenceProps {
  frameCount: number;
}

export function CookieBoxSequence({ frameCount }: CookieBoxSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Create a transform that maps scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits (e.g., 001, 002... 300)
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        // Try drawing first frame when loaded
        if (i === 1) {
          drawFrame(img);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount]);

  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Fill background with black to match the image background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate aspect ratio to cover the canvas (like object-cover)
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    
    // Adaptive scaling based on device width
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile: use object-contain behavior so the whole box is visible
      if (canvasRatio > imgRatio) {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
      } else {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
      }
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // On desktop: use object-cover behavior to fill the screen
      if (canvasRatio > imgRatio) {
        // Canvas is wider than image, image needs to scale up based on width
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        // Canvas is taller than image, image needs to scale up based on height
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw current frame
        const currentFrame = Math.round(frameIndex.get());
        if (images[currentFrame - 1]) {
          drawFrame(images[currentFrame - 1]);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  // Update canvas when scroll position changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentFrame = Math.round(latest);
    // Boundary check
    if (currentFrame >= 1 && currentFrame <= frameCount) {
      const img = images[currentFrame - 1];
      if (img && img.complete) {
        drawFrame(img);
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
