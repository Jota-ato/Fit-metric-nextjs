'use client'
import Phone from "../../assets/images/phone-scanning-food.png"
import Image from "next/image";

export default function FatSecretPlatform() {
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <div className="container flex flex-col md:flex-row gap-6 justify-between items-center p-8">
                <div style={{ flexBasis: "50%" }}>
                    <p className="text-2xl md:text-3xl text-primary mb-4 md:mb-8 font-bold">Plataforma FatSecret</p>
                    <h2 className="text-4xl md:text-6xl font-bold leading-14 md:leading-18 mb-6 md:mb-16">API de la Plataforma fatsecret para Datos de Alimentación y Nutrición</h2>
                    <p className="text-xl md:text-2xl">La base de datos de alimentos y nutrición más grande del mundo que te permite desarrollar soluciones innovadoras de dieta, nutrición y salud. Incorpora la base de datos nutricional de la API de la Plataforma fatsecret en apps móviles, sitios web, dispositivos y otros productos y servicios orientados al cliente, ya existentes o nuevos. La API de la Plataforma fatsecret proporciona los conocimientos alimentarios y nutricionales detrás de los principales productos de salud, fitness y bienestar del mundo.</p>
                    <button onClick={() => window.open("https://platform.fatsecret.com/platform-api", "_blank")} className="my-12 bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl md:text-2xl hover:bg-primary-hover hover:translate-y-2 transition-all duration-300 cursor-pointer">
                        Saber más
                    </button>
                </div>
                <div className="w-full h-full flex justify-center items-center" style={{ flexBasis: "50%" }}>
                    <Image
                        src={Phone}
                        alt="Phone"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}