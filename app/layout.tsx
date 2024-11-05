import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
const fonts = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hira Khalid portfolio",
  description: "hira khalid portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={fonts.className}
      >
        <div className="hidden md:block">
          <AnimatedCursor innerSize={8} outerSize={35} innerScale={2 } outerScale={2} outerAlpha={0} innerStyle={{ backgroundColor: "#fff" }}
          outerStyle={{ border: "3px solid #fff" }}/>
        </div>
        <ResponsiveNavbar/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
