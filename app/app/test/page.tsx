'use client'
import { searchFood } from "@/src/actions/foodActions"
import { foodInSearchFoodResult } from "@/src/types/fatSecret"
import { useState } from "react"

export default function Page() {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState<foodInSearchFoodResult[]>([])
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        
        try {
            const momentaryResult = await searchFood(query)
            console.log(momentaryResult)
            setResult(momentaryResult?.foods.food as foodInSearchFoodResult[])
        } catch (error) {
            console.error('Error buscando comida:', error)
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Test de API FatSecret</h1>
            
            <form
                className="bg-surface p-8 mt-16 rounded-xl shadow-custom border-2 border-border flex flex-col gap-6 items-center"
                onSubmit={handleSubmit}
            >
                <input
                    className="border-b border-muted text-2xl"
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button
                    className="cursor-pointer px-8 py-4 bg-primary text-white font-bold text-2xl rounded-xl disabled:opacity-50"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Buscando...' : 'Buscar'}
                </button>
            </form>

            {result && (
                <section className="flex flex-col space-y-8">
                    {result.map(food => (
                        <div
                            key={food.food_id}
                            className="bg-surface p-8 text-xl"
                        >
                            <h2 className="text-2xl">{food.food_name}</h2>
                            <p>{food.food_description}</p>
                            <p>{food.food_url}</p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    )
}