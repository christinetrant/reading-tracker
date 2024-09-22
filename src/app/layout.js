import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Goodreads Books",
    description: "Display books from Goodreads CSV",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-palette-100 text-custom-palette-500 dark:bg-custom-palette-500 dark:text-custom-palette-100`}
            >
                <div className="container mx-auto px-4 py-8">
                    <Nav />
                    {children}
                </div>
            </body>
        </html>
    );
}
