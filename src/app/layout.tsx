"use client";
import "./globals.scss";
import GTHeader from "./components/header/header";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <ToastContainer />
          <GTHeader />
          {children}
        </body>
      </html>
    </Provider>
  );
}
