import { useEffect } from "react";

export default function DownloadSection() {
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
         <section className="download-section position-relative py-5">
          {/* LEFT GRADIENT BORDER */}
          <div className="download-border download-border--left"></div>

          {/* RIGHT GRADIENT BORDER */}
          <div className="download-border download-border--right"></div>

          <div className="container position-relative">

            {/* Text Box */}
            <div className="text-box p-4" style={{ maxWidth: '600px' }}>
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

    )
}