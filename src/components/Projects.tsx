"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineAcademicCap,
} from "react-icons/hi";

const typeIcon: Record<string, JSX.Element> = {
  "Desarrollo Web": <HiOutlineGlobeAlt size={32} />,
  "Análisis de Datos": <HiOutlineChartBar size={32} />,
  Automatización: <HiOutlineCog size={32} />,
  "Proyecto Académico": <HiOutlineAcademicCap size={32} />,
};

const projects = [
  {
    title: "Posting",
    type: "Desarrollo Web",
    description:
      "Plataforma web desarrollada para una agencia creativa y de estrategia digital, enfocada en comunicar su propuesta de valor mediante una experiencia visual clara y alineada con la identidad de marca.",
    url: "https://posting.com.co",
    image: "/images/projects/posting.png",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Contact Center Grupo",
    type: "Desarrollo Web",
    description:
      "Sitio institucional para una empresa BPO especializada en Contact Center y transformación digital, destacando servicios de omnicanalidad, inteligencia artificial y análisis de datos.",
    url: "http://ccgrupo.com.co/",
    image: "/images/projects/ccgrupo.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Automatización de Respuestas en Instagram",
    type: "Automatización",
    description:
      "Automatización inteligente para gestionar comentarios en Instagram en tiempo real, clasificando la intención del usuario y respondiendo de forma contextual mediante modelos de lenguaje.",
    image: "/images/projects/automation.png",
    tags: ["n8n", "OpenAI", "Webhooks"],
  },
  {
    title: "ETL & Dashboards Automatizados",
    type: "Análisis de Datos",
    description:
      "Procesos ETL para la extracción automática de datos y alimentación de tableros de control confiables, apoyando la toma de decisiones basada en datos.",
    tags: ["SQL", "ETL", "Power BI"],
  },
  {
    title: "Justicia Racial",
    type: "Desarrollo Web",
    description:
      "Plataforma web para un equipo de abogados defensores de derechos humanos, enfocada en visibilizar procesos de justicia social y acompañamiento comunitario.",
    tags: ["React", "UX/UI"],
  },
  {
    title: "Mataron al Río",
    type: "Proyecto Académico",
    description:
      "Proyecto web interactivo creado como apoyo a una tesis universitaria, enfocado en la narración de crónicas digitales con una experiencia visual cuidada.",
    tags: ["Next.js", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-4xl font-bold text-primary">
            Proyectos
          </h2>
          <p className="text-muted text-lg">
            Proyectos reales donde he aplicado desarrollo web, análisis de datos
            y automatización para resolver problemas concretos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-muted/30 bg-background/60
                         backdrop-blur-xl p-8 shadow-lg transition"
            >
              {/* Imagen o placeholder */}
              {project.image ? (
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-full h-44 rounded-xl mb-6 flex items-center justify-center
                                bg-gradient-to-br from-primary/20 via-background to-secondary/20
                                border border-muted/30">
                  <div className="flex flex-col items-center gap-2 text-primary/70">
                    {typeIcon[project.type]}
                    <span className="text-xs uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <span className="text-xs uppercase tracking-wide text-primary">
                {project.type}
              </span>

              <h3 className="text-2xl font-semibold mt-2 group-hover:text-primary transition">
                {project.title}
              </h3>

              <p className="text-muted mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-muted text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Cierre */}
        <p className="text-center text-muted">
          ¿Quieres ver cómo puedo aportar a tu proyecto?{" "}
          <a href="#contact" className="text-primary underline">
            Hablemos
          </a>
        </p>
      </div>
    </section>
  );
}
