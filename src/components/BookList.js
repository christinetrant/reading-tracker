import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import {collection, query, where, onSnapshot} from "firebase/firestore";

function BookList({listType}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "books"),
            where("status", "==", listType)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const booksData = [];
            querySnapshot.forEach((doc) => {
                booksData.push({id: doc.id, ...doc.data()});
            });
            setBooks(booksData);
        });

        return () => unsubscribe();
    }, [listType]);

    return (
        <div>
            <h2>{listType === "read" ? "Read Books" : "Want to Read Books"}</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
