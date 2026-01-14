"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 md:px-20 mt-20">
      <motion.div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[30%_70%] items-center gap-12">

        {/* Imagen */}
        <motion.div
          variants={imageAnim}
          initial="hidden"
          animate="show"
          className="flex justify-center md:justify-start"
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Hola, soy <span className="text-primary">Laura</span>
          </motion.h1>

          <motion.span
            variants={item}
            className="text-sm text-primary uppercase tracking-wide block"
          >
            Ingeniera de Sistemas
          </motion.span>

          <motion.p
            variants={item}
            className="text-lg text-primary max-w-xl"
          >
            Desarrollo soluciones que integran{" "}
            <span className="text-foreground font-medium">
              análisis de datos, automatización de procesos y desarrollo web
            </span>
            , creando productos eficientes y orientados a la toma de decisiones.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition"
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
        </motion.div>

      </motion.div>

      {/*flecha */}
      <motion.div
        animate={{ y: 12 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="flex justify-center mt-12"
      >
        <a href="#about">
          <FaArrowDown size={24} className="text-gray-500 hover:text-gray-800 transition-colors" />
        </a>
      </motion.div>


    </section >

  )
}
