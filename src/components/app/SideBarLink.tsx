import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function SideBarLink() {
    return (
        <Link href="/app/" className="p-4 bg-surface border-border border rounded-xl flex items-center gap-2 hover:bg-background/80 transition-colors duration-300">
            <HomeIcon className="w-6 h-6" />
            <span>Inicio</span>
        </Link>
    )
}