import type { Metadata } from "next";
import "./globals.scss";
import GTHeader from "./components/header/header";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "EShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />

        <GTHeader />
        {children}
      </body>
    </html>
  );
}
