export default function HeroSec() {
    return (
        <section className="hero_sec">
            <div className="hero_sec_content">
                <div className="common_sec_width">
                    <div className="container-fluid">
                        <h1>Book your <b>comfortable & hassle</b> free <span>ride</span>. <br /> <span><b>Coming</b></span> Soon...</h1>
                    </div>
                </div>
            </div>
            <div className="hero_sec_bg">
                <img src="/images/hero-bg.webp" alt="" className="img-fluid desktop-hero-bg" />
                <img src="/images/mobile-hero-bg.webp" alt="" className="img-fluid mobile-hero-bg" />
            </div>
        </section>
    );
}