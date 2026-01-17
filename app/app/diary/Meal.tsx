'use client'
import { MealTime } from "@/src/types"
import { BiArrowToRight } from "react-icons/bi"
import { useRouter } from "next/navigation"

export interface MealProps {
    title: string,
    mealTime: MealTime
}

export default function Meal({ title, mealTime }: MealProps) {
    
    const router = useRouter()
    const handleSearch = () => {
        router.push(`diary/${mealTime}/search`)
    }

    return (
        <article className="p-6 max-w-300 mx-auto bg-surface rounded-xl">
            <header
                className="flex justify-between text-xl md:text-2xl border-b border-border-muted pb-8"
            >
                <h3 className="capitalize">{title}</h3>
                <p className="flex items-center gap-2">Calorias: <span className="text-muted">500</span>
                <BiArrowToRight
                    className="size-8 text-muted cursor-pointer"
                    onClick={handleSearch}
                /></p>
            </header>
            <main className="grid grid-cols-3 gap-6 w-[80%] mx-auto mt-8 text-center text-xl text-muted">
                <div>
                    <h3>
                        Proteína
                    </h3>
                    <p>64g</p>
                </div>
                <div>
                    <h3>
                        Carbohidratos
                    </h3>
                    <p>64g</p>
                </div>
                <div>
                    <h3>
                        Grasas
                    </h3>
                    <p>64g</p>
                </div>
            </main>
            <footer className="mt-8">
                <p className="text-center text-xl">comidas...</p>
            </footer>
        </article>
    )
}