import React, { useState } from "react";

import title_icon from "../assets/Images/title_icon.svg";
import aboutlogo from "../assets/Images/novo-about-logo.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { Icon } from "@iconify/react";
import { FaPlay } from "react-icons/fa";
import serviceicon1 from "../assets/Images/service-icon1.png";
import serviceicon2 from "../assets/Images/service-icon2.png";
import serviceicon3 from "../assets/Images/service-icon3.png";
import serviceicon4 from "../assets/Images/service-icon4.png";
import serviceicon5 from "../assets/Images/service-icon5.png";

import team1 from "../assets/Images/team-01.png";
import team2 from "../assets/Images/team-02.png";
import team3 from "../assets/Images/team-03.png";
import team4 from "../assets/Images/team-04.png";

import brand1 from "../assets/Images/brand1.png";
import brand2 from "../assets/Images/brand2.png";
import brand3 from "../assets/Images/brand3.png";
import brand4 from "../assets/Images/brand4.png";
import brand5 from "../assets/Images/brand5.jpg";
import brand6 from "../assets/Images/brand6.png";
import brand7 from "../assets/Images/brand7.png";
import brand8 from "../assets/Images/brand8.jpg";
import brand9 from "../assets/Images/brand9.png";
import brand10 from "../assets/Images/brand10.webp";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function About() {
  const members = [
    {
      id: 1,
      name: "Edy",
      role: "Designer UI/UX",
      img: team1,
      letter: "E",
    },
    {
      id: 2,
      name: "Fabiane",
      role: "Videomaker",
      img: team2,
      letter: "F",
    },
    {
      id: 3,
      name: "Roberto",
      role: "Marketing Digital",
      img: team3,
      letter: "R",
    },
    {
      id: 4,
      name: "Karen",
      role: "Fotógrafa",
      img: team4,
      letter: "K",
    },
  ];

  const testimonials = [
    {
      id: 1,
      // Foco: Direção Criativa e Qualidade
      text: "A direção criativa elevou o nível da nossa comunicação. Qualidade e impacto imediato nas campanhas de lançamento.",
      name: "Ricardo Mendes",
      role: "Diretor de Marketing, Tech Solutions",
      rating: 5,
    },
    {
      id: 2,
      // Foco: Produção de Vídeo e Profissionalismo
      text: "Vídeos institucionais impecáveis. Roteiro afiado e produção de altíssimo padrão. Profissionais exemplares!",
      name: "Juliana Castro",
      role: "CEO, Startup Fintech",
      rating: 4.8,
    },
    {
      id: 3,
      // Foco: Estratégia e Resultados
      text: "A estratégia de branding foi um divisor de águas. Alinhamento perfeito da identidade com nossos objetivos de crescimento.",
      name: "André Pires",
      role: "Gerente de Branding, E-commerce",
      rating: 5,
    },
    {
      id: 4,
      // Foco: Design de Experiência (UX/UI) e Retenção
      text: "Design de experiência fundamental para o app. Usabilidade melhorou drasticamente, impactando a retenção de usuários.",
      name: "Mariana Souza",
      role: "Head de Produto, App Development",
      rating: 4.7,
    },
    {
      id: 5,
      // Foco: Mídias Sociais e ROI
      text: "Conteúdo para mídias sociais sempre criativo e de alta qualidade. O ROI das campanhas melhorou muito após a parceria.",
      name: "Roberto Aguiar",
      role: "Especialista em Growth, Indústria Criativa",
      rating: 4.9,
    },
  ];

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl =
    "https://www.youtube.com/embed/3v6bk1UcMkE?si=HO1w8iqyaHhKsx0K";
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3">
          Sobre Nós
          <span className="absolute hidden sm:flex top-0 right-35 w-10 h-10">
            <img src={title_icon} alt="icon" className="w-full h-full" />
          </span>
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Aqui é onde a sua história ganha forma e movimento
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/index" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-normal text-white text-lg">
              Sobre Nós
            </Link>
          </li>
        </ul>
      </div>

      <div class="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div class="about-content w-full lg:w-[60%]">
          <span class="text-white bg-secundary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Seja Bem-Vindo(a)
          </span>
          <h2 class="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leading-tight text-white">
            Design estratégico. Audiovisual de alto impacto.
          </h2>
          <ul class="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-2">
            <li class="w-full">
              <p class="text-md sm:text-xl mt-2 text-gray-300">
                Nossa missão é transformar a visão dos nossos clientes em
                realidade através de soluções de audiovisual e design
                estratégicas. Queremos criar conexões duradouras e entregar
                resultados que não apenas atraiam, mas conquistam e engajam o
                público, garantindo a evolução digital da sua marca.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className="flex items-center justify-center w-[250px] h-[250px] relative border">
            <img
              src={aboutlogo}
              alt="about-logo"
              className="invert brightness-0"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 py-[8%] sm:grid-cols-3 gap-12 px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="text-center">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none color: transparent; -webkit-text-stroke: 2px rgb(255,255,255);"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            <CountUp start={0} end={23} duration={2} />
          </h2>
          <p className="text-gray-300 text-lg font-semibold mt-3">Membros</p>
        </div>
        <div className="text-center">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none color: transparent; -webkit-text-stroke: 2px rgb(255,255,255);"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            <CountUp start={0} end={99} duration={2.5} />+
          </h2>
          <p className="text-gray-300 text-lg font-semibold mt-3">
            Projetos Entregues
          </p>
        </div>
        <div className="text-center">
          <h2
            className="text-7xl sm:text-8xl font-bold leading-none color: transparent; -webkit-text-stroke: 2px rgb(255,255,255);"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            <CountUp start={0} end={12} duration={2.8} />M
          </h2>
          <p className="text-gray-300 text-lg font-semibold mt-3">
            Horas de Edição
          </p>
        </div>
      </div>

      <div className="w-full py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="banner bg-cover object-bottom bg-center h-[800px] relative">
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center z-10">
            <div className="flex items-center justify-center w-[250px] h-[250px] relative border-[2px] border-secundary rounded-full">
              <svg
                viewBox="0 0 300 300"
                class="absolute w-full h-full animate-[spin_40s_linear_infinite]"
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
                className="relative z-10 flex items-center justify-center w-40 h-40 border-[2px] border-secundary rounded-full bg-transparent transition-all duration-300 transform scale-100 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Reproduzir vídeo da empresa"
              >
                <FaPlay className="text-white text-6xl" />
              </button>
              {isVideoModalOpen && (
                <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm px-4"
                  onClick={() => setIsVideoModalOpen(false)}
                >
                  <div
                    className="relative w-full max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setIsVideoModalOpen(false)}
                      className="absolute left-1/2 -translate-x-1/2 -top-[4rem] z-50 h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition transform hover:scale-110"
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
            </div>
          </div>
        </div>
        <ul class="flex flex-col gap-5 mt-20 relative">
          <li class="w-full flex items-start justify-between lg:flex-row flex-col">
            <span class="w-full lg:w-3xl font-semibold text-2xl text-white">
              Nossa Missão
            </span>
            <p class="w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl mt-2 text-gray-300">
              Nossa missão é transformar a visão dos nossos clientes em
              realidade através de soluções de audiovisual e design
              estratégicas. Queremos criar conexões duradouras e entregar
              resultados que não apenas atraiam, mas conquistam e engajam o
              público, garantindo a evolução digital da sua marca.
            </p>
          </li>
          <li class="w-full flex items-start justify-between lg:flex-row flex-col">
            <span class="w-full lg:w-3xl font-semibold text-2xl text-white">
              Nossa Visão
            </span>
            <p class="w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl my-2 text-gray-300">
              Ser a agência de audiovisual e comunicação digital líder no
              mercado brasileiro, reconhecida pela excelência criativa, pela
              inovação contínua e por ser a principal parceira na transformação
              digital e no crescimento sustentável dos nossos clientes.
            </p>
          </li>
        </ul>
      </div>

      <div className="service py-[2%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="service-content">
          <span class="text-white bg-secundary px-2 py-3 font-semibold text-xl rounded-sm">
            O que fazemos?
          </span>
          <h2 class="text-2xl sm:text-6xl font-semibold max-w-3xl mt-5 leading-tight text-white">
            Somos uma agência completa em design e audiovisual.
          </h2>
        </div>
        <div className="lex flex-col w-full mt-8">
          <div className="service-item-about w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">01.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Brand Strategy
                </h4>
                <p class="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon1}
                  alt="service-icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20 p-5"
                />
              </div>
            </div>
          </div>
          <div className="service-item-about w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">02.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Social Media Campaign
                </h4>
                <p class="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon2}
                  alt="service-icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20 p-5"
                />
              </div>
            </div>
          </div>
          <div className="service-item-about w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">03.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Creative Direction
                </h4>
                <p class="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon3}
                  alt="service-icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20 p-5"
                />
              </div>
            </div>
          </div>
          <div className="service-item-about w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">04.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Machine Learning | AI
                </h4>
                <p class="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon4}
                  alt="service-icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20 p-5"
                />
              </div>
            </div>
          </div>
          <div className="service-item-about w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row">
            <div className="flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2">
              <span className="text-2xl font-semibold">05.</span>
              <div className="service-info">
                <h4 className="text-2xl font-semibold pb-0.5">
                  Visual Identity
                </h4>
                <p class="text-gray-100 text-lg lg:w-3xl">
                  Lorem ipm dolor amet, consectetur adipiing lit Sunt sed ad
                  possimus ils magnam maores.
                </p>
              </div>
            </div>
            <div className="service-image w-full lg:w-1/2 flex lg:justify-end lg:items-end">
              <div className="border border-white/20 rounded-full w-[150px] h-[150px] p-3">
                <img
                  src={serviceicon5}
                  alt="service-icon"
                  className="invert brightness-0 w-full h-full object-contain rounded-full border border-white/20 p-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="team-content w-full  lg:w-[60%] mb-10">
          <span class="text-white bg-secundary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Equipe de Especialistas
          </span>
          <h2 class="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
            Criamos Soluções Incríveis para Nossos Clientes.
          </h2>
        </div>
        <div className="team-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="team-item relative overflow-hidden text-white border border-gray-50/20 h-[600px]
                                  md:h-[740px] group flex flex-col justify-between cursor-pointer"
            >
              {/* Descrição */}
              <div className="desc p-6 md:p-8">
                <div className="mb-4">
                  <span class="block text-3xl md:text-5xl group-hover:text-black font-bold leading-tight transition-colors duration-300">
                    {member.name}
                  </span>
                  <span class="block font-semibold text-gray-100 text-sm md:text-md group-hover:text-black transition-colors duration-300">
                    {member.role}
                  </span>
                </div>
                {/* Social Links */}
                <div className="flex gap-3">
                  <Link
                    to="#"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="ri:facebook-fill"
                      width="24"
                      height="24"
                      className="group-hover:text-black transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/braincoreinc?igsh=cWZyOWY5OW91eGdy"
                    className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors duration-300"
                  >
                    <Icon
                      icon="mdi:instagram"
                      width="24"
                      height="24"
                      className="group-hover:text-black transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                </div>
              </div>
              {/* Image + letter */}
              <div className="image relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto scale-100 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                />
                <div
                  className="num absolute -right-3 md:-right-5 bottom-0 text-[180px] sm:text-[220px] md:text-[300px] font-bold leading-[0.5] group-hover:text-secundary pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)]"
                  style={{
                    textShadow:
                      "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
                  }}
                >
                  <span>{member.letter}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="tst-content w-full lg:w-1/2 text-white">
          <h2 class="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-5 leading-tight text-white">
            Depoimentos
          </h2>
          <div className="font-normal text-xl flex items-center">
            4.5{" "}
            <span className="flex text-yellow-400 ml-2">
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon
                icon="material-symbols:star-rounded"
                width="24"
                height="24"
              />
              <Icon icon="ic:round-star-half" width="24" height="24" />
            </span>
          </div>
          Avaliação dos clientes
        </div>
        <div className="w-full lg:w-1/2 border-l border-white ps-10">
          <Splide
            options={{
              type: "fade",
              rewind: true,
              autoplay: true,
              interval: 4000,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
              speed: 800,
            }}
          >
            {testimonials.map((t) => (
              <SplideSlide key={t.id}>
                <div className="text-white">
                  <p className="text-gray-400 text-2xl md:text-3xl max-w-2xl leading-tight mb-6 font-medium">
                    {t.text}
                  </p>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {t.name}
                    </h3>
                    <span className="text-gray-300">{t.role}</span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="brand-content w-full lg:w-[60%] mb-10">
          <span className="text-white bg-secundary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Parceiros de Destaque
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
            Temos Tido o Prazer de Colaborar com Alguns Clientes.
          </h2>
        </div>

        <div className="brand-wrapper grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand1}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>

          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand2}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>

          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand3}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>

          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand4}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>

          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand5}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>

          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand6}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>

          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand7}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>

          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand8}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>
          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand9}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>
          <Link
            to="#"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-secundary group"
          >
            <img
              src={brand10}
              alt="brand-image"
              className="object-contain w-full max-w-[100px] h-16 mb-2"
            />

            <span>Acessar Site</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
