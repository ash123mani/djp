import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dihadi Janta Party — Know Your Labour Rights",
  description:
    "Rights Guaranteed by the Constitution. Protected by Labour Laws. A public resource for every worker. Funded by nothing. Sponsored by no one.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Dihadi Janta Party — Know Your Labour Rights",
    description: "Rights Guaranteed by the Constitution. Protected by Labour Laws. Know them. Use them. Protect them.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Dihadi Janta Party",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dihadi Janta Party — Know Your Labour Rights",
    description: "Rights Guaranteed by the Constitution. Protected by Labour Laws. Know them. Use them. Protect them.",
    images: ["/logo.png"],
  },
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
