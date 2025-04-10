'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 text-sm rounded border border-text hover:bg-highlight"
        >
        {resolvedTheme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
}