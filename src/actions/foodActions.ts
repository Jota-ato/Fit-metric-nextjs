// src/actions/foodActions.ts (o en una API Route)
'use server'
import { getAccessToken } from '@/src/lib/auth'
import { fatSecretGetFoodResult, fatSecretSearchFoodResult } from '../types/fatSecret'

export async function searchFood(query: string): Promise<fatSecretSearchFoodResult | null> {
    try {
        const token = await getAccessToken()

        const response = await fetch(`https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=${encodeURIComponent(query)}&format=json`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            cache: 'no-store'
        })

        if (!response.ok) {
            throw new Error('Error buscando alimentos')
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getFoodById(id: string): Promise<fatSecretGetFoodResult | null> {
    try {
        const token = await getAccessToken()

        const params = new URLSearchParams({
            method: 'food.get.v5', 
            food_id: id,
            format: 'json'
        })

        const response = await fetch(`https://platform.fatsecret.com/rest/server.api?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 86400 } 
        })

        if (!response.ok) {
            throw new Error(`Error obteniendo detalles: ${response.statusText}`)
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error("Error en getFoodById:", error)
        return null
    }
}