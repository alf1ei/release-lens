import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ReleaseLens", description: "Evidence-backed release notes from GitHub comparisons." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
