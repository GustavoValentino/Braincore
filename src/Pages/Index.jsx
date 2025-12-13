import React, { useState } from "react";

import heroVideo from "../assets/Images/hero-video.mp4";
import title_icon from "../assets/Images/title_icon.svg";
import ser1 from "../assets/Images/serv-icon1.png";
import ser2 from "../assets/Images/serv-icon2.png";
import ser3 from "../assets/Images/serv-icon3.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { FaPlay } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import project1 from "../assets/Images/project-01.jpg";
import project2 from "../assets/Images/project-11.jpg";
import project3 from "../assets/Images/project-12.jpg";
import project4 from "../assets/Images/project-10.jpg";

import team1 from "../assets/Images/team-01.png";
import team2 from "../assets/Images/team-02.png";
import team3 from "../assets/Images/team-03.png";
import team4 from "../assets/Images/team-04.png";

import CountUp from "react-countup";

import blog1 from "../assets/Images/blog_01.jpg";
import blog2 from "../assets/Images/blog_02.jpg";
import blog3 from "../assets/Images/blog_03.jpg";

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

const whatsappNumber = "+5511949995382";
const whatsappMessage = "Olá, gostaria de solicitar um orçamento!";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

function Index() {
  const [activeIndex, setActiveIndex] = useState(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl =
    "https://www.youtube.com/embed/3v6bk1UcMkE?si=HO1w8iqyaHhKsx0K";

  const services = [
    { id: 1, title: "Design", img: ser1 },
    { id: 2, title: "Motion Graphics", img: ser2 },
    { id: 3, title: "Marketing Digital", img: ser3 },
    { id: 3, title: "Produção De Vídeos", img: ser3 },
    { id: 3, title: "Filmagem de Eventos", img: ser3 },
    { id: 3, title: "Vídeo Institucional", img: ser3 },
  ];

  const items = [
    "- Direção Criatividade, Conceito & Estratégia de Marca",
    // "- Conceito Visual",
    // "& Estratégia de Marca",
    // "- Native and Web Apps",
  ];

  const projects = [
    {
      id: 1,
      image: project1,
      category: "Design",
      title: "Atingindo o Equilíbrio Perfeito entre Estética e Função.",
    },
    {
      id: 2,
      image: project2,
      category: "Transmissão de vídeo",
      title: "Outsourcing: a melhor solução para a transmissão ao vivo.",
    },
    {
      id: 3,
      image: project3,
      category: "Produção De Vídeos",
      title: "Produção e Edição de Alta Performance.",
    },
    {
      id: 4,
      image: project4,
      category: "Produção de Evendtos",
      title: "Cobertura Completa de Eventos.",
    },
  ];

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

  const marqueeContent = (
    <div className="flex space-x-12">
      {items.map((text, index) => (
        <span
          key={index}
          className="text-[10vw] font-bold uppercase whitespace-nowrap"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #fff",
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );

  const blogs = [
    {
      id: 1,
      date: "10 de Dezembro, 2025",
      category: "Tendências",
      title: "O Futuro do Design: Minimalismo e IA na Criação de Marcas",
      description:
        "Exploramos as últimas tendências que estão moldando o design moderno, focando na integração de IA e na ascensão da estética minimalista.",
      image: blog1,
    },
    {
      id: 2,
      date: "25 de Novembro, 2025",
      category: "Dicas de Marketing",
      title: "5 Estratégias de Marketing Digital para Pequenos Negócios",
      description:
        "Dicas práticas e eficazes para impulsionar a visibilidade da sua marca online sem a necessidade de grandes orçamentos.",
      image: blog2,
    },
    {
      id: 3,
      date: "01 de Novembro, 2025",
      category: "Insights",
      title: "Como a Conexão Emocional Transforma Clientes em Fãs",
      description:
        "Uma reflexão sobre a importância de 'Conquistar Corações' (Winning Hearts) e construir uma base de clientes leais através do design empático.",
      image: blog3,
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="h-screen w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="px-[2%] md:px-[8%] xl:px-[12%] text-white h-full w-full flex flex-col justify-center relative z-10">
          <h2
            className="text-5xl md:text-7xl xl:text-9xl font-semibold w-full lg:max-w-5xl pb-3 
        flex items-start gap-3 lg:gap-4 leading-none"
          >
            <span>Transforme o seu Futuro.</span>

            <img
              src={title_icon}
              alt="icon"
              className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-30 lg:h-12
          mt-2 md:mt-3 lg:-mt-4"
            />
          </h2>
          <p
            className="text-xl md:text-2xl max-w-2xl font-normal 
                  // NOVO: Centraliza o texto em telas pequenas
                  text-center md:text-left mx-auto md:mx-0 
                  px-4 sm:px-0"
          >
            Seu futuro em áudio e imagem, é desenhado por nós.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full inline-flex`}
            >
              <Icon icon="mdi:whatsapp" width="30" height="30" />
              <span>Fale com um Especialista</span>
            </a>
          </div>

          <a
            href="#"
            className="absolute right-20 bottom-16 w-[67px] h-[67px] rounded-full border border-white z-30 cursor-pointer flex items-center justify-center group hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute inset-0 rounded-full border border-white opacity-50 animate-pulseRing"></span>
            <span className="relative flex items-end justify-between w-[22px] h-[22px] z-10">
              <span className="w-1 bg-white animate-eq1"></span>
              <span className="w-1 bg-white animate-eq2"></span>
              <span className="w-1 bg-white animate-eq3"></span>
              <span className="w-1 bg-white animate-eq4"></span>
            </span>
          </a>
        </div>
      </div>
      {/* Services */}
      <div className="services grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-[8%] px-[2%] md:px-[8%] xl:px-[12%] cursor-pointer">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`w-full text-center group relative service-item transition-all duration-500 
   h-[380px] sm:h-[400px] lg:h-[450px] rounded-[3rem] sm:rounded-[4rem] lg:rounded-2xl
   ${
     activeIndex === index
       ? "active bg-gradient-to-b from-blue-500 to-indigo-950"
       : "bg-transparent "
   }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
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
              <img
                src={service.img}
                alt={service.title}
                width={60}
                height={60}
                className={`mb-4 transition-all duration-300 ${
                  activeIndex === index ? "filter-none" : "invert"
                }`}
              />
              <div
                className={`service-content transition-all duration-300 ${
                  activeIndex === index ? "text-white" : "text-white/70"
                }`}
              >
                <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-xl px-2 mb-8">
                  {" "}
                  {/* Adicionado mb-8 para espaço */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur exercitationem nulla
                </p>

                {/* ====================================================================== */}
                {/* 💡 NOVO BOTÃO "SAIBA MAIS" */}
                {/* ====================================================================== */}
                <Link
                  to="/"
                  className="btn rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                >
                  <Icon icon="vaadin:plus" width="30" height="30" />
                  <span>Saiba Mais</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* About */}
      <div class="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div class="about-content w-full lg:w-[60%]">
          <span class="text-white bg-secundary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Seja Bem-Vindo(a)
          </span>
          <h2 class="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leading-tight text-white">
            Design e Audiovisual que Toca o Coração e Transforma o Seu Negócio.
          </h2>
          <ul class="flex xl:flex-nowrap flex-wrap gap-5 lg:gap-10">
            <li class="w-full xl:w-1/2">
              <span class="font-semibold text-2xl text-white">
                Nossa Missão
              </span>
              <p class="text-md sm:text-xl mt-2 text-gray-300">
                Nossa missão é transformar a visão dos nossos clientes em
                realidade através de soluções de audiovisual e design
                estratégicas. Queremos criar conexões duradouras e entregar
                resultados que não apenas atraiam, mas conquistam e engajam o
                público, garantindo a evolução digital da sua marca.
              </p>
            </li>
            <li class="w-full xl:w-1/2">
              <span class="font-semibold text-2xl text-white">Nossa Visão</span>
              <p class="text-md sm:text-xl my-2 text-gray-300">
                Ser a agência de audiovisual e comunicação digital líder no
                mercado brasileiro, reconhecida pela excelência criativa, pela
                inovação contínua e por ser a principal parceira na
                transformação digital e no crescimento sustentável dos nossos
                clientes.
              </p>
              <Link
                to="/about"
                className="btn rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
              >
                <Icon icon="vaadin:plus" width="30" height="30" />
                <span>Saiba Mais</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[40%] flex justify-center items-center">
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
          </div>
        </div>
      </div>

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
      {/* Text Slide */}
      <div className="py-[2%] flex justify-center items-center">
        <div className="w-full overflow-hidden border-t border-white border-b flex justify-center items-center h-full">
          <div className="flex w-[200%] animate-marquee">
            {marqueeContent}
            {marqueeContent}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="featured py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="featured-content w-full flex justify-between flex-col lg:flex-row lg:items-end mb-10">
          <div>
            <span class="text-white bg-secundary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Nosso Portfólio
            </span>
            <h2 class="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
              Projetos em Destaque.
            </h2>
          </div>
          <Link
            to="/projects"
            className="btn rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 w-fit"
          >
            <Icon icon="vaadin:plus" width="30" height="30" />
            <span>Mais Projetos</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 text-white gap-10 w-full lg:w-[90%] xl:w-full">
          {projects.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300/20 p-5 rounded-lg group cursor-pointer"
            >
              <div className="h-[550px] w-full rounded-lg overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
                />
              </div>
              <Link to={`/projects/${item.id}`}>
                <span class="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                  {item.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-secundary transition-all duration-300">
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Equipe */}
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
      {/* Depoimentos */}
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

      {/* Counts */}
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

      {/* Fale Conosco */}
      <div className="py-[8%]">
        <div className="contact py-[8%] px-[2%] md:px-[8%] h-[800px] relative">
          <div className="team-content w-full  lg:w-[60%] mb-10 xl:px-[2%] xl:pr-[20%] relative z-1">
            <span class="text-white bg-secundary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
              Fale Comigo
            </span>
            <h2 class="text-2xl sm:text-4xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
              Conte-nos Sobre Seu Projeto.
            </h2>
            <Link
              to="/contact"
              className="text-secundary text-3xl lg:text-3xl font-semibold"
            >
              infor@gmail.com
            </Link>
            {/* <p class="text-gray-100 text-[14px] pt-5">
              123 Business Avenue, Los Angeles, CA 90001, United States.
            </p> */}
            <div className="form-area p-8 bg-black/50 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nome Completo"
                    className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-secundary focus:ring-1 focus:ring-secundary outline-none text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Telefone"
                    className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-secundary focus:ring-1 focus:ring-secundary outline-none text-base"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-secundary focus:ring-1 focus:ring-secundary outline-none text-base"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Descreva brevemente o seu projeto e seus objetivos."
                    className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-secundary focus:ring-1 focus:ring-secundary outline-none resize-none text-base"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn w-full text-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition-opacity duration-300 py-3 mt-4 flex items-center justify-center font-bold"
                >
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
          <div class="contact-image">
            <div class="cat-img-circle img-circle--1"></div>
            <div class="cat-img-circle img-circle--2"></div>
            <div class="cat-img-circle img-circle--3"></div>
            <ul className="text-white grid grid-cols-2 gap-10 absolute right-0 bottom-60 social-icons">
              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="mdi:whatsapp"
                    width="44"
                    height="44"
                    className=" text-black bg-white p-2 rounded-full"
                  />
                  <span>Whatsapp</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="ri:linkedin-fill"
                    width="44"
                    height="44"
                    className=" text-black bg-white p-2 rounded-full"
                  />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="ri:facebook-fill"
                    width="44"
                    height="44"
                    className=" text-black bg-white p-2 rounded-full"
                  />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="iconoir:instagram"
                    width="44"
                    height="44"
                    className=" text-black bg-white p-2 rounded-full"
                  />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <FaTiktok
                    size={44}
                    className=" text-black bg-white p-2 rounded-full"
                  />
                  <span>TikTok</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  <Icon
                    icon="ri:youtube-fill"
                    width="44"
                    height="44"
                    className=" text-black bg-white p-2 rounded-full"
                  />
                  <span>YouTube</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="blog-content w-full  lg:w-[60%] mb-10">
          <span class="text-white bg-secundary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm">
            Notícias e Blog
          </span>
          <h2 class="text-4xl md:text-3xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
            Insights, Reflexões, Tendências de Mercado e Dicas de Marketing.
          </h2>
        </div>
        <div className="blog-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-item group flex flex-col text-white"
            >
              <div className="blog-image overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <div class="blog-content pt-5">
                <p class="text-lg font-semibold pb-2">
                  <span class="bg-secundary text-white px-3 py-1 rounded-full me-3">
                    {blog.date}
                  </span>
                  {blog.category}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-xl font-semibold hover:text-secundary transition"
                >
                  {blog.title}
                </Link>
                <p className="text-md text-gray-300 mt-3">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand */}
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

export default Index;
