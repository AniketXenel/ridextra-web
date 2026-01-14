"use client";
import { useEffect, useRef } from "react";
 
export default function HeroSec() {
  const heroRef = useRef(null);
 
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
 
      const scale = 1 - (scrollY / windowHeight) * 0.15;
      const opacity = 1 - (scrollY / windowHeight) * 0.6;
 
      heroRef.current.style.transform = `scale(${Math.max(scale, 0.85)})`;
      heroRef.current.style.opacity = Math.max(opacity, 0.4);
    };
 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
<section className="full-section">
<section className="hero_sec" ref={heroRef}>
<section className="slide_up">
<div className="hero_sec_content">
<div className="common_sec_width">
<div className="container-fluid">
<h1>Book your <b>comfortable & hassle</b> free <span>ride</span></h1>
</div>
</div>
</div>
<div className="hero_sec_bg">
<img src="/images/car_bg.png" alt="" className="img-fluid desktop-hero-bg" />
<img src="/images/mobile-hero-bg.webp" alt="" className="img-fluid mobile-hero-bg" />
</div>
          {/* Animated Car Location Marker */}
<div className="car_location_marker">
<img src="/images/car_location_image.png" alt="Car Location" />
</div>
</section>
</section>
</section>
  );
}