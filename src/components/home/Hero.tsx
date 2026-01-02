
import Image from "next/image"
import heroDesktop from "../../assets/images/hero-banner-desktop.webp"
import heroMobile from "../../assets/images/hero-banner-mobile.webp"

export default function Hero() {
    return (
        <>
            <section className="w-full">
                <div className="container flex flex-col md:flex-row gap-8 items-center">
                    <div className="space-y-8" style={{ flexBasis: "40%" }}>
                        <h2 className="text-6xl md:text-7xl font-black leading-14 md:leading-19">Eres único. El camino hacia tus objetivos también lo es</h2>
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
                            className="animate-fade-in-up animate-duration-1000 w-full object-cover hidden md:block"
                        />
                        <Image
                            src={heroMobile}
                            alt="Hero"
                            width={600}
                            height={900}
                            className="animate-fade-in-up animate-duration-1000 w-full h-full object-cover block md:hidden"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}