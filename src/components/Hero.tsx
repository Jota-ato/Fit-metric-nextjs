
import Image from "next/image"
import Navegation from "./Navegation"
import heroDesktop from "../assets/images/hero-banner-desktop.webp"
import heroMobile from "../assets/images/hero-banner-mobile.webp"

export default function Header() {
    return (
        <>
            <header className="w-full min-h-120 p-8 bg-sky-100 animate-fade-in-up">
                <Navegation />
                <section className="w-[85%] max-w-480 py-8 mx-auto flex flex-col md:flex-row gap-8 items-center">
                    <div className="space-y-8" style={{ flexBasis: "40%" }}>
                        <h2 className="text-6xl md:text-7xl font-black leading-14 md:leading-19"><span className="text-primary ">Eres único</span>. El camino hacia tus objetivos también lo es</h2>
                        <p className="text-2xl md:text-4xl">Adelgazar no siempre es fácil. Encontrar lo que funciona, <span className="text-secondary font-bold">mantener la motivación y ver avances reales puede ser todo un reto.</span></p>
                        <p className="text-2xl md:text-4xl"><span className="text-primary font-bold">Lo entendemos.</span> Por eso fitmetric te da herramientas y apoyo hechos a tu medida.</p>
                        <button
                            className="bg-primary py-4 px-8 font-bold text-xl md:text-2xl rounded-lg text-white hover:bg-primary-hover hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            Comienza tu transformación ahora
                        </button>
                    </div>
                    <div style={{ flexBasis: "60%" }}>
                        <Image
                            src={heroDesktop}
                            alt="Hero"
                            width={1600}
                            height={900}
                            className="w-full object-cover hidden md:block"
                        />
                        <Image
                            src={heroMobile}
                            alt="Hero"
                            width={600}
                            height={900}
                            className="w-full h-full object-cover block md:hidden"
                        />
                    </div>
                </section>
            </header>
        </>
    )
}