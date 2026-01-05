import Link from "next/link";
import { assetPath } from "@/utils/assetPath";

export default function Footer() {
    return (
        <footer className="footer_sec">
            <div className="common_sec_width">
                <div className="container-fluid">
                    <div className="footer_sec_wrap">
                        <div className="footer_logo">
                            <img src={assetPath("images/icons/ridextra-logo.svg")} alt="" />
                        </div>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/terms-and-conditions">Terms and Conditions & Privacy Policy</Link></li>
                        </ul>
                        <div className="border-line"></div>
                        <div className="copyright_text">
                            <p>
                                Powered by RideXtra™ <br />
                                Copyright 2026, All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
