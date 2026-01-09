'use client'
import DetailInformationForm from "@/src/components/app/registration/DetailInformationForm"
import RegistationForm from "@/src/components/app/registration/RegistationForm"
import { useParams } from "next/navigation"

type editParams = {
    EditingInfo: 'basicInfo' | 'advancedInfo'
}

export default function Edit() {
    const params = useParams<editParams>()
    console.log(params)

    return (
        <section className="w-full  h-full flex justify-center items-center">
            {params.EditingInfo === 'basicInfo' ? <RegistationForm /> : <DetailInformationForm />}
        </section>
    )
}