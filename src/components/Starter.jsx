import React, { useEffect, useState, useRef } from "react";
import "../Styles/spotlightBorder.css";
import { Spotlight } from "../components/ui/spotlight-new";
import "../Styles/Starter.css";
import "../Styles/spotlightBorder.css";
import "../Styles/Arrowdown.css";
import enhanceScrollBehavior from "../components/enhanceScrollBehavior ";



document.documentElement.style.scrollBehavior = "auto"; // Ensure no smooth scrolling conflicts
window.scrollTo(0, 0); // Reset scroll
document.documentElement.style.willChange = "scroll-position"; // Force repaint
document.documentElement.offsetHeight; // Force reflow before animation


function Starter() {
  const [borderSplitStarted, setBorderSplitStarted] = useState(false);
  const [navbarReached, setNavbarReached] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const shootingLineRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    console.log("Effect ran"); // Debugging step 1

    const startAnimation = () => {
      enhanceScrollBehavior();

      const header = document.querySelector("nav.primary-menu");
      if (!header) {
        console.error("Navigation header not found");
        return;
      }
      console.log("Header found:", header);

      const shootingLine = shootingLineRef.current;
      if (!shootingLine) {
        console.error("Shooting line element not found");
        return;
      }
      console.log("Shooting line found:", shootingLine);

      const headerTop = header.getBoundingClientRect().top + window.scrollY;
      console.log("Header position:", headerTop);

      // Reset page scroll before animation
      window.scrollTo(0, 0);
      shootingLine.style.transform = "translateY(-150px) scaleY(0.5)";
      shootingLine.style.opacity = "1";

      // Ensuring the reflow is forced before animation starts
      shootingLine.offsetHeight;

      const easeOutQuad = (t) => t * (2 - t); // Smooth easing function

      const startScrollAnimation = () => {
        let startTime = null;
        const duration = 2000; // 2 seconds

        if (!shootingLineRef.current) {
          console.error("🚨 Shooting line ref is null! Animation cannot apply.");
          return;
        }
        

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutQuad(progress);
        
          const scrollPosition = Math.round(headerTop * easedProgress);
          window.scrollTo(0, scrollPosition);
        
          let yPos = -150;
          let scale = 0.5;
        
          if (progress <= 0.3) {
            yPos = -150 + (progress / 0.3) * 180;
          } else if (progress <= 0.6) {
            yPos = 30 + ((progress - 0.3) / 0.3) * 70;
            scale = 0.5 + ((progress - 0.3) / 0.3) * 0.5;
          } else {
            yPos = 100 + ((progress - 0.6) / 0.4) * 120;
            scale = 1 - ((progress - 0.6) / 0.4) * 0.5;
          }
        
          console.log(`Animation progress: ${progress.toFixed(2)}, YPos: ${yPos}, Scale: ${scale}`);
        
          shootingLineRef.current.style.transform = `translateY(${yPos}px) scaleY(${scale})`;
        
          if (progress > 0.9) {
            shootingLineRef.current.style.opacity = `${1 - (progress - 0.9) / 0.1}`;
          }
        
          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        };
        

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      // Ensure animation starts as soon as possible
      setTimeout(() => {
        console.log("Starting animation...");
        startScrollAnimation();
      }, 500);
    };

    // Start animation when the component mounts
    startAnimation();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="logo-container">
        <Spotlight />
        <h1 className="logo">AIBAMS</h1>
        <p className="tagline">AI Business & Management System</p>

        <div className="shooting-line-wrapper">
          <div
            className="shooting-line"
            ref={shootingLineRef}
            style={{
              transform: "translateY(-150px) scaleY(0.5)",
              opacity: 1,
            }}
          />
        </div>

        {showArrow && (
          <div className="arrow-container">
            <div className="arrow-down"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Starter;
