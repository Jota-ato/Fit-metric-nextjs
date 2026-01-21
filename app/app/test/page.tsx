'use client'

export default function Page() {

    // Example usage in a component
    const fetchProduct = async (barcode: string) => {
        try {
            // Calling our internal Next.js API route
            const response = await fetch(`/api/product?barcode=${barcode}`);

            if (!response.ok) {
                throw new Error('Product not found or server error');
            }

            const data = await response.json();
            console.log('Product Data:', data);
            return data;

        } catch (error) {
            console.error('Error in frontend fetch:', error);
        }
    };


    return (
        <div className="p-8">
            
        </div>
    )
}