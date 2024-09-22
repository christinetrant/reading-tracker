import BookshelfCSV from "@/components/BookShelfCSV";

export const metadata = {
    title: "Recent Books",
    description: "Display books read or currently reading in the last 6 months",
};

export default function Home() {
    return (
        <main className="min-h-screen bg-custom-palette-100 py-12 dark:bg-custom-palette-500">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-custom-palette-500 dark:text-custom-palette-100">
                    Recent Books
                </h1>
                <BookshelfCSV pageType="home" />
            </div>
        </main>
    );
}
