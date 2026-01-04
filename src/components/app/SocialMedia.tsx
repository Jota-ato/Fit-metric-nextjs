import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function SocialMedia() {
    return (
        <div className="absolute bottom-8 right-0 flex gap-4 w-full p-8">
            <a className="hover:text-primary/80" target="_blank" href="https://www.facebook.com/fitmetric">
                <FaFacebook className="w-6 h-6" />
            </a>
            <a className="hover:text-primary/80" target="_blank" href="https://www.instagram.com/jota.ato">
                <FaInstagram className="w-6 h-6" />
            </a>
            <a className="hover:text-primary/80" target="_blank" href="https://www.linkedin.com/in/julio-c%C3%A9sar-zavala-blanco-35baa8365/">
                <FaLinkedin className="w-6 h-6" />
            </a>
            <a className="hover:text-primary/80" target="_blank" href="https://github.com/Jota-ato">
                <FaGithub className="w-6 h-6" />
            </a>
        </div>
    )
}