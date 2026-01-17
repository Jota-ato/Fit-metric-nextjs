'use client'
import SearchBar from "@/src/components/app/diary/search/SearchBar"
import { food } from "@/src/types/fatSecret"
import { useState } from "react"

export default function Search() {

    const [foods, setFoods] = useState<food[]>([])

    return (
        <section className="container bg-surface p-8 rounded-xl border border-border">
            <SearchBar
                setFoods={setFoods}
            />
            {foods.length && (
                foods.map((f) => (
                    <div key={f.food_id}>
                        {f.food_name}
                    </div>
                )
            ))}
        </section>
    )
}