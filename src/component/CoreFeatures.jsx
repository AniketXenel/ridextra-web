import { useEffect } from "react";

export default function CoreFeatures() {  
    return(
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
    )
}