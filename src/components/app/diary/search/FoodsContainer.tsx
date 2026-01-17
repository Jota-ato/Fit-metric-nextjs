import { food } from "@/src/types/fatSecret"

interface FoodsContainerProps {
    foods: food[]
}

export default function FoodsContainer({ foods }: FoodsContainerProps) {
    return (
        <div className="mt-16 w-[80%] mx-auto space-y-6">
            {foods.map(f => (
                <div key={f.food_id}>
                    {f.food_description}
                </div>
            ))}
        </div>
    )
}