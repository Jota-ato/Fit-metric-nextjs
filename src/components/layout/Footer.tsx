import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-surface text-text-main min-h-100">
            <section className="container py-12 gap-8 grid grid-cols-2 md:grid-cols-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Fit Metric</h2>
                    <p className="text-muted">Track your fitness journey</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Enlaces rápidos</h3>
                    <nav className="flex flex-col gap-2 text-muted text-xl">
                        <a href="#">Inicio</a>
                        <a href="#">Acerca de</a>
                        <a href="#">Contacto</a>
                    </nav>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Información de alimentos</h3>
                    <nav className="flex flex-col gap-2 text-muted text-xl">
                        <a href="#">Inicio</a>
                        <a href="#">Acerca de</a>
                        <a href="#">Contacto</a>
                    </nav>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Recursos</h3>
                    <nav className="flex flex-col gap-2 text-muted text-xl">
                        <a href="#">Inicio</a>
                        <a href="#">Acerca de</a>
                        <a href="#">Contacto</a>
                    </nav>
                </div>
            </section>
            <section className="container py-12 flex justify-between items-center">
                <div>
                    <p className="text-xl text-muted">© {new Date().getFullYear()} Fit Metric. All rights reserved.</p>
                </div>
                <div className="flex gap-4 text-3xl text-primary">
                    <a className="hover:text-primary/80" target="_blank" href="https://www.facebook.com/fitmetric">
                        <FaFacebook />
                    </a>
                    <a className="hover:text-primary/80" target="_blank" href="https://www.instagram.com/jota.ato">
                        <FaInstagram />
                    </a>
                    <a className="hover:text-primary/80" target="_blank" href="https://www.linkedin.com/in/julio-c%C3%A9sar-zavala-blanco-35baa8365/">
                        <FaLinkedin />
                    </a>
                    <a className="hover:text-primary/80" target="_blank" href="https://github.com/Jota-ato">
                        <FaGithub />
                    </a>
                </div>
            </section>
        </footer>
    );
}