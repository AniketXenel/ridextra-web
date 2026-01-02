"use client";
import { useEffect,useRef, useState } from "react";
import {usePathname} from "next/navigation";

export default function Header() {

    const pathname = usePathname();
    const isHome = pathname === "/";

    const headerRef = useRef(null);

    const [scrolled, setScrolled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    // Scroll behavior
    useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Measure Header height
   useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("menu_is_visible", menuVisible);
  }, [menuVisible]);

    const toggleMenu = () => setMenuVisible(prev => !prev);
    const closeMenu = () => setMenuVisible(false);

    return (
        <header ref={headerRef}
            className={`
                site_header
                ${isHome ? (scrolled ? "header_home header_scrolled" : "header_home") : "header_inner"}
                ${menuVisible ? "header_menu_open" : ""}
            `}
            >
            <nav className="common_sec_width" aria-label="Main navigation">
                <div className="container-fluid">
                    <div className="header_wrap">
                        {/* Logo */}
                        <a href="/" className="header_logo">
                            <img src="/images/icons/ridextra-logo.svg" alt="" />
                        </a>

                        {/* Desktop Menu */}
                        <div className="desktop_menu">
                            <ul className="main_menu_list">
                                <li className="main_menu_link current_menu_item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="main_menu_link">
                                    <a href="javascript:void(0);">About</a>
                                </li>
                            </ul>
                        </div>

                        {/* Header Button */}
                        <div className="header_button">
                            <a href="javascript:void(0);" className="primary_btn header_btn">
                                <span className="btn_text">Download Now</span>
                                <img src="/images/icons/Arrow.svg" alt="Arrow" />
                            </a>
                        </div>

                        {/* Hamburger Menu */}
                        <div className={`hamburger ham_btn ${menuVisible ? 'is-active' : ''}`} onClick={toggleMenu}>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </div>

                        {/* Mobile Menu */}
                        <div 
                            className={`mobile_menu social_mobile_css ${menuVisible ? 'show-menu' : ''}`}
                            style={{
                                top: `${headerHeight}px`,
                                height: `calc(100dvh - ${headerHeight}px)`,
                            }}
                        >
                            <ul className="mobile_menu_list">
                            <li className="mobile_menu_link">
                            <a href="/" onClick={closeMenu}>
                                Home
                            </a>
                            </li>
                            <li className="mobile_menu_link">
                            <a href="javascript:void.(0);" onClick={closeMenu}>
                                About
                            </a>
                            </li>
                            
                            <li className="mobile_menu_link">
                            <a href="javascript:void.(0);" onClick={closeMenu}>
                                Download Now
                            </a>
                            </li>
                            </ul>
                        </div>
                        {/* Overlay */}
                        {menuVisible && (
                            <div
                                className="mobile_menu_overlay"
                                style={{ top: headerHeight }}
                                onClick={closeMenu}
                            />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}