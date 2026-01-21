import { NextResponse } from 'next/server';

// Type definition for the expected query parameters
interface ProductRequest {
  barcode: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const barcode = searchParams.get('barcode');

  if (!barcode) {
    return NextResponse.json(
      { error: 'Barcode is required' }, 
      { status: 400 }
    );
  }

  const userAgent = process.env.OFF_USER_AGENT;

  if (!userAgent) {
    console.warn('OFF_USER_AGENT is not defined in environment variables.');
  }

  try {
    // We target the Open Food Facts API
    const offUrl = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`;

    const response = await fetch(offUrl, {
      method: 'GET',
      headers: {
        // Here is the requirement: The custom User-Agent
        // If undefined, it falls back to a generic string to prevent crashes, but you should set the ENV.
        'User-Agent': userAgent || 'NutricionUniversitaria/1.0 (jcesarpro10@gmail.com)',
      },
    });

    if (!response.ok) {
      throw new Error(`Open Food Facts API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error('Error fetching product data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product data' }, 
      { status: 500 }
    );
  }
}