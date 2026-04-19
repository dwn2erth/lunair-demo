"use client";

import { useEffect, useRef, useState } from "react";

type RevealBlockProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function RevealBlock({
  children,
  className,
  delay = 0,
}: RevealBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`reveal-block${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
