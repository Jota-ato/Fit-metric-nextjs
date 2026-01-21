'use client'
import { useParams } from "next/navigation"
import { getFoodById } from "@/src/actions/foodActions"
import { useEffect, useState } from "react"
import { fatSecretGetFoodResult } from "@/src/types/fatSecret"

export default function FoodDetail() {

    const { id } = useParams()
    // Inicializa con null para saber cuando no hay datos aún
    const [activeFood, setActiveFood] = useState<fatSecretGetFoodResult>({} as fatSecretGetFoodResult)

    useEffect(() => {
        if (!id) return;

        // 1. Definimos la función async DENTRO del efecto
        const fetchData = async () => {
            try {
                // 2. Aquí hacemos el await real
                const data = await getFoodById(id as string)
                
                // 3. Guardamos el DATO (no la promesa)
                console.log("Datos recibidos:", data) // Para depurar
                setActiveFood(data!)
            } catch (error) {
                console.error("Error cargando alimento:", error)
            }
        }

        // 4. Ejecutamos la función
        fetchData()
        
    }, [id]) // Quitamos setActiveFood de las dependencias, no es necesario

    return (
        <section className="p-8 wrap-break-word">
            <h1 className="text-2xl font-bold mb-4">Resultado:</h1>
            {activeFood ? (
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-xl">
                    {JSON.stringify(activeFood.food, null, 2)}
                </pre>
            ) : (
                <p>Cargando...</p>
            )}
        </section>
    )
}