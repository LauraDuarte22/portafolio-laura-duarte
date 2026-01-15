"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[40%_60%] items-center">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-center"
        >
          <Image
            src="/images/laura.jpeg"
            alt="Laura Duarte"
            width={320}
            height={320}
            className="rounded-full object-cover shadow-xl"
            priority
          />
        </motion.div>

        {/* Texto */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Hola, soy <span className="text-primary">Laura</span>
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm text-primary uppercase tracking-wide block"
          >
            Ingeniera de Sistemas
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-foreground max-w-xl"
          >
            Desarrollo soluciones que integran{" "}
            <span className="font-medium">
              análisis de datos, automatización de procesos y desarrollo web
            </span>
            , creando productos eficientes y orientados a la toma de decisiones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="border border-muted px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition"
            >
              Contacto
            </a>
          </motion.div>
        </div>
      </div>

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
        <a href="#about">
          <FaArrowDown size={24} className="text-primary hover:opacity-80 transition" />
        </a>
      </motion.div>
    </section>
  );
}
