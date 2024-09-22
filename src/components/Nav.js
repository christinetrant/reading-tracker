import Link from "next/link";

export default function Nav() {
    return (
        <nav className="mb-8 bg-custom-palette-200 p-4 rounded-lg shadow-md dark:bg-custom-palette-400">
            <ul className="flex space-x-6 justify-center">
                <li>
                    <Link
                        href="/"
                        className="text-custom-palette-500 hover:text-custom-palette-600 dark:text-custom-palette-100 dark:hover:text-custom-palette-200 font-semibold"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/read"
                        className="text-custom-palette-500 hover:text-custom-palette-600 dark:text-custom-palette-100 dark:hover:text-custom-palette-200 font-semibold"
                    >
                        Currently Reading
                    </Link>
                </li>
                <li>
                    <Link
                        href="/read-books"
                        className="text-custom-palette-500 hover:text-custom-palette-600 dark:text-custom-palette-100 dark:hover:text-custom-palette-200 font-semibold"
                    >
                        Read Books
                    </Link>
                </li>
                <li>
                    <Link
                        href="/want-to-read"
                        className="text-custom-palette-500 hover:text-custom-palette-600 dark:text-custom-palette-100 dark:hover:text-custom-palette-200 font-semibold"
                    >
                        Want to Read
                    </Link>
                </li>
                <li>
                    <Link
                        href="/add-book"
                        className="text-custom-palette-500 hover:text-custom-palette-600 dark:text-custom-palette-100 dark:hover:text-custom-palette-200 font-semibold"
                    >
                        Add Book
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
