import { useEffect, useRef, useState } from "react";

type UseScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export const useScrollReveal = (
  itemCount: number,
  options: UseScrollRevealOptions = {},
) => {
  const { threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = options;
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array.from({ length: itemCount }, () => false),
  );
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    setVisibleItems((prev) => {
      if (prev.length === itemCount) return prev;

      const next = Array.from(
        { length: itemCount },
        (_, index) => prev[index] ?? false,
      );
      return next;
    });
  }, [itemCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const idx = Number(entry.target.getAttribute("data-reveal-index"));
          if (Number.isNaN(idx)) return;

          setVisibleItems((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin },
    );

    itemRefs.current.forEach((node, index) => {
      if (!node) return;
      node.setAttribute("data-reveal-index", String(index));
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [itemCount, threshold, rootMargin]);

  const setRevealRef = (index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  };

  return { visibleItems, setRevealRef };
};
