'use client'

import Link from "next/link";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/src/hooks/useTheme";
import { Menu, X } from "lucide-react";
import { Sun, Moon } from "lucide-react";

export default function SideBar() {

    const { toggleTheme, theme } = useTheme()
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path
    const isMobile = useMediaQuery("(max-width: 468px)")
    const isTablet = useMediaQuery("(max-width: 768px)")
    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const [isOpen, setIsOpen] = useState(false)
    const sideBarLinks = [
        { path: "/", label: "Inicio" },
        { path: "/app", label: "App" },
        { path: "/me", label: "Yo" },
        { path: "/reports", label: "Informes" }
    ]


    return (
        <header style={{ flexBasis: "20rem" }} className="flex md:flex-col justify-between items-center p-16 text-xl md:text-2xl relative">
            <h1 className="font-bold text-center md:text-left text-4xl text-primary lg:mb-20"><Link href="/">Fit Metric</Link></h1>
            <nav className="flex gap-10 font-bold text-2xl justify-between items-center lg:items-start lg:justify-start">
                {isDesktop && (
                    <div className="flex flex-col gap-10">
                        {sideBarLinks.map(({ path, label }) => (
                            <Link href={path} key={path} className={`p-4 bg-surface border-border border rounded-xl flex items-center gap-2 hover:bg-background/80 transition-colors duration-300 ${isActive(path) ? "text-primary" : ""}`}>
                                <span>{label}</span>
                            </Link>
                        ))}
                        <button onClick={toggleTheme} className={`flex justify-end items-center cursor-pointer hover:text-primary transition-all duration-300 ${theme === "dark" ? "text-primary" : ""}`}>
                            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                    </div>
                )}
                {
                    isTablet && (
                        <div className="flex gap-10">
                            {sideBarLinks.map(({ path, label }) => (
                                <Link href={path} key={path} className={`p-4 bg-surface border-border border rounded-xl flex items-center gap-2 hover:bg-background/80 transition-colors duration-300 ${isActive(path) ? "text-primary" : ""}`}>
                                    <span>{label}</span>
                                </Link>
                            ))}
                            <button onClick={toggleTheme} className={`flex justify-end items-center cursor-pointer hover:text-primary transition-all duration-300 ${theme === "dark" ? "text-primary" : ""}`}>
                                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                        </div>
                    )
                }
                {isMobile && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex justify-end items-center cursor-pointer hover:text-primary transition-all duration-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}

                {isMobile && (
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                            }`}
                        style={{ position: "absolute", right: 0, top: 80 }}
                    >
                        <nav className="bg-surface rounded-lg border border-border-muted shadow-custom p-6 text-text-main">
                            <div className="flex flex-col gap-6 font-bold text-2xl">
                                {sideBarLinks.map(({ path, label }) => (
                                    <Link
                                        key={path}
                                        className={`hover:text-primary transition-colors duration-300 ${isActive(path) ? "text-primary" : ""}`}
                                        href={path}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                ))}
                                <button onClick={toggleTheme} className={`flex justify-start items-center cursor-pointer hover:text-primary transition-all duration-300 ${theme === "dark" ? "text-primary" : ""}`}>
                                    {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </nav>
        </header>
    )
}