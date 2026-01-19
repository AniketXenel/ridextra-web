"use client";

import { useState } from "react";

export default function CoreFeatures() {

  const features = [
    {
      title: "Real-Time Ride Booking",
      desc: "Instant ride matching using GPS-based location tracking ensures quick pickups and minimal wait times.",
      icon: "/images/clock.png",
      hoverIcon: "/images/mingcute_time-line.png",
    },
    {
      title: "Verified Drivers",
      desc: "All drivers undergo identity checks, license verification, and vehicle validation to ensure rider safety.",
      icon: "/images/verified.png",
      hoverIcon: "/images/material-symbols_verified-outline-rounded.png",
    },
    {
      title: "Live Ride Tracking",
      desc: "Track your driver and route in real time with accurate ETA updates.",
      icon: "/images/signal.png",
      hoverIcon: "/images/fluent_live-24-regular.png",
    },
    {
      title: "Transparent Pricing",
      desc: "Upfront fare estimates with no hidden charges, ensuring complete pricing clarity.",
      icon: "/images/folder.png",
      hoverIcon: "/images/folder_hover.png",
    },
    {
      title: "Ratings & Feedback",
      desc: "Two-way rating system to maintain service quality and accountability.",
      icon: "/images/star.png",
      hoverIcon: "/images/material-symbols_star-outline-rounded.png",
    },
    {
      title: "Secure Digital Payments",
      desc: "Multiple payment options with encrypted transactions for a smooth, cashless experience.",
      icon: "/images/lock.png",
      hoverIcon: "/images/mdi_secure-outline.png",
    },
  ];

  return (
    <section className="core_features_section">
      <div className="core_features_container">

        {/* Heading */}
        <div className="core_features_heading">
          <h2>
            Core <b>Features</b>
          </h2>
        </div>

        <div className="core_features_bg_wrap">
          <div className="core_features_grid">
            {features.map((item, index) => (
              <FeatureCard item={item} key={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ item }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="feature_box"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? item.hoverIcon : item.icon}
        alt="feature icon"
        className="feature_icon"
      />
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
}
