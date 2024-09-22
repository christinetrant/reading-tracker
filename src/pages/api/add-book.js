import fs from "fs";
import path from "path";
import Papa from "papaparse";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method Not Allowed"});
    }

    try {
        const filePath = path.join(
            process.cwd(),
            "public",
            "data",
            "goodreads-library.csv"
        );
        const fileContent = fs.readFileSync(filePath, "utf8");

        const results = Papa.parse(fileContent, {header: true});
        const books = results.data;

        const newBook = {
            "Book Id": String(Date.now()),
            Title: req.body.title,
            Author: req.body.author,
            ISBN: "",
            "My Rating": req.body.rating || "",
            "Average Rating": "",
            Publisher: "",
            Binding: "",
            "Number of Pages": "",
            "Year Published": "",
            "Original Publication Year": "",
            "Date Read": req.body.dateFinished || "",
            "Date Added": new Date().toISOString().split("T")[0],
            Bookshelves: "",
            "Bookshelves with positions": "",
            "Exclusive Shelf": req.body.status,
            "My Review": "",
            Spoiler: "",
            "Private Notes": "",
            "Read Count": "",
            "Recommended For": "",
            "Recommended By": "",
            "Owned Copies": "",
            "Original Purchase Date": "",
            "Original Purchase Location": "",
            Condition: "",
            "Condition Description": "",
            BCID: "",
            Image: req.body.image || "",
            Series: req.body.series || "",
            "Date Started": req.body.dateStarted || "",
        };

        books.push(newBook);

        const csv = Papa.unparse(books);
        fs.writeFileSync(filePath, csv);

        res.status(200).json({message: "Book added successfully"});
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({message: "Error adding book"});
    }
}
