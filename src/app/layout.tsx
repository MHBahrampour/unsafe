import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./_providers/ReduxProvider";

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
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
