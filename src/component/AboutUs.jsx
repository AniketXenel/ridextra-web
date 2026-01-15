"use client";
// import { assetPath } from "@/utils/assetPath";
import { useEffect } from "react";
import CoreFeatures from "./CoreFeatures";
import HowItWorks from "./HowItWorks";
import DownloadSection from "./DowloadSection";

export default function AboutUs() {


  
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
<CoreFeatures/>
<HowItWorks/>
<DownloadSection/>
       
       



      </section>

  )
}