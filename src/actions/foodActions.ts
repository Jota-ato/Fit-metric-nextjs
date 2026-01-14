// src/actions/foodActions.ts (o en una API Route)
'use server'
import { getAccessToken } from '@/src/lib/auth';

export async function searchFood(query: string) {
  try {
    const token = await getAccessToken();

    // Hacemos la petición a la API de Platform usando el token
    const response = await fetch(`https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=${encodeURIComponent(query)}&format=json`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Aquí usamos la "pulsera"
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Error buscando alimentos');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    return null;
  }
}