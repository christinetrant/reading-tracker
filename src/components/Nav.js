import Link from "next/link";

export default function Nav() {
    return (
        <nav className="">
            <ul className="flex space-x-6 justify-center">
                <li>
                    <Link
                        href="/"
                        className="text-purple-600 hover:text-purple-700 dark:text-mauve-200 dark:hover:text-mauve-400 font-semibold"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/read"
                        className="text-purple-600 hover:text-purple-700 dark:text-mauve-200 dark:hover:text-mauve-400 font-semibold"
                    >
                        Currently Reading
                    </Link>
                </li>
                <li>
                    <Link
                        href="/read-books"
                        className="text-purple-600 hover:text-purple-700 dark:text-mauve-200 dark:hover:text-mauve-400 font-semibold"
                    >
                        Read Books
                    </Link>
                </li>
                <li>
                    <Link
                        href="/want-to-read"
                        className="text-purple-600 hover:text-purple-700 dark:text-mauve-200 dark:hover:text-mauve-400 font-semibold"
                    >
                        Want to Read
                    </Link>
                </li>
                <li>
                    <Link
                        href="/add-book"
                        className="text-purple-600 hover:text-purple-700 dark:text-mauve-200 dark:hover:text-mauve-400 font-semibold"
                    >
                        Add Book
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
