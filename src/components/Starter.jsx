
import React, { useEffect, useState } from "react";
import "../Styles/spotlightBorder.css";
import { Spotlight } from "../components/ui/spotlight-new";
import "../Styles/Starter.css";
import "../Styles/spotlightBorder.css";
import "../Styles/Arrowdown.css";
import enhanceScrollBehavior from "../components/enhanceScrollBehavior ";

function Starter() {
  const [borderSplitStarted, setBorderSplitStarted] = useState(false);
  const [navbarReached, setNavbarReached] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const [autoScrolled, setAutoScrolled] = useState(false);

  useEffect(() => {
    enhanceScrollBehavior();
    const header = document.querySelector("nav");
    if (!header || autoScrolled) return;

    const headerTop = header.offsetTop;
    console.log('headerTop:', headerTop);

    const startAutoScroll = () => {
      console.log('startAutoScroll called');
      setAutoScrolled(true);
      const startTime = Date.now();
      const duration = 2000; // Duration for first phase (2 seconds)
      const scrollStep = window.innerHeight * 0.009; // Smaller steps (5% of viewport)

      const animateScroll = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const scrollY = progress * headerTop;

        window.scrollTo({ top: scrollY, behavior: "smooth" });

        if (elapsed < duration) {
          setTimeout(animateScroll, 32); // 16ms = 60fps
        } else {
          setBorderSplitStarted(true);
          setNavbarReached(true);
          setShowArrow(false);
        }
      };

      animateScroll();
    };

    // Start auto-scroll after a brief delay
    setTimeout(startAutoScroll, 0);

    return () => {
      // Do nothing
    };
  }, [autoScrolled]);

  return (
    <>
      <div className="logo-container">
        <Spotlight />
        <h1 className="logo">AIBAMS</h1>
        <p className="tagline">AI Business & Management System</p>

        <div className="shooting-line-wrapper">
          <div className="shooting-line" id="shooting-line"></div>
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
