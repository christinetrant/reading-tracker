import React from "react";
import BookList from "./BookList";

function WantToReadBooks() {
    return (
        <div>
            <h2>Want to Read Books</h2>
            <BookList listType="want-to-read" />
        </div>
    );
}

export default WantToReadBooks;
