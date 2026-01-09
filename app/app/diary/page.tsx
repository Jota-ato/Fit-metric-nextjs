import CaloriesTracker from "@/src/components/app/diary/CaloriesTracker";
import MealContainer from "./MealContainer";

export default function Diary() {
    return (
        <section className="container min-h-screen">
            <h2 className="text-4xl">
                Registra tus comidas del día
            </h2>
            <CaloriesTracker />
            <MealContainer />
        </section>
    )
}