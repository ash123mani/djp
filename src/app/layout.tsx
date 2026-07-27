import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dihadi Janta Party — Know Your Labour Rights",
  description:
    "Rights Guaranteed by the Constitution. Protected by Labour Laws. Know them. Use them. Protect them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F4EBD7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
