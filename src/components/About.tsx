"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        {/* Texto principal */}
        <motion.div variants={item} className="space-y-6">
          <div className="inline-flex items-center gap-2 text-2xl text-primary font-medium">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Sobre mí
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Construyo soluciones donde los{" "}
            <span className="text-primary">datos</span> y la{" "}
            <span className="text-primary">tecnología</span> generan impacto real
          </h2>

          <p className="text-lg">
            Soy <span className="text-foreground font-medium">Ingeniera de Sistemas</span>{" "}
            con experiencia en el diseño de soluciones que integran{" "}
            <span className="text-foreground font-medium">
              análisis de datos, automatización de procesos y desarrollo web
            </span>
            .
          </p>

        </motion.div>

        {/* Cards de habilidades */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
            <h3 className="font-semibold mb-2 text-primary">
              Análisis de datos
            </h3>
            <p className="text-sm text-foreground">
              ETL, SQL, Power BI, Looker Studio, limpieza y transformación de
              datos para generar información estratégica.
            </p>
          </div>

          <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
            <h3 className="font-semibold mb-2 text-primary">
              Automatización
            </h3>
            <p className="text-sm text-foreground">
              Automatización de flujos con n8n, integración de APIs y reducción
              de tareas manuales en procesos operativos.
            </p>
          </div>

          <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
            <h3 className="font-semibold mb-2 text-primary">
              Desarrollo Web
            </h3>
            <p className="text-sm text-foreground">
              Desarrollo de interfaces modernas con React, Next.js, Tailwind CSS
              y buenas prácticas de UX/UI.
            </p>
          </div>

          <div className="rounded-xl border border-muted/40 bg-background/60 p-6 backdrop-blur">
            <h3 className="font-semibold mb-2 text-primary">
              Integración de sistemas
            </h3>
            <p className="text-sm text-foreground">
              Conexión de plataformas, CRMs y servicios externos mediante APIs
              para soluciones completas y escalables.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
