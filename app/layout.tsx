import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamad Ur Rehman — Data Scientist & AI Engineer",
  description:
    "Portfolio of Hamad Ur Rehman — MSc Data Science, AI Engineer specialising in ML, LLMs, RAG systems and intelligent applications.",
  openGraph: {
    title: "Hamad Ur Rehman — Data Scientist & AI Engineer",
    description: "Building intelligent systems at the edge of AI.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
