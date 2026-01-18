import { food } from "@/src/types/fatSecret"
import { translateFoodDescription } from "@/src/utilities"

interface FoodsContainerProps {
    foods: food[]
}

export default function FoodsContainer({ foods }: FoodsContainerProps) {
    return (
        <div className="mt-16 w-[80%] mx-auto space-y-8">
            {foods.map(f => (
                <div
                    key={f.food_id}
                    className="bg-surface p-8 rounded-lg shadow-custom text-xl hover:scale-105 hover:border-info hover:text-info transition-all duration-300 border border-border cursor-pointer"
                >
                    <div>
                        <h2 className="text-2xl">
                            {f.food_name}
                        </h2>
                        <p className="text-muted">{translateFoodDescription(f.food_description)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}