'use client'
import useDebounce from "@/src/hooks/useDebounce"
import { useParams } from "next/navigation"
import { useEffect, useState, type ChangeEvent } from "react"

export default function Search() {

    const { mealTime } = useParams()
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query, 1000)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        if (debouncedQuery) {
            console.log(debouncedQuery)
        }
    }, [debouncedQuery])

    return (
        <section className="container bg-surface p-8 rounded-xl border border-border">
            <header>
                <form>
                    <fieldset className="flex items-center justify-between gap-8 w-[90%] mx-auto">
                        <label className="text-xl">X</label>
                        <input
                            style={{ flex: 1 }}
                            className="text-xl border-2 border-border rounded-full py-2 px-4 focus:outline-0"
                            type="text"
                            value={query}
                            onChange={handleChange}
                        />
                    </fieldset>
                </form>
            </header>
        </section>
    )
}