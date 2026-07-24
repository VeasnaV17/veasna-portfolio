import "../styles/globals.css";
import Scene3D from "../components/Scene3D";
import { siteUrl } from "../lib/data";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Veasna Vunn — Digital Marketing Specialist",
  description: "Portfolio, gallery, and blog of Veasna Vunn, Digital Marketing Specialist.",
  openGraph: {
    title: "Veasna Vunn — Digital Marketing Specialist",
    description: "Portfolio, gallery, and blog of Veasna Vunn, Digital Marketing Specialist.",
    url: siteUrl,
    images: [{ url: `${siteUrl}/images/profile.jpg`, width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Veasna Vunn — Digital Marketing Specialist",
    description: "Portfolio, gallery, and blog of Veasna Vunn, Digital Marketing Specialist.",
    images: [`${siteUrl}/images/profile.jpg`]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-void text-ivory">
        <Scene3D />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
