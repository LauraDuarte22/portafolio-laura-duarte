"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Desarrollo Web",
    description:
      "Desarrollo de aplicaciones web modernas con React y Next.js, enfocadas en rendimiento, escalabilidad y experiencia de usuario.",
    image: "/images/projects/web.png",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Análisis de Datos",
    description:
      "Diseño de dashboards interactivos a partir de procesos ETL, integración de múltiples fuentes y visualización de información estratégica.",
    image: "/images/projects/data.png",
    tags: ["SQL", "Power BI", "ETL"],
  },
  {
    title: "Automatización de Procesos",
    description:
      "Automatización de flujos de trabajo con n8n e integración de APIs, reduciendo tareas manuales y optimizando procesos operativos.",
    image: "/images/projects/automation.png",
    tags: ["n8n", "APIs", "Automation"],
  },
];

const webProjects = [
  { name: "Posting", url: "https://posting.com.co" },
  { name: "Contact Center Grupo", url: "http://ccgrupo.com.co/" },
  { name: "Justicia Racial", url: "http://justiciaracial.org/" },
  { name: "Mataron al Río", url: "https://mataron-al-rio-drab.vercel.app/" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-primary font-bold text-4xl">
            Proyectos
          </h2>
          <p className="text-muted text-lg">
            Una selección de proyectos que reflejan mi experiencia en desarrollo
            web, datos y automatización de procesos.
          </p>
        </div>

        {/* Cards */}
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl border border-muted/30 bg-background/60 backdrop-blur-xl p-8 shadow-xl"
          >
            {/* Header */}
            <div className="flex items-start gap-6">
          
              <div>
                <h3 className="text-2xl font-semibold text-primary">
                  {project.title}
                </h3>

                <p className="text-lg mt-2 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full border border-muted text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Proyectos Web */}
            {project.title === "Desarrollo Web" && (
              <div className="mt-10">
                <h4 className="text-sm uppercase tracking-wider text-muted mb-6">
                  Proyectos destacados
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {webProjects.map((site, i) => (
                    <motion.a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ scale: 1.03 }}
                      className="group relative rounded-xl border border-muted/30 bg-background/40 p-5 backdrop-blur hover:border-primary hover:shadow-[0_0_0_1px_rgba(168,85,247,0.4)] transition"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition">
                            {site.name}
                          </p>
                          <span className="text-xs text-muted break-all">
                            {site.url.replace("https://", "").replace("http://", "")}
                          </span>
                        </div>

                        <FaExternalLinkAlt className="text-muted group-hover:text-primary transition" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
