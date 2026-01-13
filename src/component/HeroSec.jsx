import { assetPath } from "@/utils/assetPath";

export default function HeroSec() {
    
    return (
        <section className="full-section">
        <section className="hero_sec">
            <section className="slide_up">
            <div className="hero_sec_content">
                <div className="common_sec_width">
                    <div className="container-fluid">
                        <h1>Book your <b>comfortable & hassle</b> free <span>ride</span>. <br /> <span><b>Coming</b></span> Soon...</h1>
                    </div>
                </div>
            </div>
            <div className="hero_sec_bg">
                <img src={assetPath("/images/hero-bg.webp")} alt="" className="img-fluid desktop-hero-bg" />
                <img src={assetPath("/images/mobile-hero-bg.webp")} alt="" className="img-fluid mobile-hero-bg" />
            </div>
            </section>
             </section>
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

        <button className="download_btn">Download RideExtra</button>
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
    backgroundImage: `url(${assetPath("/images/feature_background.png")})`
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
        src={assetPath(item.icon)}
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
      How it Works
    </h2>

    {/* Cards */}
    <div className="row justify-content-center">

      {/* Riders */}
      <div className="col-lg-6 mb-4">
        <div className="how-card">
          <div className="row align-items-center">
            
            <div className="col-md-5 text-center">
              <img
                src={assetPath("/images/left_mobile.png")}
                alt="Riders App"
                className="how-mobile-img"
              />
            </div>

            <div className="col-md-7">
              <h3 className="how-card-title"style={{marginLeft:"24px"}}>For Riders</h3>
              <ul className="how-list"style={{marginLeft:"1px"}}>
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
                src={assetPath("/images/right_mobile.png")}
                  alt="Drivers App"
                className="how-mobile-img"
              />
            </div>
            
            <div className="col-md-7">
              <h3 className="how-card-title"style={{marginLeft:"30px",}}>For Drivers</h3>
              <ul className="how-list"style={{marginLeft:"6px"}}>
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
      {/* <section className="Download-Redextra">
        <div>
            <img
           src={assetPath("/images/left_border.png")}/>
        </div>
        <div className="container">
            <div >
            Download <span style={{font:"bold"}}>RideXtra App</span> Now 
            </div>
            <div>
                Get a Ride in Minutes – Book, Track, and Pay for taxi services Anytime, Anywhere!
            </div>
            <div>
                <img  
           src={assetPath("/images/mobiles  .png")}/>
     
            
            </div>

        </div>
         <div>
            <img 
           src={assetPath("/images/right_border.png")}/>
        </div>

        

      </section> */}
        </section>
   
       </section>
     
    );
}