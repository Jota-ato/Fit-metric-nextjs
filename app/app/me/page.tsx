'use client'
import { useRouter } from "next/navigation"
import { usePageStore } from "@/src/stores/PageStore"

export default function MePage() {
    const router = useRouter()
    const isBasicInfoFull = usePageStore(state => state.isBasicInfoFull)
    if (!isBasicInfoFull) {
        router.push('/app/registration')
    }

    return (
        <>
            <p>Me page</p>
        </>
    )
}