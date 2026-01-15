"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Texto principal */}
        <motion.div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-2xl text-primary font-medium">
            <span className="text-4xl font-bold text-primary" />
            Sobre mí
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Construyo soluciones donde los{" "}
            <span className="text-primary">datos</span> y la{" "}
            <span className="text-primary">tecnología</span> generan impacto real
          </h2>

          <p className="text-lg">
            Soy <span className="font-medium">Ingeniera de Sistemas</span> con un
            enfoque orientado al análisis de datos y al desarrollo de soluciones
            tecnológicas que optimizan procesos y apoyan la toma de decisiones.
          </p>

          <p className="text-lg">
            A lo largo de mi experiencia he trabajado en la recolección,
            transformación y análisis de información, integrando distintas
            fuentes de datos para convertirlos en información clara, confiable y
            accionable para el negocio.
          </p>

          <p className="text-lg">
            Me interesa especialmente construir soluciones completas, donde el
            análisis de datos, la automatización de procesos y el desarrollo web
            se conectan para crear productos eficientes, escalables y con una
            buena experiencia de usuario.
          </p>
        </motion.div>

        {/* Cards de habilidades */}
        <motion.div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
              <h3 className="font-semibold mb-2 text-primary">
                Análisis de datos
              </h3>
              <p className="text-sm text-foreground">
                Experiencia en procesos ETL, consultas SQL y modelado de datos,
                orientados a la construcción de dashboards y reportes que facilitan
                el análisis y la toma de decisiones estratégicas.
              </p>
            </div>

            <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
              <h3 className="font-semibold mb-2 text-primary">
                Automatización de procesos
              </h3>
              <p className="text-sm text-foreground">
                Automatización de flujos de trabajo mediante herramientas como n8n
                e integración de APIs, reduciendo tareas manuales y mejorando la
                eficiencia operativa.
              </p>
            </div>

            <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
              <h3 className="font-semibold mb-2 text-primary">
                Desarrollo web
              </h3>
              <p className="text-sm text-foreground">
                Desarrollo de aplicaciones web modernas utilizando React,
                Next.js y Tailwind CSS, con enfoque en buenas prácticas,
                rendimiento y experiencia de usuario.
              </p>
            </div>

            <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
              <h3 className="font-semibold mb-2 text-primary">
                Integración de sistemas
              </h3>
              <p className="text-sm text-foreground">
                Integración de diferentes plataformas y servicios mediante APIs,
                conectando sistemas para construir soluciones tecnológicas
                completas y escalables.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
      {/* Flecha */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" justify-center mt-12 sm:hidden md:flex"
      >
        <a href="#projects">
          <FaArrowDown size={24} className="text-primary hover:opacity-80 transition" />
        </a>
      </motion.div>
    </section>
  );
}