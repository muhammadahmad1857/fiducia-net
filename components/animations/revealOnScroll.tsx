"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
interface RevealOnScrollProps {
  children: React.ReactNode;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current) {
      const element = containerRef.current;
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          pin: true,
          snap: 1 / 2, // 50% of the viewport
          // markers: true,
        },
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="revealOnScroll">
      {children}
    </div>
  );
};

export default RevealOnScroll;
