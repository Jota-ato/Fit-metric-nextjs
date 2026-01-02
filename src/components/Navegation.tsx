import Link from "next/link"

export default function Navegation() {
    return (
        <section className="w-[85%] max-w-480 mx-auto py-8 flex justify-between text-xl md:text-2xl">
            <h1><Link href="/">Fit Metric</Link></h1>
            <nav className="flex gap-10 font-bold">
                <Link className="hover:text-primary hover:-translate-x-2 transition-all duration-300" href="/">Inicio</Link>
                <Link className="hover:text-primary hover:-translate-x-2 transition-all duration-300" href="/app">App</Link>
                <Link className="hover:text-primary hover:-translate-x-2 transition-all duration-300" href="/blog">Blog</Link>
                <Link className="hover:text-primary hover:-translate-x-2 transition-all duration-300" href="/nosotros">Nosotros</Link>
                <Link className="hover:text-primary hover:-translate-x-2 transition-all duration-300" href="/contacto">Contacto</Link>
            </nav>
        </section>
    )
}