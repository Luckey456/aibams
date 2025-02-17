
"use client";
import React from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import "../Styles/Starter.css";
import "../Styles/spotlightBorder.css";
import "../Styles/Arrowdown.css";


function StarterCopy() {
  useEffect(() => {
        const scrollDownElement = document.getElementById("scroll-down");

        const handleAnimationEnd = () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        };

        scrollDownElement.addEventListener("animationend", handleAnimationEnd);

        return () => {
            scrollDownElement.removeEventListener("animationend", handleAnimationEnd);
        };
    }, []);

    return (
        <>
            {/* Logo Section */}
            <div className="logo-container">
                <div className="logo-content">
                    <h1 className="logo">AIBAMS</h1>
                    <p className="tagline">
                        AI For Business Applications & Management System
                    </p>
                    <div id="wrapper">
                        <div id="wrapper-inner">
                            <div id="scroll-down"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StarterCopy;
