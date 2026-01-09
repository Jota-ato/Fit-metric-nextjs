'use client'
import { useRouter } from "next/navigation"
import { usePageStore } from "@/src/stores/PageStore"
import { useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { usePatientStore } from "@/src/stores/PatientStore"
import DataGrid from "@/src/components/app/Me/DataGrid"
import EdithBar from "@/src/components/app/Me/EditBar"
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
            <h1
                className="text-3xl md:text-5xl flex items-center gap-2 font-bold md:mb-16 mb-8"
            ><FaUser />Mi Perfil <span className="text-info">({name})</span></h1>
            <DataGrid />
            <EdithBar />
        </section>
    )
}