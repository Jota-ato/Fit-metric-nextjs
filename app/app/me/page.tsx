'use client'
import { useRouter } from "next/navigation"
import { usePageStore } from "@/src/stores/PageStore"
import { useEffect } from "react"
import { usePatientStore } from "@/src/stores/PatientStore"
import { translateSex } from "@/src/utilities"
import { FaFire, FaUser, FaWeight, FaVenusMars, FaBirthdayCake, FaRuler } from "react-icons/fa"

export default function MePage() {
    const router = useRouter()
    const isBasicInfoFull = usePageStore(state => state.isBasicInfoFull)
    const { age, weight, height, name, sex } = usePatientStore(state => state.basicInfo)
    const caloriesNeeded = usePatientStore(state => state.caloriesNeeded)
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
                    <div className="animate-spin rounded-full size-16 border-b-2 border-info mx-auto mb-4"></div>
                    <p className="text-muted mt-4">Cargando...</p>
                </div>
            </section>
        )
    }

    const dataGridInfo = [
        {
            title: 'Peso',
            value: `${weight}kg`,
            icon: <FaWeight />
        },
        {
            title: 'Altura',
            value: `${height}cm`,
            icon: <FaRuler />
        },
        {
            title: 'Sexo',
            value: translateSex(sex),
            icon: <FaVenusMars />
        },
        {
            title: 'Edad',
            value: `${age} años`,
            icon: <FaBirthdayCake />
        }
    ]

    return (
        <section className="space-y-6 h-full container">
            <h1 className="text-3xl md:text-5xl flex items-center gap-2 font-bold md:mb-16 mb-8"><FaUser />Mi Perfil <span className="text-info">({name})</span></h1>
            <article className="w-full grid grid-cols-2 md:grid-cols-3 gap-8">

                <div className="p-8 border border-border bg-surface rounded-xl col-span-2 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><FaFire className="md:size-10 size-8 text-amber-500" />Calorias necesarias</h2>
                    <p className="text-xl md:text-2xl font-bold text-muted">{Math.round(caloriesNeeded)} kcal</p>
                </div>
                {dataGridInfo.map((info, index) => (
                    <div key={index} className="p-8 border border-border bg-surface rounded-xl space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                            {info.icon}
                            {info.title}
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-muted">{info.value}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}