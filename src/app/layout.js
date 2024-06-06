import { Inter } from "next/font/google";
import "./globals.css";
import PublicNav from "@/components/navbar/publicNav";
import { WebVitals } from "./_components/web-vitals";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kantorku",
  description: "Aplikasi ....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <body className={inter.className}>
        {/* <div className="px-4 py-5">
          <PublicNav />
        </div>
        <div className="px-[100px]">{children}</div> */}
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
