'use client'
import { useRouter } from "next/navigation"
import { usePageStore } from "@/src/stores/PageStore"
import { useEffect } from "react"
import { FaUser, FaEdit } from "react-icons/fa"
import { usePatientStore } from "@/src/stores/PatientStore"
import DataGrid from "@/src/components/app/Me/DataGrid"
import Spinner from "@/src/components/ui/Spinner"

export default function MePage() {
    const router = useRouter()
    const isBasicInfoFull = usePageStore(state => state.isBasicInfoFull)
    const { name } = usePatientStore(state => state.basicInfo)
    const hasHydrated = usePageStore(state => state._hasHydrated)

    useEffect(() => {
        if (hasHydrated && !isBasicInfoFull) {
            router.push('/app/registration')
        }
    }, [hasHydrated, isBasicInfoFull, router])

    if (!isBasicInfoFull || !hasHydrated) {
        return (
            <section className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <Spinner />
                    <p className="text-muted mt-4">Cargando...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="space-y-6 min-h-screen container">
            <h1 className="text-3xl md:text-5xl flex items-center gap-2 font-bold md:mb-16 mb-8"><FaUser />Mi Perfil <span className="text-info">({name})</span></h1>
            <DataGrid />

            <div className="md:mt-16 mt-8 p-8 border border-border rounded-xl shadow-custom flex flex-col md:flex-row gap-8 justify-between items-center">
                <p className="md:text-2xl text-xl text-muted">Editar información</p>
                <div className="flex items-center gap-6">
                    <button className="flex text-md md:text-xl items-center gap-2 bg-info/80 hover:bg-info px-4 py-6 rounded-xl cursor-pointer transition-color duration-300 font-bold">
                        <FaEdit /> Información básica
                    </button>
                    <button className="flex text-md md:text-xl items-center gap-2 bg-success/80 hover:bg-success px-4 py-6 rounded-xl cursor-pointer transition-color duration-300 font-bold">
                        <FaEdit /> Información avanzada
                    </button>
                </div>
            </div>
        </section>
    )
}