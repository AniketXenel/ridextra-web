"use client";
// import { assetPath } from "@/utils/assetPath";
import { useEffect } from "react";

export default function SecondSection() {


  useEffect(() => {
    const wrappers = document.querySelectorAll(".video-card-wrapper");

    wrappers.forEach(wrapper => {
      const video = wrapper.querySelector("video");

      const play = () => video.play();
      const stop = () => {
        video.pause();
        video.currentTime = 0;
      };

      wrapper.addEventListener("mouseenter", play);
      wrapper.addEventListener("mouseleave", stop);
      return () => {
        wrapper.removeEventListener("mouseenter", play);
        wrapper.removeEventListener("mouseleave", stop);
      };
    });
  }, []);
  return(
        <section className="slider_up_screen">
        
       <section className="about_us_section">
<div className="about_us_content">
<h2>About Us</h2>
 
    <p>
      Our ride application is a smart, reliable mobility platform designed to
      connect riders with verified drivers in real time. Built for
      convenience, safety, and efficiency, the app ensures seamless travel
      experiences for passengers while creating flexible earning
      opportunities for drivers.
</p>
 
    <p>
      We provide an end-to-end ride-hailing ecosystem that simplifies urban
      transportation. From booking a ride in seconds to secure payments and
      real-time tracking, our platform delivers dependable mobility solutions
      for everyday travel.
</p>
 
    <button className="download_btn">Download RideXtra</button>
</div>
 
  {/* Moving Taxi Video at Bottom */}
<div className="moving_taxi_container">
<video
      className="taxi_video"
      src="/images/rideextra.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
</div>
</section>
        <section className="core_features_section">
          <div className="core_features_container">
            {/* Heading */}
            <div className="core_features_heading">
              <h2>
                Core <b>Features</b>
              </h2>
            </div>
            <div
              className="core_features_bg_wrap"
              style={{
                backgroundImage: `url(${("/images/feature_background.png")})`
              }}
            >
              {/* Feature Cards */}
              <div
                className="core_features_grid"

              >
                {[
                  {
                    title: "Real-Time Ride Booking",
                    desc:
                      "Instant ride matching using GPS-based location tracking ensures quick pickups and minimal wait times.",
                    icon: "/images/clock.png",
                  },
                  {
                    title: "Verified Drivers",
                    desc:
                      "All drivers undergo identity checks, license verification, and vehicle validation to ensure rider safety.",
                    icon: "/images/verified.png",
                  },
                  {
                    title: "Live Ride Tracking",
                    desc:
                      "Track your driver and route in real time with accurate ETA updates.",
                    icon: "/images/signal.png",
                  },
                  {
                    title: "Transparent Pricing",
                    desc:
                      "Upfront fare estimates with no hidden charges, ensuring complete pricing clarity.",
                    icon: "/images/folder.png",
                  },
                  {
                    title: "Ratings & Feedback",
                    desc:
                      "Two-way rating system to maintain service quality and accountability.",
                    icon: "/images/star.png",
                  },
                  {
                    title: "Secure Digital Payments",
                    desc:
                      "Multiple payment options with encrypted transactions for a smooth, cashless experience.",
                    icon: "/images/lock.png",
                  },
                ].map((item, index) => (
                  <div className="feature_box" key={index}>
                    <img
                      src={(item.icon)}
                      alt="feature icon"
                      className="feature_icon"
                    />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
        <section className="How-it-works">
          <section className="how-it-works">
            <div className="container">

              {/* Heading */}
              <h2 className="how-title text-center">
                How it <span style={{ fontWeight: "bold" }}>Works</span>
              </h2>

              {/* Cards */}
              <div className="row justify-content-center">

                {/* Riders */}
                <div className="col-lg-6 mb-4">
                  <div className="how-card">
                    <div className="row align-items-center">

                      <div className="col-md-5 text-center">
                        <img
                          src="/images/left_mobile.png"
                          alt="Riders App"
                          className="how-mobile-img"
                        />
                      </div>

                      <div className="col-md-7">
                        <h3 className="how-card-title" style={{ marginLeft: "35px" }}>For <b>Riders</b></h3>
                        <ul className="how-list" style={{ marginLeft: "19px" }}>
                          <li>1. Enter pickup and destination</li>
                          <li>2. View fare estimates and ride options</li>
                          <li>3. Get matched with nearby drivers</li>
                          <li>4. Track your ride in real time</li>
                          <li>5. Pay securely and rate your experience</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Drivers */}
                <div className="col-lg-6 mb-4">
                  <div className="how-card">
                    <div className="row align-items-center">
                      <div className="col-md-5 text-center">
                        <img
                          src="/images/right_mobile.png"
                          alt="Drivers App"
                          className="how-mobile-img"
                        />
                      </div>

                      <div className="col-md-7">
                        <h3 className="how-card-title" style={{ marginLeft: "30px", }}>For <b>Drivers</b></h3>
                        <ul className="how-list" style={{ marginLeft: "15px" }}>
                          <li>1. Register and complete verification</li>
                          <li>2. Accept ride requests based on availability</li>
                          <li>3. Navigate efficiently with in-app maps</li>
                          <li>4. Complete trips and earn instantly</li>
                          <li>5. Track earnings and performance</li>
                        </ul>
                      </div>



                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>


        </section>
        <section className="download-section position-relative py-5">
          {/* LEFT GRADIENT BORDER */}
          <div className="download-border download-border--left"></div>

          {/* RIGHT GRADIENT BORDER */}
          <div className="download-border download-border--right"></div>

          <div className="container position-relative">

            {/* Text Box */}
            <div className="text-box p-4" style={{ maxWidth: '700px' }}>
              <h2 className="mb-3">
                Download <span className="fw-bolder">RideXtra App</span> Now
              </h2>
              <p className="text-muted">
                Get a Ride in Minutes – Book, Track, and Pay for taxi services Anytime, Anywhere!
              </p>
            </div>

            {/* Videos */}
            <div className="video-row d-flex gap-4 mt-4">

              {/* DRIVER */}
              <div
                className="video-card-wrapper"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video && video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <div className="video-card">
                  <video
                    src="/images/social-page.mp4"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>

                <button className="driver-btn">
                  I am a driver
                </button>
              </div>


              {/* USER */}
              <div
                className="video-card-wrapper"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video && video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <div className="video-card">
                  <video
                    src="/images/conversation.mp4"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>

                <button className="role-btn role-btn--user">
                  I am a user
                </button>
              </div>

            </div>


            {/* Floating mobile image */}
            <div className="mobile-image">
              <img src="/images/mobiles.png" alt="RideXtra Mobile App" />
            </div>

          </div>
        </section>



      </section>

  )
}