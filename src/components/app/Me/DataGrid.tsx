import { usePatientStore } from "@/src/stores/PatientStore"
import { translateSex } from "@/src/utilities"
import { FaFire, FaWeight, FaVenusMars, FaBirthdayCake, FaRuler } from "react-icons/fa"

export default function DataGrid() {

    const { age, weight, height, sex } = usePatientStore(state => state.basicInfo)
    const caloriesNeeded = usePatientStore(state => state.caloriesNeeded)

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
        <article className="w-full grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="p-8 border border-border bg-surface rounded-xl col-span-2 space-y-6 hover:border-amber-500 hover:scale-105 hover:text-amber-500 transition-all duration-300">
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
    )
}