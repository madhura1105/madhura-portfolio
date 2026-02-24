import { useEffect, useRef, useState } from "react";

export default function CatCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (!cursor) return;

      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll(
      "a, button, .info-card, .project-card"
    );

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cat-cursor ${hovering ? "wag" : ""}`}
    >
      <div className="cat-face">🐱</div>
      <div className="cat-tail"></div>
    </div>
  );
}