import Link from "next/link";

export default function BlogCard({
    date,
    categories,
    title,
    description,
    link,
}: {
    date: string;
    categories: string[];
    title: string;
    description: string;
    link: string;
}) {
    return (
        <article className="flex flex-col justify-center space-y-12 min-h-160">
            <header style={{ flexBasis: "30%" }} className="flex items-center gap-4">
                <p className="text-muted text-xl">{date}</p>
                {categories.map((category, index) => (
                    <p key={index} className="text-sm bg-surface border border-muted text-muted px-4 py-2 rounded-full">{category}</p>
                ))}
            </header>
            <main style={{ flexBasis: "40%" }}>
                <h3 className="text-3xl font-bold mb-12">{title}</h3>
                <p className="text-muted text-lg">{description}</p>
            </main>
            <footer style={{ flexBasis: "30%" }}>
                <button className="bg-info/20 text-info px-8 py-3 rounded-full text-xl cursor-pointer hover:bg-info/40 transition-colors">
                    <Link href={link}>
                        Leer más
                    </Link>
                </button>
            </footer>
        </article>
    )
}