"use client";

import { useEffect, useRef, useState } from "react";

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

export default function CustomCursor({ mousePosition }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverVideo, setIsOverVideo] = useState(false);
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
          0.15
        );
        currentPosition.current.y = lerp(
          currentPosition.current.y,
          targetPosition.current.y,
          0.15
        );

        // Add subtle rotation based on movement
        const dx = targetPosition.current.x - currentPosition.current.x;
        const dy = targetPosition.current.y - currentPosition.current.y;
        rotation.current += (dx + dy) * 0.02;

        cursorRef.current.style.transform = `translate3d(${
          currentPosition.current.x - (isHovering ? 8 : 4)
        }px, ${currentPosition.current.y - (isHovering ? 8 : 4)}px, 0) rotate(${
          rotation.current
        }deg) scale(${isHovering ? 1.2 : 1})`;
      }
      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    animationFrameRef.current = requestAnimationFrame(updateCursor);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering]);

  useEffect(() => {
    targetPosition.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "VIDEO") {
        setIsOverVideo(true);
        setIsHovering(false);
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
        setIsOverVideo(false);
      } else {
        setIsHovering(false);
        setIsOverVideo(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsOverVideo(false);
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
          <div
            className="w-3 h-3 rounded-full bg-[#57bb5b] transition-all duration-300 ease-out"
            style={{
              transformOrigin: "center",
            }}
          />
        </div>
      )}
    </>
  );
}
