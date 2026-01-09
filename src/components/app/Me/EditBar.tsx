'use client'
import { FaEdit } from "react-icons/fa" 
import { useRouter } from "next/navigation"

export default function EdithBar() {

    const router = useRouter()

    const handleClick = (editingInfo: string) => {
        router.push(`/app/me/edit/${editingInfo}`)
    }

    return (
        <div className="md:mt-16 mt-8 p-8 border border-border rounded-xl shadow-custom flex flex-col md:flex-row gap-8 justify-between items-center">
            <p className="md:text-2xl text-xl text-muted">Editar información</p>
                <div className="flex items-center gap-6">
                <button
                    className="flex text-md md:text-xl items-center gap-2 bg-info/80 hover:bg-info px-4 py-6 rounded-xl cursor-pointer transition-color duration-300 font-bold"
                    onClick={() => handleClick('basicInfo')}
                >
                        <FaEdit /> Información básica
                    </button>
                <button
                    className="flex text-md md:text-xl items-center gap-2 bg-success/80 hover:bg-success px-4 py-6 rounded-xl cursor-pointer transition-color duration-300 font-bold"
                    onClick={() => handleClick('advancedInfo')}
                >
                        <FaEdit /> Información avanzada
                    </button>
                </div>
        </div>
    )
}