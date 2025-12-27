import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { teamMembers } from "../data/teamData";
import title_icon from "../assets/Images/title_icon.svg";
import { Icon } from "@iconify/react";

import serviceicon1 from "../assets/Images/service-icon1.png";
import serviceicon2 from "../assets/Images/service-icon2.png";
import serviceicon3 from "../assets/Images/service-icon3.png";
import serviceicon4 from "../assets/Images/service-icon4.png";
import serviceicon5 from "../assets/Images/service-icon5.png";

import project1 from "../assets/Images/project-01.jpg";
import project2 from "../assets/Images/project-11.jpg";
import project3 from "../assets/Images/project-12.jpg";
import project4 from "../assets/Images/project-10.jpg";

// const projects = [
//   {
//     id: 1,
//     image: project1,
//     category: "Design",
//     title: "Atingindo o Equilíbrio Perfeito entre Estética e Função.",
//   },
//   {
//     id: 2,
//     image: project2,
//     category: "Transmissão de vídeo",
//     title: "Outsourcing: a melhor solução para a transmissão ao vivo.",
//   },
//   {
//     id: 3,
//     image: project3,
//     category: "Produção De Vídeos",
//     title: "Produção e Edição de Alta Performance.",
//   },
//   {
//     id: 4,
//     image: project4,
//     category: "Produção de Evendtos",
//     title: "Cobertura Completa de Eventos.",
//   },
// ];
function TeamDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const member = teamMembers.find((m) => m.id === id);

  useEffect(() => {
    if (!member) navigate("/team");
  }, [member, navigate]);

  if (!member) return null;
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3">
          {member.name}
          <span className="absolute hidden sm:flex top-0 right-35 w-10 h-10">
            <img src={title_icon} alt="icon" className="w-full h-full" />
          </span>
        </h2>
        <p className="border-b-2 w-full pb-10 border-gray-300">
          Criatividade e comprometimento fazem parte da nossa família
        </p>
        <ul className="flex gap-8 py-5">
          <li>
            <Link to="/" className="font-normal text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/team" className="font-normal text-white text-lg">
              Nosso Time
            </Link>
          </li>
          <li>
            <Link to="#" className="font-normal text-white text-lg">
              {member.name}
            </Link>
          </li>
        </ul>
      </div>

      {/* Team Info */}
      <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <div className="w-full border border-white h-auto xl:h-[600px] flex justify-between flex-col xl:flex-row items-start gap-10 xl:gap-4 relative xl:p-0 lg:p-20 sm:p-10 p-5">
          <div className="w-full xl:w-fit h-[600px] xl:h-full bg-white xl:p-0 m-0 xl:m-20 rounded-sm overflow-hidden">
            <img
              src={member.img}
              alt="team-image"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="w-full xl:w-[60%] xl:p-20 text-white">
            <h4 className="text-5xl font-semibold">{member.name}</h4>
            <span className="text-xl text-gray-300">{member.role}</span>
            <ul>
              <li className="py-4 border-t border-b border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Idade</span>
                <p className="text-gray-300/80">{member.age}</p>
              </li>
              <li className="py-4 border-t border-b border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Localizaçã</span>
                <p className="text-gray-300/80">{member.localization}</p>
              </li>
              <li className="py-4 border-t border-b border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Email</span>
                <p className="text-gray-300/80">{member.email}</p>
              </li>
              <li className="py-4 border-t border-b border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="text-xl font-semibold">Telefone</span>
                <p className="text-gray-300/80">{member.phone}</p>
              </li>
            </ul>
            <div className="text-white flex items-center mt-5 gap-5">
              <Link to="#" className="cursor-pointer">
                <Icon
                  icon="ri:facebook-line"
                  width="24"
                  height="24"
                  className="border border-white min-w-10 min-h-10 p-1 rounded-sm "
                />
              </Link>
              <Link to="#" className="cursor-pointer">
                <Icon
                  icon="flowbite:linkedin-solid"
                  width="24"
                  height="24"
                  className="border border-white min-w-10 min-h-10 p-1 rounded-sm "
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-white pt-5 xl:pt-0 xl:mt-30 pb-4 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          atque consequuntur perferendis, eligendi nemo veniam enim optio,
          delectus dolorum aut qui eaque doloremque nesciunt sed autem. Suscipit
          aliquid odio esse. Ipsam neque temporibus, provident iste doloremque
          quidem eligendi quia eius repudiandae consequatur itaque pariatur
          consequuntur porro fugit mollitia magni saepe magnam vitae suscipit.
          Saepe enim earum, quia libero nam eveniet perferendis odit commodi
          sequi aliquid. Nisi minus, quis quo commodi cumque adipisci vitae
          fugiat inventore assumenda nostrum distinctio. Ad itaque, illum cum
          possimus quia minima quidem fuga quos dolorem, tempore inventore
          consequuntur ab quis aliquam! Temporibus tempora rerum vitae? Nobis.
        </p>
        <p className="text-white text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sint, recusandae totam beatae quae vitae, ipsam minus fugit hic at
          inventore debitis corrupti voluptatum quisquam quidem placeat officia!
          Vero, consectetur?
        </p>
        <ul className="text-white/80 pt-5 ps-5 space-y-3 list-disc">
          <li>Far curiosity incommode now led smallness allowance.</li>
          <li>Favour bed assure son things yet.</li>
          <li>She consisted consulted elsewhere happiness.</li>
          <li>Widow downs you new shade drift hopes small.</li>
          <li>Interested discretion estimating on stimulated.</li>
        </ul>
      </div>

      {/* Services */}
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

      {/* Featured */}
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
          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="w-full h-[550px] rounded-lg overflow-hidden mb-5">
              <img
                src={project1}
                alt="project-image"
                className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
              />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                Branding
              </span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300 transition-all">
                Museums Art Concept
              </h3>
            </Link>
          </div>
          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="w-full h-[550px] rounded-lg overflow-hidden mb-5">
              <img
                src={project2}
                alt="project-image"
                className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
              />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                Marketing
              </span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300 transition-all">
                Market Economy Graphics
              </h3>
            </Link>
          </div>
          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="w-full h-[550px] rounded-lg overflow-hidden mb-5">
              <img
                src={project3}
                alt="project-image"
                className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
              />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                Design
              </span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300 transition-all">
                Headphones 3D Rendering
              </h3>
            </Link>
          </div>
          <div className="border-gray-300/20 border p-5 rounded-lg group">
            <div className="w-full h-[550px] rounded-lg overflow-hidden mb-5">
              <img
                src={project4}
                alt="project-image"
                className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
              />
            </div>
            <Link to="projects">
              <span className="text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm">
                Design
              </span>
              <h3 className="text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300 transition-all">
                Business Card Logo
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamDetails;
