import "./globals.css";
import Header from "@/components/config/header";
import Footerconfig from "@/components/config/footerconfig";
import Footer from "@/components/config/footer";
import JoinSection from "@/components/home/joinsection";
import Head from "./head";

export const metadata = {
  title: "SaCode",
  deScription: "Komunitas Teknologi Informasi dan Sekolah Coding di Papua.",
  openGraph: {
    title: "SaCode",
    url: "https://sacode.web.id",
    images: [
      {
        url: "assets/img/logo/logo-sacode-meta.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="no-js" lang="en">
      <Head />
      <body className="homepage-4">
        <div id="scrollUp" title="Scroll To Top">
          <i className="fas fa-arrow-up"></i>
        </div>
        <div className="main">
          <Header />
          {children}
          <JoinSection />
          <Footer />
        </div>
        <div id="example"></div>
        <Footerconfig />
      </body>
    </html>
  );
}
