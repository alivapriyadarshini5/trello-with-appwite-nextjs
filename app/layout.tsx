import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trello 2.0 AI Clone",
  description: "Generated by Aliva Priyadarshini",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">{children}</body>
    </html>
  );
}
