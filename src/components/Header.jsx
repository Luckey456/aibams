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
        <a href="index.html">
          {" "}
          <h3>AIBAMS</h3>{" "}
        </a>
      </div>
      <ul className="menu-container one-page-menu">
        <li className="menu-item">
          <a className="menu-link" href="pages/about.html">
            <div>Application</div>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="pages/webx.html">
            <div>
              <span className="tile">
                <span className="tile-text">Industries</span>
              </span>
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="../pages/fusion-suite.html">
            <span className="tile-text">Community</span>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="blogs">
            <div>Pricing</div>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="pages/contact.html">
            <div>Contact</div>
          </a>
        </li>
      </ul>

      <button className="Login-button mt-8 mb-10 mr-5">
        <span>Log in</span>
      </button>
    </nav>
  );
}

export default Header;
