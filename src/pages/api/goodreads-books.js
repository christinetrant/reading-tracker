import fs from "fs";
import path from "path";
import Papa from "papaparse";

export default async function handler(req, res) {
    try {
        const filePath = path.join(
            process.cwd(),
            "public",
            "data",
            "goodreads-library.csv"
        );
        const fileContent = fs.readFileSync(filePath, "utf8");

        Papa.parse(fileContent, {
            header: true,
            complete: (results) => {
                res.status(200).json(results.data);
            },
            error: (error) => {
                console.error("Error parsing CSV:", error);
                res.status(500).json({error: "Error parsing CSV"});
            },
        });
    } catch (error) {
        console.error("Error reading CSV file:", error);
        res.status(500).json({error: "Error reading CSV file"});
    }
}
