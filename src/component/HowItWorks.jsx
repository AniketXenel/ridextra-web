import { useEffect } from "react";

export default function HowItWorks() {
    return (
        <section className="How-it-works">
            <section className="how-it-works">
                <div className="container">
                    {/* Heading */}
                    <h2 className="how-title text-center">
                        How it <span className="fw-bold">Works</span>
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
                                        <h3 className="how-card-title">
                                            For <b>Riders</b>
                                        </h3>
                                        <ul className="how-list">
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
                                        <h3 className="how-card-title">
                                            For <b>Drivers</b>
                                        </h3>
                                        <ul className="how-list">
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
    );
}