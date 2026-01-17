import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from "react"
import { searchFood } from "@/src/actions/foodActions"
import useDebounce from "@/src/hooks/useDebounce"
import { food } from "@/src/types/fatSecret"

interface SearchBarProps {
    setFoods: Dispatch<SetStateAction<food[]>>
}

export default function SearchBar({setFoods}: SearchBarProps) {
        const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query, 1000)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const search = async (query: string) => {
        const response = await searchFood(query)
        setFoods(response?.foods.food || [])
    }

    useEffect(() => {
        if (debouncedQuery) {
            search(debouncedQuery)
        }
    }, [debouncedQuery])

    return (
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
    )
}