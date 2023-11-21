import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./_providers/ReduxProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./_theme/theme";

export const metadata: Metadata = {
  title: "Unsafe",
  description: "A really unsafe password manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
