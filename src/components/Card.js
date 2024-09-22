import React from "react";
import StarRating from "./StarRating";

const Card = ({book, showReadStatus = true}) => {
    const isCurrentlyReading = book["Exclusive Shelf"] === "currently-reading";

    return (
        <div className="border-2 bg-mauve-200 border-purple-700 p-4 rounded-lg shadow-md dark:bg-purple-700 dark:border-pink-200 text-purple-600 dark:text-mauve-200">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                    {book.Title}
                    <span className="mx-2">-</span>
                    <span className="text-sm">{book.Author}</span>
                </h3>
                {book.Series && <p className="">Series: {book.Series}</p>}
                {showReadStatus && (
                    <div className="flex justify-between items-center1">
                        {/* <p className="text-sm ">
                            Status:{" "}
                            {isCurrentlyReading ? "Currently Reading" : "Read"}
                        </p> */}
                        {book["My Rating"] && book["My Rating"] > "0" && (
                            <div className="flex items-center">
                                <span className="text-sm  mr-2">Rating:</span>
                                <StarRating
                                    rating={parseFloat(book["My Rating"])}
                                />
                            </div>
                        )}
                    </div>
                )}
                {!isCurrentlyReading && book["Date Read"] && (
                    <p className="text-sm">
                        Date Read:{" "}
                        {new Date(book["Date Read"]).toLocaleDateString()}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;
