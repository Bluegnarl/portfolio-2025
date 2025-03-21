"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Import the hook to manage the theme
import styles from "./ThemeToggler.module.scss"

export function ThemeToggler() {
    const { theme, setTheme } = useTheme(); // Retrieve the current theme and the function to change it
    const [mounted, setMounted] = useState(false); // State to ensure the component is mounted on the client
    const [systemTheme, setSystemTheme] = useState("light"); // State to track the system's theme preference

    // Ensures the component is mounted on the client side
    useEffect(() => {
        setMounted(true);

        // Check the system's theme preference (dark or light theme)
        const userPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setSystemTheme(userPrefersDark ? "dark" : "light"); // Set the system theme preference
    }, []);

    // If the component is not yet mounted on the client, return null to avoid hydration issues
    if (!mounted) return null;

    // Function to change theme
    const handleToggle = () => {
        if (theme === "system") {
            // If the theme is "system", toggle between dark and light based on the system's preference
            setTheme(systemTheme === "dark" ? "light" : "dark");
        } else if (theme === "dark") {
            setTheme("light"); // If the current theme is dark, switch to light
        } else {
            setTheme("dark"); // If the current theme is light, switch to dark
        }
    };

    return (
        <button className={`${styles.button} section-title`} onClick={handleToggle}>
            {theme === "system"
                ? systemTheme === "dark"
                    ? "[ light ]"
                    : "[ dark ]"
                : theme === "dark"
                ? "[ light ]"
                : "[ dark ]"}
        </button>
    );
}
