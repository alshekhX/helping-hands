import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/shared/SideBar";
import NavBar from "@/components/shared/NavBar";

export const metadata: Metadata = {
  title: "Helping Hands",
  description: "Helping Hands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <NavBar />
<div className="flex">
<SideBar />
<div className="mt-12 mx-auto container">{children}
</div>
</div>
       
      </body>
    </html>
  );
}
