// Styles
import "./globals.css";

// Fonts
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ weight: ["400", "500", "700"], preload: false });

export const metadata = {
  title: "Multi step form",
  description: "Multi step form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
