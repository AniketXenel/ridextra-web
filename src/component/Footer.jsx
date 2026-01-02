export default function Footer() {
    return (
        <footer className="footer_sec">
            <div className="common_sec_width">
                <div className="container-fluid">
                    <div className="footer_sec_wrap">
                        <div className="footer_logo">
                            <img src="images/icons/ridextra-logo.svg" alt="" />
                        </div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/terms-and-conditions">Terms and Conditions & Privacy Policy</a></li>
                        </ul>
                        <div className="border-line"></div>
                        <div className="copyright_text">
                            <p>
                                Powered by RideXtra™ <br />
                                Copyright 2025, All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}