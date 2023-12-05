import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/Store";
import LayoutChild from "./LayoutChild";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Showcases my proficiency and expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <LayoutChild children={children} />
      </ThemeContextProvider>
    </html>
  );
}
