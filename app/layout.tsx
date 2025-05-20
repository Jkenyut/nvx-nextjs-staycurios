import "./globals.css";
import {Roboto} from "next/font/google";
import Header from "./components/layout/Header";

const roboto = Roboto({weight: "400", subsets: ["latin"]});

export const metadata = {
    title: "StayCurios",
    openGraph: {
        title: "StayCurios",
        description: "StayCurios is platform portofolio and counsultant",
        images: [
            {
                url: "https://nextjs.org/og.png",
                width: 800,
                height: 600,
            },
        ],
    },
    icons: {
        icon: "/public/Logo.png",
        shortcut: "/public/Logo.png",
        apple: "/public/Logo.png",
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full mx-4 md:mx-16 scroll-smooth">
        <body className={roboto.className}>
        <Header>{children}</Header>
        </body>
        </html>
    );
}
