'use client'
import { MappedProduct } from "@/src/types/OFF";
import { useEffect, useState } from "react";

export default function Page() {
    const [product, setProduct] = useState<MappedProduct | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProduct = async (barcode: string) => {
            setLoading(true)
            setError(null)
            
            try {
                const response = await fetch(`/api/product?barcode=${barcode}`);

                if (!response.ok) {
                    throw new Error('Product not found or server error');
                }

                const data = await response.json();
                console.log('Product Data:', data);
                setProduct(data)

            } catch (error) {
                console.error('Error in frontend fetch:', error);
                setError(error instanceof Error ? error.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        };

        fetchProduct('1111111111111')
    }, [])

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Product Test</h1>
            
            {loading && <p>Cargando...</p>}
            
            {error && <p className="text-red-500">Error: {error}</p>}
            
            {product && (
                <div className="border p-4 rounded">
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <pre className="mt-4 text-xl bg-gray-100 p-4 rounded overflow-auto">
                        {JSON.stringify(product, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    )
}