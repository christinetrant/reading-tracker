import BookshelfCSV from "@/components/BookShelfCSV";

export const metadata = {
    title: "Recent Books",
    description: "Display books read or currently reading in the last 6 months",
};

export default function Home() {
    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl text-center font-bold mb-6 text-purple-600 dark:text-mauve-200">
                    Recent Books
                </h1>
                <BookshelfCSV pageType="home" />
            </div>
        </main>
    );
}
