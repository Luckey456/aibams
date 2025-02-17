import React, { useEffect, useRef, useState } from "react";
import "../Styles/Header.css";

function Header() {
    const headerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > headerRef.current.offsetTop) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav ref={headerRef} className={`primary-menu ${isSticky ? "sticky" : ""}`}>
            <div id="logoHeader">
                <a href="index.html"> <h3>AIBAMS</h3> </a>
            </div>
            <ul className="menu-container one-page-menu">
                <li className="menu-item">
                    <a className="menu-link" href="pages/about.html">
                        <div>About</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="pages/webx.html">
                        <div>
                            <span className="tile">
                                <span className="tile-text">WebX</span>
                            </span>
                        </div>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="../pages/fusion-suite.html">
                        <div style={{ fontWeight: 600 }}>Fusion Suite</div>
                        <div style={{ fontSize: "10px" }}>( coming soon )</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="blogs">
                        <div>Blogs</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="pages/contact.html">
                        <div>Contact</div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
