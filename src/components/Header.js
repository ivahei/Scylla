import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [header, setHeader] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  const menuRef = useRef(null);

  useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);

      return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  } 

  const listenScrollEvent = (event) => {
    if (window.scrollY < 60) {
      setHeader("");
    } else {
      setHeader("headerScroll");
    }
  };


  const openMenu = () => {
    setIsOpenMenu(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={`headerDefault ${header}`}>
      <img
        className="header-img"
        src="https://www.scylla.ai/static/7c2c2d6dccf829dae2225bdee0d513fa/578e8/icon.webp"
      />
      <nav className="header-nav nav">
        <a>HOME</a>
        <a>PRODUCT CENTER</a>
        <a>CASE STUDIES</a>
        <a>ABOUT US</a>
        <a>TEAM</a>
        <a>RESOURCES</a>
        <a>CONTACT US</a>
      </nav>

      <div className="header-buttons">
        <button className="get-a-quote-button-header">GET A QUOTE</button>
        <button className="side-button" onClick={openMenu}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path>
          </svg>
        </button>
      </div>
      <div ref={menuRef} className={`sidenav ${isOpenMenu ? "open" : ""}`}>
        <div className="menu-header">
          <img
            className="header-img"
            src="https://www.scylla.ai/static/7c2c2d6dccf829dae2225bdee0d513fa/578e8/icon.webp"
          />

          <span className="close-btn" onClick={closeMenu}>
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path
                fill="currentColor"
                d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
              ></path>
            </svg>
          </span>
        </div>
        <nav>
          <a>HOME</a>
          <a>PRODUCT CENTER</a>
          <a>CASE STUDIES</a>
          <a>ABOUT US</a>
          <a>TEAM</a>
          <a>RESOURCES</a>
          <a>CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
