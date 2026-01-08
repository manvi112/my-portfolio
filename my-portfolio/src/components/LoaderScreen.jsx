import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./LoaderScreen.css";

export function LoaderScreen({ onComplete }) {
  const countRef = useRef(null);

  useEffect(() => {
    let obj = { val: 0 };

    gsap.to(obj, {
      val: 100,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        countRef.current.textContent = Math.floor(obj.val);
      },
      onComplete: () => {
        gsap.to(".loader", {
          y: "-100%",
          duration: 0.8,
          ease: "power4.inOut",
          onComplete
        });
      }
    });
  }, [onComplete]);

  return (
    <div className="loader">
      <span ref={countRef}>0</span>
    </div>
  );
}
