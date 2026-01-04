'use client'
import { useRouter } from "next/navigation"
import { usePageStore } from "@/src/stores/PageStore"
import { useEffect } from "react"

export default function MePage() {
    const router = useRouter()
    const isBasicInfoFull = usePageStore(state => state.isBasicInfoFull)
    useEffect(() => {
        if (!isBasicInfoFull) {
            router.push('/app/registration')
        }
    }, [isBasicInfoFull, router])

    // Mostrar loading mientras redirige
    if (!isBasicInfoFull) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full size-16 border-b-2 border-info mx-auto mb-4"></div>
                    <p className="text-muted">Redirigiendo...</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <p>Me page</p>
        </>
    )
}