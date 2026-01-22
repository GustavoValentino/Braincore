"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { styles } from "@/app/styles/styles";
import { motion, Variants } from "framer-motion";
import { Service } from "@/types";

interface ServicesProps {
  services: Service[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5,
    },
  },
};

const Services: React.FC<ServicesProps> = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Limitando para exibir apenas os 3 primeiros serviços de elite
  const featuredServices = services.slice(0, 6);

  return (
    <motion.div
      className="services grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-[8%] px-[4%] md:px-[8%] xl:px-[12%] cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {featuredServices.map((service, index) => (
        <motion.div
          key={service.id}
          className={`
  w-full text-center group relative service-item 
  h-[420px] md:h-[500px] lg:h-[480px] 
  rounded-[3rem] lg:rounded-2xl 
  border transition-all duration-700 ease-in-out
  flex flex-col items-center justify-center 
  ${
    activeIndex === index
      ? "active bg-[#151515] border-blue-500/40 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]"
      : "bg-transparent border-white/10 hover:border-white/20"
  }
`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          variants={cardVariants}
        >
          {/* Efeito Braincore Bubbles */}
          <div
            className={`braincore-bubble pointer-events-none z-10 ${
              activeIndex === index ? "active-bubbles" : ""
            }`}
          >
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
            <div className="bubble-3"></div>
          </div>

          <div className="flex justify-center items-center flex-col p-10 relative h-full">
            {/* Ícone com pulso sutil no hover */}
            <div
              className={`mb-8 transition-all duration-500 ${
                activeIndex === index
                  ? "scale-110 text-white"
                  : "text-primary opacity-80"
              }`}
            >
              <Icon icon={service.icon} width="72" height="72" />
            </div>

            <div className="service-content transition-all duration-300">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tighter text-white">
                {service.title}
              </h2>

              {/* Descrição Constante e Sofisticada */}
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 transition-colors duration-300 group-hover:text-white/90">
                {service.desc}
              </p>

              {/* <div className="mt-auto">
                <Link
                  href="/services"
                  className={`${styles.button} inline-flex items-center gap-2`}
                >
                  <Icon icon="vaadin:plus" width="20" height="20" />
                  <span>Saiba Mais</span>
                </Link>
              </div> */}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Services;
