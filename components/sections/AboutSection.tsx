"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FaPlay } from "react-icons/fa";
import { styles } from "@/app/styles/styles";
import { motion } from "framer-motion";

interface AboutProps {
  isVideoModalOpen: boolean;
  setIsVideoModalOpen: (isOpen: boolean) => void;
  videoUrl: string;
  marqueeContent: React.ReactNode;
}

const About: React.FC<AboutProps> = ({
  isVideoModalOpen,
  setIsVideoModalOpen,
  videoUrl,
  marqueeContent,
}) => {
  return (
    <>
      <div className="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div className="about-content w-full lg:w-[60%]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className=" tracking-[0.4em] text-xs font-bold text-primary italic">
              SEJA BEM-VINDO(a)
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leading-tight text-white">
            Design e Audiovisual que Toca o Coração e Transforma o Seu Negócio.
          </h2>
          <ul className="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-10">
            {/* Missão */}
            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">
                Nossa Missão
              </span>
              <p className="text-md sm:text-xl mt-2 text-gray-300">
                Nossa missão é transformar a visão dos nossos clientes em
                realidade através de soluções de audiovisual e design
                estratégicas. Queremos criar conexões duradouras e entregar
                resultados que não apenas atraiam, mas conquistam e engajam o
                público, garantindo a evolução digital da sua marca.
              </p>
            </li>
            <li className="w-full xl:w-1/2">
              <span className="font-semibold text-2xl text-white">
                Nossa Visão
              </span>
              <p className="text-md sm:text-xl my-2 text-gray-300">
                Ser a agência de audiovisual e comunicação digital líder no
                mercado brasileiro, reconhecida pela excelência criativa, pela
                inovação contínua e por ser a principal parceira na
                transformação digital e no crescimento sustentável dos nossos
                clientes.
              </p>
              <Link href="/about" className={`${styles.button}`}>
                <Icon icon="vaadin:plus" width="30" height="30" />
                <span>Saiba Mais</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className="flex items-center justify-center w-[250px] h-[250px] relative border-[2px] border-primary rounded-full">
            <svg
              viewBox="0 0 300 300"
              className="absolute w-full h-full animate-[spin_40s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                ></path>
              </defs>
              <text
                fill="#fff"
                fontSize="16"
                fontWeight="600"
                letterSpacing="4"
                textLength="2250"
              >
                <textPath href="#circlePath" startOffset="0">
                  DÉCADAS DE EXPERIÊNCIA EM INOVAÇÃO DIGITAL • DÉCADAS DE
                  EXPERIÊNCIA EM INOVAÇÃO DIGITAL • DÉCADAS DE EXPERIÊNCIA EM
                  INOVAÇÃO DIGITAL •
                </textPath>
              </text>
            </svg>

            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="relative z-10 flex items-center justify-center w-40 h-40 border-[2px] border-primary rounded-full bg-transparent transition-all duration-300 transform scale-100 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Reproduzir vídeo da empresa"
            >
              <FaPlay className="text-white text-6xl" />
            </button>
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-opacity-20 backdrop-blur-sm px-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute left-1/2 -translate-x-1/2 -top-[4rem] z-50 h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition transform hover:scale-110 cursor-pointer"
              aria-label="Fechar vídeo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="py-[2%] flex justify-center items-center">
        <div className="w-full overflow-hidden border-t border-white border-b flex justify-center items-center h-full">
          <div className="flex w-[200%] animate-marquee">
            {marqueeContent}
            {marqueeContent}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
