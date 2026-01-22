"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { styles } from "@/app/styles/styles";
import AnimatedText from "@/components/ui/AnimatedText";

interface HeroProps {
  whatsappLink: string;
  videoSource: string;
}

const HERO_PHRASES = [
  "Criamos Marcas com Propósito.",
  "Elevamos Sua Comunicação Visual.",
  "Transformamos Ideias em Impacto.",
  "Fazemos o Seu Conteúdo Viralizar.",
];

const Hero: React.FC<HeroProps> = ({ whatsappLink, videoSource }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="hero relative px-[2%] md:px-[8%] xl:px-[12%] py-[15%] h-screen flex justify-center items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      <motion.div
        className="hero-content w-full max-w-4xl text-center text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.8 }}
      >
        <AnimatedText
          phrases={HERO_PHRASES}
          className="text-4xl sm:text-7xl md:text-8xl font-bold leading-tight mb-6"
          delayBeforeStart={0.5}
        />

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          Somos a agência focada em design, vídeos e estratégias digitais que
          criam conexões emocionais duradouras.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button}`}
          >
            <Icon icon="mdi:whatsapp" width="24" height="24" />
            <span>Fale com um especialista</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
