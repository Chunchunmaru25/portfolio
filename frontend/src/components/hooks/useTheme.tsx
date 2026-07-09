import { useEffect, useState } from "react";

export default function useTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const updateTheme = () => {
            const theme = localStorage.getItem("theme");

            setIsDarkMode(
                theme === "dark" ||
                (!theme &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            );
        };

        updateTheme();

        window.addEventListener("storage", updateTheme);

        const observer = new MutationObserver(updateTheme);

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            window.removeEventListener("storage", updateTheme);
            observer.disconnect();
        };
    }, []);

    return isDarkMode;
}