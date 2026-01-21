// app/api/product/route.ts
import { NextResponse } from 'next/server';

// Interface for the raw data coming from Open Food Facts (Partial)
interface RawOFFResponse {
  status: number;
  product?: {
    product_name?: string;
    brands?: string;
    image_url?: string;
    nutriments?: {
      'energy-kcal_100g'?: number;
      proteins_100g?: number;
      carbohydrates_100g?: number;
      fat_100g?: number;
    };
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const barcode = searchParams.get('barcode');

  if (!barcode) return NextResponse.json({ error: 'Barcode required' }, { status: 400 });

  const userAgent = process.env.OFF_USER_AGENT || 'NutritionApp/1.0';

  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`, {
      headers: { 'User-Agent': userAgent },
    });

    const data: RawOFFResponse = await response.json();

    // 1. Check if product exists physically in their DB
    if (data.status !== 1 || !data.product) {
       return NextResponse.json({ found: false }, { status: 404 });
    }

    const p = data.product;

    // 2. Data Mapping (The "Professional" part)
    // We transform the external messy API into our clean internal structure.
    // We also handle potential missing values with defaults (|| 0).
    const cleanProduct = {
      code: barcode,
      name: p.product_name || 'Unknown Product',
      brand: p.brands || 'Unknown Brand',
      imageUrl: p.image_url || '', // You could put a placeholder image URL here
      found: true,
      nutrition: {
        energyKcal: p.nutriments?.['energy-kcal_100g'] || 0,
        protein: p.nutriments?.proteins_100g || 0,
        carbs: p.nutriments?.carbohydrates_100g || 0,
        fat: p.nutriments?.fat_100g || 0,
      }
    };

    return NextResponse.json(cleanProduct, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}