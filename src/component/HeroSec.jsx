"use client";

import AboutUs from "./AboutUs";

export default function HeroSec() {
  return (
    <section>
    <section className="full-section ">
      <section className="hero_sec">
        <section className="slide_up">
          <div className="hero_sec_content">
            <div className="common_sec_width">
              <div className="container-fluid">
                <h1>
                  Book your <b>comfortable & hassle</b> free <span>ride</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="hero_sec_bg">
            <img
              src="/images/car_bg.png"
              alt=""
              className="img-fluid desktop-hero-bg"
            />
            <img
              src="/images/mobile-hero-bg.webp"
              alt=""
              className="img-fluid mobile-hero-bg"
            />
          </div>

          {/* Animated Car Location Marker */}
          <div className="car_location_marker">
            <img
              src="/images/car_location_image.png"
              alt="Car Location"
            />
          </div>
        </section>
      </section>
    </section>
    </section>
  );
}
