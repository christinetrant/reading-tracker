import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import {ThemeProvider} from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

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
            <ThemeProvider attribute="class">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-mauve-200 text-purple-800 dark:bg-purple-800 dark:text-peach-50`}
                >
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-4">
                            <Nav />
                            <ThemeToggle />
                        </div>
                        {children}
                    </div>
                </body>
            </ThemeProvider>
        </html>
    );
}
