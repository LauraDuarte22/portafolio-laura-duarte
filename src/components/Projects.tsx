"use client";

import type React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    HiOutlineChartBar,
    HiOutlineCog,
    HiOutlineGlobeAlt,
    HiOutlineAcademicCap,
} from "react-icons/hi";

/* =======================
   Tipos
======================= */

type ProjectType =
    | "Desarrollo Web"
    | "Análisis de Datos"
    | "Automatización"
    | "Proyecto Académico";

/* =======================
   Iconos por tipo
======================= */

const typeIcon: Record<ProjectType, React.ReactNode> = {
    "Desarrollo Web": <HiOutlineGlobeAlt size={32} />,
    "Análisis de Datos": <HiOutlineChartBar size={32} />,
    Automatización: <HiOutlineCog size={32} />,
    "Proyecto Académico": <HiOutlineAcademicCap size={32} />,
};

/* =======================
   Proyectos
======================= */

const projects = [
    {
        title: "Posting",
        type: "Desarrollo Web" as ProjectType,
        description:
            "Sitio web desarrollado para una agencia creativa y de estrategia digital. El proyecto se enfocó en comunicar su propuesta de valor a través de una experiencia visual clara, moderna y alineada con la identidad de marca.",
        image: "/images/posting.jpeg",
        url: "https://posting.com.co",
    },
    {
        title: "Contact Center Grupo",
        type: "Desarrollo Web" as ProjectType,
        description:
            "Plataforma institucional para una empresa BPO especializada en soluciones de Contact Center y transformación digital, destacando servicios de omnicanalidad, inteligencia artificial y análisis de datos.",
        image: "/images/ccgrupo.jpeg",
        url: "http://ccgrupo.com.co/",
    },
    {
        title: "Automatización de Respuestas en Instagram",
        type: "Automatización" as ProjectType,
        description:
            "Automatización inteligente que gestiona comentarios en Instagram en tiempo real. El flujo clasifica la intención del usuario y responde automáticamente mediante modelos de lenguaje, reduciendo carga operativa y mejorando la experiencia del usuario.",
        image: "/images/automation.jpeg",
    },
    {
        title: "ETL y Dashboards Automatizados",
        type: "Análisis de Datos" as ProjectType,
        description:
            "Diseño e implementación de procesos ETL para la extracción automática de datos y alimentación de tableros de control confiables, apoyando la toma de decisiones basada en datos.",
    },
    {
        title: "Justicia Racial",
        type: "Desarrollo Web" as ProjectType,
        description:
            "Plataforma web para un equipo de abogados defensores de derechos humanos, enfocada en visibilizar procesos de justicia social, litigio estratégico y acompañamiento comunitario.",
        image: "/images/justicia.png",
        url: "http://justiciaracial.org/",
    },
    {
        title: "Mataron al Río",
        type: "Proyecto Académico" as ProjectType,
        description:
            "Proyecto web interactivo creado como apoyo a una tesis universitaria, centrado en la narración de crónicas digitales mediante una experiencia visual cuidada.",
        image: "/images/rio.png",

        url: "https://mataron-al-rio-drab.vercel.app/",
    },
    {
        title: "Universal de mudanzas",
        type: "Desarrollo Web" as ProjectType,
        description: "Sitio web corporativo desarrollado para una empresa especializada en servicios de mudanzas y traslados corporativos. El proyecto comunica de forma clara sus soluciones integrales a nivel urbano y nacional, destacando la eficiencia operativa, el ahorro de tiempo y la seguridad en el manejo y resguardo de los bienes.",
        image: "/images/universal.webp",

        url: "https://www.universaldemudanzas.com/"
    },
    {
        title: "Chatbot Inteligente de Ventas en WhatsApp",
        type: "Automatización" as ProjectType,
        description:
            "Diseño e implementación de un chatbot inteligente para el canal de WhatsApp en Contact Center Grupo. La solución identifica la intención del posible cliente mediante inteligencia artificial, clasifica el interés comercial y registra automáticamente la información relevante en el CRM.",


    }


];

/* =======================
   Componente
======================= */

export default function Projects() {
    return (
        <section id="projects" className="py-28 px-6 md:px-20">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <div className="max-w-2xl space-y-4">
                    <h2 className="text-4xl font-bold text-primary">
                        Proyectos
                    </h2>
                    <p className="text-black text-lg">
                        Una selección de proyectos reales donde he aplicado desarrollo web,
                        análisis de datos y automatización para resolver problemas concretos.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
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
                                <div
                                    className="w-full h-44 rounded-xl mb-6 flex items-center justify-center
                             bg-gradient-to-br from-primary/20 via-background to-muted/20
                             border border-muted/30"
                                >
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

                            <h3 className="text-2xl font-semibold mt-2 text-foreground">
                                {project.title}
                            </h3>

                            <p className="text-foreground/80 mt-3 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Link */}
                            {project.url && (
                                <div className="mt-6">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium
                               text-primary hover:underline transition"
                                    >
                                        Ver proyecto →
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}

            </div>
        </section>
    );
}
