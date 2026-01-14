import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <footer className="bg-black text-white text-background border-t border-muted px-20" id="contact">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-8">

                {/* Info */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                        <span className="bg-primary text-white px-4 py-1.5 rounded-lg inline-block">
                            Contáctame
                        </span>
                    </h2>

                    <p className="text-sm opacity-80">
                        Laura Andrea Duarte Pérez
                    </p>

                    <div className="flex flex-col gap-2 text-sm">
                        <a
                            href="mailto:lduarteperez2@gmail.com"
                            className="flex items-center gap-2 hover:text-primary transition"
                        >
                            <FaEnvelope className="text-lg" />
                            lduarteperez2@gmail.com
                        </a>

                        <a
                            href="tel:3193691016"
                            className="flex items-center gap-2 hover:text-primary transition"
                        >
                            <FaSquarePhoneFlip className="text-lg" />
                            319 369 1016
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
