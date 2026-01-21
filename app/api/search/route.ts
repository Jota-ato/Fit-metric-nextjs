import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')

    if (!query) return NextResponse.json({ error: 'Query required' }, { status: 400 });

    const userAgent = process.env.OFF_USER_AGENT || 'NutricionUniversitaria/1.0 (jcesarpro10@gmail.com)';

    try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${query}.json`, {
            headers: { 'User-Agent': userAgent },
        });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}