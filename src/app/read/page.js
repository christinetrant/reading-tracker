import BookshelfCSV from "@/components/BookShelfCSV";

export const metadata = {
    title: "Currently Reading Books",
    description: "Display currently reading books from Goodreads CSV",
};

export default function CurrentlyReadingBooks() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-custom-palette-500 dark:text-custom-palette-100">
                Currently Reading Books
            </h1>
            <BookshelfCSV pageType="currently-reading" />
        </div>
    );
}
