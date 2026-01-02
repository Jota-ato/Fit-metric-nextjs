'use client'
import { NotebookPen, ChartNoAxesCombined, UsersRound } from "lucide-react"
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

function FeatureCard({
    icon: Icon,
    title,
    description,
    color,
    delay
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    delay: string;
}) {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <article
            ref={elementRef}
            className={`bg-surface p-8 rounded-xl shadow-lg transition-all shadow-custom duration-700 ${isVisible
                ? `animate-jump ${delay}`
                : 'opacity-0'
                }`}
        >
            <Icon className={`size-24 ${color} mx-auto`} />
            <h3 className={`text-3xl ${color} font-bold text-center`}>{title}</h3>
            <p className="text-2xl mt-4 text-muted">{description}</p>
        </article>
    );
}

export default function Features() {
    return (
        <section className="w-full">
            <div className="container space-y-8">
                <h2 className="text-center text-6xl font-bold text-white">Características</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={NotebookPen}
                        title="Controlar tu dieta"
                        description="Registra tus comidas y bebidas para entender tus hábitos y hacer cambios saludables."
                        color="text-amber-500"
                        delay="animate-delay-100"
                    />
                    <FeatureCard
                        icon={ChartNoAxesCombined}
                        title="Conoce tus necesidades"
                        description="Entiénde como funciona el cambio y avanza a tu ritmo."
                        color="text-blue-500"
                        delay="animate-delay-400"
                    />
                    <FeatureCard
                        icon={UsersRound}
                        title="Recibe apoyo de expertos"
                        description="Recibe apoyo de expertos en nutrición y fitness para mantenerte constante."
                        color="text-teal-500"
                        delay="animate-delay-1000"
                    />
                </div>
            </div>
        </section>
    )
}