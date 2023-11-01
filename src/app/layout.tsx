import type { Metadata } from "next";
import "./globals.css";

import { Provider } from "react-redux";
import { store } from "./store";

export const metadata: Metadata = {
  title: "Tiny Pass",
  description: "A simple password manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
