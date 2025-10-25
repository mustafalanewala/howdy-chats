"use client";

import { useEffect, useRef, useState } from "react";

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

export default function CustomCursor({ mousePosition }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverVideo, setIsOverVideo] = useState(false);
  const [isOverImage, setIsOverImage] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const currentPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const rotation = useRef(0);

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current) {
        // Smooth interpolation for natural movement
        const lerp = (start: number, end: number, factor: number) => {
          return start + (end - start) * factor;
        };

        currentPosition.current.x = lerp(
          currentPosition.current.x,
          targetPosition.current.x,
          0.12
        );
        currentPosition.current.y = lerp(
          currentPosition.current.y,
          targetPosition.current.y,
          0.12
        );

        // Add subtle rotation based on movement with damping
        const dx = targetPosition.current.x - currentPosition.current.x;
        const dy = targetPosition.current.y - currentPosition.current.y;
        rotation.current += (dx + dy) * 0.01;
        rotation.current *= 0.95; // Damping

        cursorRef.current.style.transform = `translate3d(${
          currentPosition.current.x - (isHovering || isOverImage ? 6 : 4)
        }px, ${
          currentPosition.current.y - (isHovering || isOverImage ? 6 : 4)
        }px, 0) rotate(${rotation.current}deg) scale(${
          isHovering || isOverImage ? 1.1 : 1
        })`;
      }
      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    animationFrameRef.current = requestAnimationFrame(updateCursor);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering, isOverImage]);

  useEffect(() => {
    targetPosition.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if target or any parent has feature-image class
      const isFeatureImage = target.closest(".feature-image") !== null;

      if (target.tagName === "VIDEO") {
        setIsOverVideo(true);
        setIsHovering(false);
        setIsOverImage(false);
      } else if (
        target.classList.contains("image-hover") ||
        target.closest(".image-hover")
      ) {
        setIsOverImage(true);
        setIsHovering(false);
        setIsOverVideo(false);
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
        setIsOverVideo(false);
        setIsOverImage(false);
      } else {
        setIsHovering(false);
        setIsOverVideo(false);
        setIsOverImage(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsOverVideo(false);
      setIsOverImage(false);
    };

    // Use mouseenter/mouseleave for better performance
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {!isOverVideo && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-500 hidden md:block"
          style={{
            contain: "layout style size",
            transition: "color 0.3s ease",
            willChange: "transform",
          }}
        >
          {isOverImage ? (
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#57bb5b] bg-opacity-90 text-white font-medium text-xs shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-500 ease-out">
              Explore
            </div>
          ) : (
            <div
              className="w-3 h-3 rounded-full bg-[#57bb5b] transition-all duration-300 ease-out"
              style={{
                transformOrigin: "center",
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
