import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navigation/Navbar";
import SubNavbar from "./components/navigation/SubNavbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Definitely Not MySpace",
    description: "Not just a place for friends",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                    <Navbar />
                    <SubNavbar />
                    <Toaster />
                    {children}
            </body>
        </html>
    );
}
