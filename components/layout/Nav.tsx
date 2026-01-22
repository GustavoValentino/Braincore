// src/components/Nav.tsx

// 1. OBRIGATÓRIO: Marca como Client Component devido ao useState/useEffect/window
"use client";

import React, { useEffect, useState } from "react";
// 2. Mude o import do Link para o Next.js
import Link from "next/link";
// 3. Mude a importação de imagem para o componente Image do Next.js (opcional, mas recomendado)
import Image from "next/image";
import { Icon } from "@iconify/react";
// 4. Importação da imagem local (no Next.js, use o caminho relativo ou importe diretamente)
import LogoImage from "@/public/images/logo01.png";
import DropdownItem from "./DropdownItem";

// Certifique-se de que DropdownItem também foi migrado e marcado como 'use client' se usar hooks.
// Assumimos que o DropdownItem está em 'components/DropdownItem.tsx'

// TIPAGEM: Definindo a estrutura para TypeScript
interface SubLink {
  name: string;
  to: string;
}

interface NavLink {
  name: string;
  to: string;
  stateKey: string;
  sublinks?: SubLink[];
}

// Tipagem do array de links
const navLinks: NavLink[] = [
  { name: "Home", to: "/", stateKey: "home" },
  { name: "Sobre", to: "/about", stateKey: "about " },
  {
    name: "Páginas",
    to: "#",
    stateKey: "pages",
    sublinks: [
      { name: "Serviços", to: "/services" },
      { name: "Preços e Planos", to: "/price" },
      { name: "Nosso Time", to: "/team" },
      { name: "Dúvidas", to: "/duvidas" },
      { name: "Leads CRM", to: "/admin/leads" },
    ],
  },
  { name: "Projetos", to: "/projects", stateKey: "projects" },
  {
    name: "Blog",
    to: "/blog",
    stateKey: "blogs",
    sublinks: [
      { name: "Artigos", to: "/blog" },
      { name: "Detalhes", to: "/blog/1" },
    ],
  },
  { name: "Contato", to: "/contact", stateKey: "contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    // A lógica de scroll para mudança de background (navbar) é mantida
    const handleScroll = () => {
      setNavBg(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Lógica para bloquear scroll quando o menu mobile está aberto
    document.body.style.overflow = menuOpen ? "hidden" : "unset";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const glassmorphismClasses =
    "backdrop-blur-md bg-black/20 shadow-xl text-white border-b border-white/10";
  const transparentClasses = "bg-transparent text-white";

  const closeMenu = () => {
    setMenuOpen(false);
    // 5. O uso de window.scrollTo(0, 0) é mantido, pois é uma função do navegador.
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Navbar principal */}
      <div
        className={`navbar h-[80px] flex justify-between items-center px-[2%] md:px-[8%] xl:px-[12%] fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${navBg ? glassmorphismClasses : transparentClasses}
        `}
      >
        {/* Link do Logo */}
        <Link
          href="/" // 6. MUDANÇA: 'to' vira 'href' no Next.js Link
          onClick={closeMenu}
          className={`logo flex items-center transition-all duration-500`}
        >
          {/* 7. MUDANÇA: Substituímos <img> por <Image> do next/image */}
          <Image
            src={LogoImage}
            alt="Braincore Logo"
            width={70} // Definir width e height é OBRIGATÓRIO para next/image
            height={40}
            className="h-15 md:h-10 lg:h-15 w-auto mb-2"
          />
          <span
            className={`text-3xl md:text-4xl lg:text-3xl font-bold text-white`}
          >
            Brain
            <span className="font-medium bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
              core
            </span>
          </span>
        </Link>

        {/* Links de navegação desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <DropdownItem
                key={link.name}
                link={link}
                isMobile={false}
                closeMenu={closeMenu}
                // 8. Nota: O DropdownItem precisa usar Link do Next.js internamente
              />
            ))}
          </ul>

          {/* Campo de Pesquisa */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-40 py-1 pl-3 pr-10 text-sm rounded-full bg-white/10 text-white border border-transparent 
                focus:w-56 focus:border-blue-500 focus:bg-white/20 
                transition-all duration-300 placeholder-white/70 outline-none"
            />
            <Icon
              icon="lucide:search"
              width="18"
              height="18"
              className="absolute right-3 text-white/70"
            />
          </div>
        </div>

        {/* Ícone do Menu Mobile (Hamburger) */}
        <div
          className="lg:hidden cursor-pointer z-40 space-y-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Lógica do Hamburger Mantida */}
          <span
            className={`block w-8 h-0.5 transition-all duration-500 rounded-full bg-white
              ${menuOpen ? "rotate-45 translate-y-2.5" : ""} 
            `}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-500 rounded-full bg-white
              ${menuOpen ? "opacity-0" : "opacity-100"} 
            `}
          ></span>
          <span
            className={`block w-8 h-0.5 transition-all duration-500 rounded-full bg-white
              ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""} 
            `}
          ></span>
        </div>
      </div>

      {/* Menu Mobile Flutuante */}
      <div
        className={`fixed top-0 left-0 w-full h-screen lg:hidden 
          backdrop-blur-sm bg-black/90 text-white 
          p-4 md:p-8 
          z-40 flex flex-col justify-start 
          transform transition-all duration-700 ease-in-out
          ${
            menuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="w-full mx-auto overflow-y-auto max-h-full pt-20 md:pt-24">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <DropdownItem
                key={link.name}
                link={link}
                isMobile={true}
                closeMenu={closeMenu}
              />
            ))}
          </ul>

          {/* Links Sociais (MUDANÇA: 'to' vira 'href') */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="#"
              className="text-white/50 border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Icon icon="mdi:whatsapp" width="22" height="22" />
            </Link>
            {/* ... Outros links sociais */}
          </div>

          {/* Copyright (MUDANÇA: 'to' vira 'href') */}
          <div className="text-center mt-12 mb-4 text-xs font-medium text-white/50 ">
            <p className="text-gray-400 text-sm">
              © 2025{" "}
              <Link
                href="#"
                target="_blank"
                className="text-white hover:underline"
              >
                Braincore
              </Link>{" "}
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
// export default Nav; // Não precisa desta linha no formato de componente funcional exportado acima
