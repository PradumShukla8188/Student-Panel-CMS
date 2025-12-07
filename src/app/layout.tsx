import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/custom.css"
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { ToastContainer } from 'react-toastify';
import ReactQueryWrapper from "./_wrappers/reactQueryWrapper";
const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ToastContainer position="top-center" theme="colored" />
        <ReactQueryWrapper>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
