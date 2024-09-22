import BookshelfCSV from "@/components/BookShelfCSV";

export const metadata = {
    title: "Want to Read Books",
    description: "Display want to read books from Goodreads CSV",
};

export default function WantToReadBooks() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-custom-palette-500 dark:text-custom-palette-200">
                Want to Read Books
            </h1>
            <BookshelfCSV listType="to-read" />
        </div>
    );
}
