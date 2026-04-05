"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import type { LenisRef } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const stop = () => lenisRef.current?.lenis?.stop();
    const start = () => lenisRef.current?.lenis?.start();
    window.addEventListener("lenis:stop", stop);
    window.addEventListener("lenis:start", start);
    return () => {
      window.removeEventListener("lenis:stop", stop);
      window.removeEventListener("lenis:start", start);
    };
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.hash && link.origin === window.location.origin) {
        e.preventDefault();
        lenisRef.current?.lenis?.scrollTo(link.hash, {
          lerp: 0.1,
          duration: 1.5,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
