import { useEffect, useRef } from "react";

export function useDragScroll<T extends HTMLElement | null>(scrollSpeed: number = 1) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    console.log("Setting up drag scroll for ", ref.current);
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      console.log("Mouse down");
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseLeave = () => {
      console.log("Mouse leave");
      isDown = false;
    };

    const handleMouseUp = () => {
      console.log("Mouse up");
      isDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      console.log("Mouse move");
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * scrollSpeed;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return ref;
}
