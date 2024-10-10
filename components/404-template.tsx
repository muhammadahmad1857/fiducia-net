"use client";
import Link from "next/link";
import {  FaExclamationTriangle, } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IconType } from "react-icons";

export default function NotFoundTemplate({
  title,
  desc,
  url,
  urlText,
  Icon,
}: {
  title: string;
  desc: string;
  url: string;
  urlText: string;
  Icon: IconType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    const texts = textRefs.current;

    if (!container || !icon || texts.some((el) => !el)) return;

    gsap.set(container, { opacity: 0, scale: 0.8 });
    gsap.set(texts, { opacity: 0, y: -20 });

    const tl = gsap.timeline();

    tl.to(container, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    })
      .to(icon, {
        rotation: 360,
        duration: 1,
        ease: "none",
      })
      .to(
        texts,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <div className="min-h-[calc(100vh-6rem)] overflow-y-hidden flex items-center justify-center">
      <div
        ref={containerRef}
        className="text-center md:mt-auto mt-10 text-white p-12 rounded-xl shadow-2xl border border-gray-700"
      >
        <div ref={iconRef} className="cursor-pointer hover:animate-pulse">
          <FaExclamationTriangle className="mx-auto text-7xl mb-6 text-orange-500" />
        </div>
        <h1
          ref={(el) => {
            if (el) textRefs.current[0] = el;
          }}
          className="text-5xl font-bold mb-3 text-orange-500"
        >
          404
        </h1>
        <h2
          ref={(el) => {
            if (el) textRefs.current[1] = el;
          }}
          className="text-3xl font-semibold mb-6"
        >
          {title}
        </h2>
        <p
          ref={(el) => {
            if (el) textRefs.current[2] = el;
          }}
          className="sm:text-xl text-base mb-8 max-w-md mx-auto"
        >{desc}</p>
        <Link
          href={url}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white hover:scale-110 bg-orange-500 rounded-full hover:bg-orange-600 transition duration-500 shadow-lg hover:shadow-xl"
        >
          <Icon className="mr-3 text-xl" />
          {urlText}
        </Link>
      </div>
    </div>
  );
}
