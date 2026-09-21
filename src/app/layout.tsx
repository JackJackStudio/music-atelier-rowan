import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M.A.R. — Music Atelier Rowan",
  description: "Original music, imagined worlds, and stories told through cinematic music and visual storytelling.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
