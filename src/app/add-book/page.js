import dynamic from "next/dynamic";

const AddBook = dynamic(() => import("@/components/AddBook"), {ssr: false});

export const metadata = {
    title: "Add New Book",
    description: "Add a new book to your Goodreads library",
};

export default function AddBookPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-custom-palette-500 dark:text-custom-palette-100">
                Add New Book
            </h1>
            <AddBook />
        </div>
    );
}
