"use client";
import {useState, useEffect} from "react";
import Card from "./Card";

const BookshelfCSV = ({pageType}) => {
    const [groupedBooks, setGroupedBooks] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/goodreads-books");
                const books = await response.json();

                const filteredBooks = filterBooks(books, pageType);
                const grouped = groupBooks(filteredBooks, pageType);
                setGroupedBooks(grouped);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, [pageType]);

    console.log(groupedBooks);

    const filterBooks = (books, pageType) => {
        switch (pageType) {
            case "home":
                const sixMonthsAgo = new Date();
                sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
                return books.filter((book) => {
                    const dateRead = new Date(book["Date Read"]);
                    return (
                        book["Exclusive Shelf"] === "currently-reading" ||
                        (book["Exclusive Shelf"] === "read" &&
                            dateRead >= sixMonthsAgo)
                    );
                });
            case "read":
                return books.filter(
                    (book) => book["Exclusive Shelf"] === "read"
                );
            case "currently-reading":
                return books.filter(
                    (book) => book["Exclusive Shelf"] === "currently-reading"
                );
            default:
                return books;
        }
    };

    const groupBooks = (books, pageType) => {
        if (pageType === "home") {
            return books.reduce((acc, book) => {
                if (book["Exclusive Shelf"] === "currently-reading") {
                    if (!acc["Currently Reading"]) {
                        acc["Currently Reading"] = [];
                    }
                    acc["Currently Reading"].push(book);
                } else {
                    const dateRead = new Date(book["Date Read"]);
                    const key = dateRead.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    });
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(book);
                }
                return acc;
            }, {});
        } else {
            // For other pages, group all books under a single key
            return {
                [pageType === "currently-reading"
                    ? "Currently Reading"
                    : "Read Books"]: books,
            };
        }
    };

    return (
        <div className="bg-custom-palette-200 p-6 rounded-lg shadow-lg dark:bg-custom-palette-500">
            {loading ? (
                <p className="text-xl font-semibold text-custom-palette-500 dark:text-custom-palette-100">
                    Loading books...
                </p>
            ) : (
                <>
                    {Object.keys(groupedBooks).length > 0 ? (
                        Object.entries(groupedBooks).map(
                            ([groupTitle, books]) => (
                                <div key={groupTitle} className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-custom-palette-500 dark:text-custom-palette-100">
                                        {groupTitle}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {books.map((book, index) => (
                                            <Card key={index} book={book} />
                                        ))}
                                    </div>
                                </div>
                            )
                        )
                    ) : (
                        <p className="text-xl font-semibold text-custom-palette-500 dark:text-custom-palette-100">
                            No books found.
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default BookshelfCSV;
