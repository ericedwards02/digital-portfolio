import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { Socials } from "@/components/socials";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eric's eccentricities",
  description: "dev and design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased bg-ctp-base`}>
        <div className="flex lg:flex-row not-lg:flex-col justify-between">
          <div className="flex not-sm:flex-col m:flex-row ">
            <Image
              src="/ERICEDWARDS.svg"
              alt="Eric Edwards"
              width={1600}
              height={100}
            />
            <span className="text-ctp-red text-2xl font-bold cursor-default">
              dev and design portfolio
            </span>
          </div>
          <Socials />
        </div>
        <h2 className="mt-0 text-center text-lg text-ctp-subtext1 lg:mb-3 cursor-default">
          &quot;Next time is next time, now is now!&quot;
          <i> - Hirayama (Perfect Days, 2023)</i>
        </h2>
        <Analytics />
        <div id="document" className="font-sans max-w-[1600px] p-5">
          <div className="flex lg:flex-row not-lg:flex-col justify-center">
            <Nav />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
