import Meal from "./Meal";
import { MealProps } from "./Meal";

export default function MealContainer() {

    const mealTimes: MealProps[] = [
        {
            title: "desayuno",
            mealTime: "breakfast"
        },
        {
            title: "almuerzo",
            mealTime: "lunch"
        },
        {
            title: "cena",
            mealTime: "dinner"
        },
        {
            title: "snacks",
            mealTime: "snacks"
        }
    ]

    return (
        <div className="md:mt-16 mt-12 space-y-10">
            {mealTimes.map((meal) => (
                <Meal
                    key={meal.mealTime}
                    title={meal.title}
                    mealTime={meal.mealTime}
                />
            ))}
        </div>
    )
}