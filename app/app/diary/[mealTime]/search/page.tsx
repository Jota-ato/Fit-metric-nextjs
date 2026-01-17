'use client'
import FoodsContainer from "@/src/components/app/diary/search/FoodsContainer"
import SearchBar from "@/src/components/app/diary/search/SearchBar"
import Spinner from "@/src/components/ui/Spinner"
import { food } from "@/src/types/fatSecret"
import { useState } from "react"

export default function Search() {

    const [foods, setFoods] = useState<food[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isQueryEmpty, setIsQueryEmpty] = useState(true)

    return (
        <section className="container bg-surface p-8 rounded-xl border border-border">
            <SearchBar
                setFoods={setFoods}
                setIsLoading={setIsLoading}
                setIsQueryEmpty={setIsQueryEmpty}
            />
            {isLoading ? (
                <div className="flex items-center justify-center mt-12">
                    <Spinner />
                </div>
            ) : foods.length ? 
                <FoodsContainer
                foods={foods}    
                />
                : isQueryEmpty ?
                    <p className="text-center text-3xl font-bold mt-16">
                        Busca algo
                    </p>
                : <p className="text-center text-3xl font-bold mt-16">No hay resultados</p>
            }
        </section>
    )
}