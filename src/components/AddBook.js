"use client";

import React, {useState} from "react";

const AddBook = () => {
    const [book, setBook] = useState({
        title: "",
        image: "",
        author: "",
        status: "want-to-read",
        series: "",
        rating: "",
        dateStarted: "",
        dateFinished: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/add-book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(book),
            });
            if (response.ok) {
                alert("Book added successfully!");
                setBook({
                    title: "",
                    image: "",
                    author: "",
                    status: "want-to-read",
                    series: "",
                    rating: "",
                    dateStarted: "",
                    dateFinished: "",
                });
            } else {
                alert("Failed to add book");
            }
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Error adding book");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="image"
                    className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                >
                    Image URL
                </label>
                <input
                    type="url"
                    id="image"
                    name="image"
                    value={book.image}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="author"
                    className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                >
                    Author
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="status"
                    className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                >
                    Status
                </label>
                <select
                    id="status"
                    name="status"
                    value={book.status}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                >
                    <option value="want-to-read">Want to Read</option>
                    <option value="currently-reading">Currently Reading</option>
                    <option value="read">Read</option>
                </select>
            </div>
            <div className="mb-4">
                <label
                    htmlFor="series"
                    className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                >
                    Series
                </label>
                <input
                    type="text"
                    id="series"
                    name="series"
                    value={book.series}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                />
            </div>
            {book.status === "read" && (
                <div className="mb-4">
                    <label
                        htmlFor="rating"
                        className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                    >
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        value={book.rating}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                    />
                </div>
            )}
            <div className="mb-4">
                <label
                    htmlFor="dateStarted"
                    className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                >
                    Date Started
                </label>
                <input
                    type="date"
                    id="dateStarted"
                    name="dateStarted"
                    value={book.dateStarted}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                />
            </div>
            {book.status === "read" && (
                <div className="mb-4">
                    <label
                        htmlFor="dateFinished"
                        className="block text-sm font-medium text-purple-600 dark:text-peach-100"
                    >
                        Date Finished
                    </label>
                    <input
                        type="date"
                        id="dateFinished"
                        name="dateFinished"
                        value={book.dateFinished}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 dark:bg-purple-500 dark:text-peach-100"
                    />
                </div>
            )}
            <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 dark:bg-peach-300 dark:text-purple-600 dark:hover:bg-peach-400"
            >
                Add Book
            </button>
        </form>
    );
};

export default AddBook;
