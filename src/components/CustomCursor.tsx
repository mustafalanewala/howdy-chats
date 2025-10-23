"use client";

import { useEffect, useRef, useState } from "react";

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
}

export default function CustomCursor({ mousePosition }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${
          mousePosition.x - 10
        }px, ${mousePosition.y - 10}px, 0)`;
      }
      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    animationFrameRef.current = requestAnimationFrame(updateCursor);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
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
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block will-change-transform"
        style={{
          width: isHovering ? "60px" : "20px",
          height: isHovering ? "60px" : "20px",
          transition: "width 0.15s ease-out, height 0.15s ease-out",
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#57bb5b] transition-opacity duration-150" />
      </div>
    </>
  );
}
