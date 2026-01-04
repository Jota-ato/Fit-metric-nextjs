'use client'

import Link from "next/link";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/src/hooks/useTheme";
import { Menu, X, Sun, Moon, LayoutDashboard, User, FileText, Home } from "lucide-react";

export default function SideBar() {
    const { toggleTheme, theme } = useTheme();
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    const isTablet = useMediaQuery("(min-width: 500px) and (max-width: 1023px)");
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    const [isOpen, setIsOpen] = useState(false);

    const sideBarLinks = [
        { path: "/", label: "Inicio", icon: Home },
        { path: "/app", label: "Dashboard", icon: LayoutDashboard },
        { path: "/app/me", label: "Perfil", icon: User },
        { path: "/app/reports", label: "Informes", icon: FileText },
    ];


    // Desktop Sidebar (Vertical - 200px width)
    if (isDesktop) {
        return (
            <aside className="fixed left-0 top-0 h-screen w-[200px] bg-surface border-r border-border-muted flex flex-col">
                <div className="p-8">
                    <h1 className="font-bold text-4xl text-primary mb-16">
                        <Link href="/">Fit Metric</Link>
                    </h1>

                    <nav className="space-y-6">
                        {sideBarLinks.map(({ path, label, icon: Icon }) => (
                            <Link
                                key={path}
                                href={path}
                                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${isActive(path)
                                    ? "bg-primary text-white"
                                    : "hover:bg-background/80"
                                    }`}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Theme toggle at bottom */}
                <div className="mt-auto p-6">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-background/80 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        <span className="font-medium">
                            {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
                        </span>
                    </button>
                </div>
            </aside>
        );
    }

    // Tablet Header (Horizontal)
    if (isTablet) {
        return (
            <header className="sticky top-0 z-50 w-full bg-surface border-b border-border">
                <div className="flex items-center justify-between p-8">
                    <h1 className="font-bold text-2xl text-primary">
                        <Link href="/">Fit Metric</Link>
                    </h1>

                    <nav className="flex items-center gap-6">
                        {sideBarLinks.map(({ path, label, icon: Icon }) => (
                            <Link
                                key={path}
                                href={path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(path)
                                    ? "bg-primary text-white"
                                    : "hover:bg-background/80"
                                    }`}
                            >
                                <Icon size={18} />
                                <span>{label}</span>
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-background/80 transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </nav>
                </div>
            </header>
        );
    }

    // Mobile Header (with hamburger menu)
    return (
        <header className="sticky top-0 z-50 w-full bg-surface border-b border-border">
            <div className="flex items-center justify-between p-8">
                <h1 className="font-bold text-3xl text-primary">
                    <Link href="/">Fit Metric</Link>
                </h1>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg hover:bg-background/80 transition-colors duration-300"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="p-4 space-y-2">
                    {sideBarLinks.map(({ path, label, icon: Icon }) => (
                        <Link
                            key={path}
                            href={path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-all duration-300 ${isActive(path)
                                ? "bg-primary text-white"
                                : "hover:bg-background/80"
                                }`}
                        >
                            <Icon size={20} />
                            <span>{label}</span>
                        </Link>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-background/80 transition-colors duration-300"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        <span className="font-medium">
                            {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
}