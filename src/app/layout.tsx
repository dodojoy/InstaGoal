import type { Metadata } from "next";
import { ThemeProvider, createTheme } from "@mui/material";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "Insta Goal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/logo-verde.svg" sizes="any" /></head>
      <body style={{ margin: 0}}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}</ThemeProvider>
      </body>
    </html>
  );
}
