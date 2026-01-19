import { useState, useEffect, useCallback, ChangeEvent, Dispatch, SetStateAction } from "react"
import { searchFood } from "@/src/actions/foodActions"
import useDebounce from "@/src/hooks/useDebounce"
import { foodInSearchFoodResult } from "@/src/types/fatSecret"
import { LuX } from "react-icons/lu"
import { useRouter } from "next/navigation"

interface SearchBarProps {
    setFoods: Dispatch<SetStateAction<foodInSearchFoodResult[]>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setIsQueryEmpty: Dispatch<SetStateAction<boolean>>
}

export default function SearchBar({setFoods, setIsLoading, setIsQueryEmpty}: SearchBarProps) {
    const [query, setQuery] = useState("")
    const debouncedQuery = useDebounce(query, 1000)
    const router = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)
        setIsQueryEmpty(false)
        setQuery(e.target.value)
    }
    const handleReturn = () => {
        router.back()
    }

    const search = useCallback(async (query: string) => {
        const response = await searchFood(query)
        setIsLoading(false)
        setFoods(response?.foods.food || [])
    }, [setFoods, setIsLoading])

    useEffect(() => {
        if (debouncedQuery) {
            search(debouncedQuery)
        }
    }, [debouncedQuery, search])

    useEffect(() => {
        if (!query) {
            setIsQueryEmpty(true)
            setIsLoading(false)
            setFoods([])
        }
    }, [query])

    return (
        <header>
            <form>
                <fieldset className="flex items-center justify-between gap-4 w-[90%] mx-auto">
                    <label
                        className="text-3xl font-bold cursor-pointer"
                        onClick={handleReturn}
                    ><LuX/></label>
                    <input
                        style={{ flex: 1 }}
                        className="text-xl md:text-2xl border-2 border-border rounded-full py-2 px-4 focus:outline-0"
                        type="text"
                        value={query}
                        onChange={handleChange}
                    />
                </fieldset>
            </form>
        </header>
    )
}