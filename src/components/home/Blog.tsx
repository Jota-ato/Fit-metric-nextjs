'use client'
import BlogCard from "./BlogCard";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

function AnimatedBlogCard({
    post,
    delay
}: {
    post: {
        date: string;
        categories: string[];
        title: string;
        description: string;
        link: string;
    };
    delay: number;
}) {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div
            ref={elementRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
        >
            <BlogCard
                date={post.date}
                categories={post.categories}
                title={post.title}
                description={post.description}
                link={post.link}
            />
        </div>
    );
}

export default function Blog() {

    const blogPosts = [
        {
            date: "23 de marzo de 2026",
            categories: ["Entrenamiento", "Principiantes"],
            title: "¿Cómo iniciar en el gimnasio?",
            description: "Está bien no saber por dónde empezar, pero es importante tener un plan y seguirlo. Aprende a hacer ejercicio de forma correcta y que te resulte cómodo.",
            link: "/blog",
        },
        {
            date: "11 de febrero de 2025",
            categories: ["Nutrición", "Ahorro"],
            title: "Marcas calidad precio que nadie conoce",
            description: "Sabemos que la vida fit no es barata, pero hay marcas que ofrecen calidad y precio que nadie conoce. Descubre las mejores marcas para ti. ",
            link: "/blog"
        },
        {
            date: "05 de enero de 2025",
            categories: ["Recuperación", "Bienestar"],
            title: "La importancia del descanso",
            description: "El descanso es tan importante como el entrenamiento mismo. Descubre cómo optimizar tus horas de sueño para mejorar tu rendimiento y salud mental.",
            link: "/blog"
        },
    ]
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <div className="container space-y-8">
                <div className="border-b border-border-muted pb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-left mb-8">Blog</h2>
                    <p className="text-xl md:text-2xl text-left text-muted">Read our latest blog posts and stay up to date with the latest trends in fitness and nutrition.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 pt-12">
                    {blogPosts.map((post, index) => (
                        <AnimatedBlogCard
                            key={index}
                            post={post}
                            delay={index * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}