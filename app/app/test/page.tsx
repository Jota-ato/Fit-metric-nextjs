// src/app/test/page.tsx (o la ruta que estés usando)
import { searchFood } from "@/src/actions/foodActions"

// 1. Convertimos el componente en ASYNC
export default async function Page() {

    // 2. Usamos AWAIT porque searchFood devuelve una Promesa
    const result = await searchFood('manzana');

    // 3. Imprimimos en la consola del SERVIDOR (Mira tu terminal de VS Code)
    console.log("Resultado de FatSecret:", result);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Test de API FatSecret</h1>
            
            {/* 4. Mostramos el JSON crudo en pantalla para verlo fácil */}
            <div className="bg-gray-100 p-4 rounded overflow-auto max-h-[500px]">
                <pre className="text-sm font-mono text-black">
                    {JSON.stringify(result, null, 2)}
                </pre>
            </div>
        </div>
    )
}