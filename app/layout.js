import "../styles/globals.css";
import Scene3D from "../components/Scene3D";

export const metadata = {
  title: "Veasna Vunn — Digital Marketing Specialist",
  description: "Portfolio, gallery, and blog of Veasna Vunn, Digital Marketing Specialist."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-void text-ivory">
        <Scene3D />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
