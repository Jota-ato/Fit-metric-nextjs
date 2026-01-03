'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useMediaQuery } from "@/src/hooks/useMediaQuery"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/src/hooks/useTheme"

export default function Navegation() {
    const { toggleTheme, theme } = useTheme()
    const pathname = usePathname()
    const isActive = (path: string) => pathname === path
    const isMobile = useMediaQuery("(max-width: 768px)")
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { path: "/", label: "Inicio" },
        { path: "/app", label: "App" },
        { path: "/blog", label: "Blog" },
        { path: "/us", label: "Nosotros" },
        { path: "/contact", label: "Contacto" },
    ]

    return (
        <header className="container flex items-center justify-between text-xl md:text-2xl relative">
            <h1 className="font-bold text-center md:text-left text-4xl text-primary"><Link href="/">Fit Metric</Link></h1>
            <nav className="flex items-center gap-10 font-bold text-2xl">
                {!isMobile && (
                    <div className="flex gap-10">
                        {navLinks.map(({ path, label }) => (
                            <Link key={path} className={`hover:text-primary hover:-translate-x-2 transition-all duration-300 ${isActive(path) ? "text-primary" : ""}`} href={path}>{label}</Link>
                        ))}
                        <button onClick={toggleTheme} className={`flex justify-end items-center cursor-pointer hover:text-primary transition-all duration-300 ${theme === "dark" ? "text-primary" : ""}`}>
                            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                    </div>
                )}
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
                                {navLinks.map(({ path, label }) => (
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