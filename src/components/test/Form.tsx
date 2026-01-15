'use client'
import { useState } from "react"

export default function Form() {

    const [query, setQuery] = useState('')
    const handleSubmit = () => {

    }

    return (
        <form
            className="bg-surface p-8 mt-16 rounded-xl shadow-custom border-2 border-border flex flex-col gap-6 items-center"
        >
            <input
                className="border-b border-muted text-2xl"
                type="text"
            />
            <button
                className="cursor-pointer px-8 py-4 bg-primary text-white font-bold text-2xl rounded-xl"
                type="submit"
            >
                Buscar
            </button>
        </form>
    )
}