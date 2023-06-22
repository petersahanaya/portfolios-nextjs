import { useSelectedOptionHeader } from "@/stores/headerOption";
import { useEffect, useRef, useState } from "react";

export const useIntersection = (idx: number) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const onPressedStateChange = useSelectedOptionHeader(
    (state) => state.onPressedChangeSelected
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      onPressedStateChange(idx);
    }
  }, [idx, isIntersecting, onPressedStateChange]);

  return ref;
};
