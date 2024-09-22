import React from "react";
import StarRating from "./StarRating";

const Card = ({book}) => {
    const isCurrentlyReading = book["Exclusive Shelf"] === "currently-reading";

    return (
        <div className="bg-custom-palette-100 p-4 rounded-lg shadow-md dark:bg-custom-palette-400">
            <div>
                <h3 className="text-lg font-semibold text-custom-palette-500 dark:text-custom-palette-100 mb-2">
                    {book.Title}
                </h3>
                <p className="text-custom-palette-400 dark:text-custom-palette-200 mb-1">
                    by {book.Author}
                </p>
                {book.Series && (
                    <p className="text-sm text-custom-palette-400 dark:text-custom-palette-200 mb-1">
                        Series: {book.Series}
                    </p>
                )}
                <div className="flex justify-between items-center mb-1">
                    <p className="text-sm text-custom-palette-400 dark:text-custom-palette-200">
                        Status:{" "}
                        {isCurrentlyReading ? "Currently Reading" : "Read"}
                    </p>
                    {book["My Rating"] && (
                        <div className="flex items-center">
                            <span className="text-sm text-custom-palette-400 dark:text-custom-palette-200 mr-2">
                                Rating:
                            </span>
                            <StarRating
                                rating={parseFloat(book["My Rating"])}
                            />
                        </div>
                    )}
                </div>
                {!isCurrentlyReading && book["Date Read"] && (
                    <p className="text-sm text-custom-palette-400 dark:text-custom-palette-200">
                        Date Read:{" "}
                        {new Date(book["Date Read"]).toLocaleDateString()}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;
