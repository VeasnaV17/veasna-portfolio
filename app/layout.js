import "../styles/globals.css";

export const metadata = {
  title: "Veasna Vunn — Digital Marketing Specialist",
  description: "Portfolio, gallery, and blog of Veasna Vunn, Digital Marketing Specialist."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-void text-ivory">{children}</body>
    </html>
  );
}
