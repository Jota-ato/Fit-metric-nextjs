'use client'
import { useRouter } from "next/navigation"
import { usePageStore } from "@/src/stores/PageStore"
import { useEffect } from "react"

export default function MePage() {
    const router = useRouter()
    const isBasicInfoFull = usePageStore(state => state.isBasicInfoFull)
    const hasHydrated = usePageStore(state => state._hasHydrated)

    useEffect(() => {
        if (hasHydrated && !isBasicInfoFull) {
            router.push('/app/registration')
        }
    }, [hasHydrated, isBasicInfoFull, router])

    if (!hasHydrated) {
        return (
            <section className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full size-16 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted mt-4">Cargando...</p>
                </div>
            </section>
        )
    }

    if (!isBasicInfoFull) {
        return (
            <section className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full size-16 border-b-2 border-info mx-auto mb-4"></div>
                    <p className="text-muted mt-4">Redirigiendo...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="space-y-6">
            <h1 className="text-4xl font-bold">Mi Perfil</h1>
            <p>Contenido de la página...</p>
        </section>
    )
}