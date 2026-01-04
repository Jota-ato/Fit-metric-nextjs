
export default function Hero() {
    return (
        <>
            <section className="w-full lg:min-h-screen">
                <div className="container flex flex-col lg:flex-row gap-8 items-center">
                    <div className="space-y-8" style={{ flexBasis: "50%" }}>
                        <h2 className="text-6xl md:text-7xl font-black leading-14 md:leading-19">Eres único. El camino hacia tus objetivos también lo es</h2>
                        <p className="text-2xl md:text-4xl">Adelgazar no siempre es fácil. Encontrar lo que funciona, <span className="text-secondary font-bold">mantener la motivación y ver avances reales puede ser todo un reto.</span></p>
                        <p className="text-2xl md:text-4xl"><span className="text-primary font-bold">Lo entendemos.</span> Por eso fitmetric te da herramientas y apoyo hechos a tu medida.</p>
                        <button
                            className="bg-primary py-4 px-8 font-bold text-xl md:text-2xl rounded-lg text-white hover:bg-primary-hover hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            Comienza tu transformación ahora
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}