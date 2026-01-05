import { DM_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export const metadata = {
  title: "RideXtra | Comfortable & Hassle Free Ride",
  description: "RideXtra | Book your comfortable & hassle free ride.",
};


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
