// src/components/RegistationForm.tsx
'use client'
import { useForm, type SubmitHandler } from "react-hook-form"
import type { GenderType, PatientBasicInfo } from "../../../types"
import InputContainter from "./InputContainter"
import FormContainer from "./FormContainer"
import { usePatientStore } from "../../../stores/PatientStore"
import { usePageStore } from "@/src/stores/PageStore"
import { usePathname, useRouter } from "next/navigation"

export default function RegistationForm() {

    const { name, weight, height, age, sex } = usePatientStore(state => state.basicInfo)
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<PatientBasicInfo>({
        defaultValues: {
            name: name || "",
            weight: weight || undefined,
            height: height || undefined,
            age: age || undefined,
            sex: sex || "" as GenderType
        }
    })
    const setPatientData = usePatientStore(state => state.setPatientData)
    const setIsFullBasicInfo = usePageStore(state => state.setIsFullBasicInfo)
    const pathname = usePathname()

    const onSubmit: SubmitHandler<PatientBasicInfo> = (data) => {
        setPatientData({ basicInfo: data })
        setIsFullBasicInfo(data)
        if (pathname !== '/app/registration') {
            router.push('/app/me')
        }
    }

    return (
        <FormContainer>
            {/* 2. Simplificamos la llamada a handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="space-y-8">
                    <legend className="text-4xl font-bold">Información Personal</legend>

                    <InputContainter
                        label="Nombre"
                        placeholder="Tu nombre"
                        error={errors.name?.message}
                        {...register("name", { required: "El nombre es obligatorio" })}
                    />

                    <InputContainter
                        label="Peso (kg)"
                        type="number"
                        placeholder="70"
                        error={errors.weight?.message}
                        {...register("weight", {
                            required: "Indica tu peso",
                            min: { value: 20, message: "Mínimo 20kg" },
                            valueAsNumber: true
                        })}
                    />

                    <InputContainter
                        label="Altura (cm)"
                        type="number"
                        placeholder="180"
                        error={errors.height?.message}
                        {...register("height", {
                            required: "Indica tu altura",
                            min: { value: 100, message: "Mínimo 100cm" },
                            valueAsNumber: true
                        })}
                    />

                    <InputContainter
                        label="Edad"
                        type="number"
                        placeholder="25"
                        error={errors.age?.message}
                        {...register("age", {
                            required: "Indica tu edad",
                            min: { value: 12, message: "Debes ser mayor de 12 años" },
                            valueAsNumber: true
                        })}
                    />

                    <div className="space-y-4">
                        <label htmlFor="sex" className="block text-2xl font-semibold">Género</label>
                        <select
                            id="sex"
                            className={`text-2xl  block border-b focus:outline-none w-full focus:bg-surface ${errors.sex ? "border-red-500" : "border-text-main"
                                }`}
                            defaultValue={"Selecciona tu género"}
                            {...register("sex", { required: "Selecciona un género" })}
                        >
                            <option disabled>Selecciona tu género</option>
                            <option value="Male">Masculino</option>
                            <option value="Female">Femenino</option>
                        </select>
                        {errors.sex && <p className="text-red-500 text-xl mt-1">{errors.sex.message}</p>}
                    </div>

                    <button type="submit" className="bg-primary text-main font-bold text-2xl p-4 w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                        {pathname === "/app/registration" ? "Continuar" : "Editar información"}
                    </button>
                </fieldset>
            </form>
        </FormContainer>
    )
}