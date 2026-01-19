"use client";
import { useState } from "react";

export default function DownloadSection() {
  const [activeRole, setActiveRole] = useState(null);

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.play();
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="download-section position-relative py-5">
      <div className="download-border download-border--left"></div>
      <div className="download-border download-border--right"></div>

      <div className="container position-relative">
        {/* Text */}
        <div className="text-box p-4" style={{ maxWidth: "600px" }}>
          <h2 className="mb-3">
            Download <span className="fw-bolder">RideXtra App</span> Now
          </h2>
          <p className="text-muted">
            Get a Ride in Minutes – Book, Track, and Pay Anytime, Anywhere!
          </p>
        </div>

        {/* Videos */}
        <div className="video-row d-flex gap-4 mt-4">
          {/* DRIVER */}
          <div
            className="video-card-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="video-card">
              <video
                src="/images/social-page.mp4"
                muted
                loop
                playsInline
              />
            </div>

            <button
              className={`driver-btn ${
                activeRole === "driver" ? "active" : ""
              }`}
              onClick={() => setActiveRole("driver")}
            >
              I am a driver
            </button>
          </div>

          {/* USER */}
          <div
            className="video-card-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="video-card">
              <video
                src="/images/conversation.mp4"
                muted
                loop
                playsInline
              />
            </div>

            <button
              className={`role-btn role-btn--user ${
                activeRole === "user" ? "active" : ""
              }`}
              onClick={() => setActiveRole("user")}
            >
              I am a user
            </button>
          </div>
        </div>

        {/* Mobile image */}
        <div className="mobile-image">
          <img src="/images/mobiles.png" alt="RideXtra Mobile App" />
        </div>
      </div>
    </section>
  );
}
