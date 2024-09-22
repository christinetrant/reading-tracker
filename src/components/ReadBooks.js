import React from "react";
import BookList from "./BookList";

function ReadBooks() {
    return (
        <div>
            <h2>Read Books</h2>
            <BookList listType="read" />
        </div>
    );
}

export default ReadBooks;
