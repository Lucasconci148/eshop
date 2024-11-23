import type { Metadata } from "next";
import "./globals.scss";
import GTHeader from "./components/header/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GTHeader />
        {children}
      </body>
    </html>
  );
}
