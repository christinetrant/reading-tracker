"use client";

import {useState, useEffect} from "react";
import {useTheme} from "next-themes";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            className="p-2 rounded-md hover:bg-peach-200 dark:hover:bg-purple-500 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? "🌞" : "🌙"}
        </button>
    );
};

export default ThemeToggle;
