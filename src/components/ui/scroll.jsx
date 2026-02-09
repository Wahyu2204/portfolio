"use client";
import { useState, useEffect, useRef } from "react";

export default function Scroll({ children, className = "min-h-screen" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen muncul 10% di layar, set visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observe biar gak render ulang terus
        }
      },
      { threshold: 0.1 } // 0.1 artinya 10% elemen masuk viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && observer.disconnect) observer.disconnect();
    };
  }, []);

  return (
    // Kita kasih min-h-screen biar layoutnya gak loncat (placeholder tinggi)
    <div ref={ref} className={className}>
      {isVisible ? children : null}
    </div>
  );
}