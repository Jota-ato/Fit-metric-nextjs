'use client'
import DetailInformationForm from "@/src/components/app/registration/DetailInformationForm";
import RegistationForm from "@/src/components/app/registration/RegistationForm";
import { usePageStore } from "@/src/stores/PageStore";

export default function RegistrationPage() {

    const formStep = usePageStore(state => state.formStep)

    return (
        <>
            {formStep === 1 && <RegistationForm />}
            {formStep === 2 && <DetailInformationForm />}
        </>
    )
}