import BookshelfCSV from "@/components/BookShelfCSV";

export const metadata = {
    title: "Read Books",
    description: "Display all read books from Goodreads CSV",
};

export default function ReadBooks() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-custom-palette-500 dark:text-custom-palette-100">
                Read Books
            </h1>
            <BookshelfCSV pageType="read" />
        </div>
    );
}
