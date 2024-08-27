import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";



function Navbar() {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: light').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])


    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const sun = (
        <ReactSVG src="/icons/sun.svg" />
    );

    const moon = (
        <ReactSVG src="/icons/moon.svg" />
    );

    return (
        <div className="flex w-full justify-end fixed z-40 top-0 left-0 py-5 pr-8  font dark:bg-[rgba(255,255,255,0)] backdrop-blur-[30px] shadow-[0_3px_6px_3px_rgba(0,0,0,0.4)] transition-all duration-300">
            <div className="rounded-full flex gap-1 bg-[#F4F4F4] dark:bg-[#111315] mr-4">
                <button
                    id="theme-toggle"
                    aria-label="theme-toggle"
                    className="rounded-full shadow-toggle dark:shadow-none bg-primary-800 dark:bg-transparent dark:text-[#6F767E] "
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    <div className="w-6  m-1 flex items-center gap-2">
                        {theme === "dark" ? (
                            <ReactSVG src="/icons/moon.svg" />
                        ) : (
                            <ReactSVG src="/icons/sun.svg" />
                        )}
                    </div>
                </button>
            </div>
            <ConnectButton />
        </div>
    )
}

export default Navbar;