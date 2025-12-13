import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";

const ICON_MAP = {
  Home: "lucide:home",
  Sobre: "lucide:users",
  Páginas: "lucide:layout-template",
  Projetos: "lucide:package-open",
  Blog: "lucide:notebook-pen",
  Contato: "lucide:mail",

  "Nosso Time": "lucide:users-2",
  Serviços: "lucide:briefcase",
  "Preços e Planos": "lucide:tag",
  Dúvidas: "lucide:help-circle",

  Artigos: "lucide:book-open",
  Detalhes: "lucide:file-text",
};

const DropdownItem = ({ link, isMobile, closeMenu }) => {
  const hasSublinks = link.sublinks && link.sublinks.length > 0;
  const iconName = ICON_MAP[link.name];

  const linkClasses = isMobile
    ? "flex items-center text-lg py-3 px-4 font-semibold hover:text-blue-500 transition-colors duration-200"
    : "text-sm font-medium hover:text-blue-400 py-2 px-3 transition-colors duration-200 block";

  const buttonClasses = isMobile
    ? "flex cursor-pointer items-center justify-between w-full text-lg py-3 px-4 font-semibold hover:text-blue-500 transition-colors duration-200"
    : "flex cursor-pointer items-center text-sm font-semibold transition-colors duration-200 hover:text-blue-400";

  if (!hasSublinks) {
    return (
      <li className={isMobile ? "border-b border-gray-700/50" : ""}>
        <Link to={link.to} className={linkClasses} onClick={closeMenu}>
          {isMobile && (
            <Icon
              icon={iconName}
              width="20"
              height="20"
              className="mr-4 text-blue-400"
            />
          )}
          {link.name}
        </Link>
      </li>
    );
  }

  if (!isMobile) {
    return (
      <li className="relative group flex items-center h-full">
        {" "}
        {/* Adicionado 'h-full' */}
        <div className={buttonClasses}>
          {link.name}
          <Icon
            icon="lucide:chevron-down"
            width="16"
            height="16"
            className={`inline-block transition-transform duration-300 group-hover:rotate-180 ml-1`}
          />
        </div>
        <ul
          className={`absolute top-full left-1/2 -translate-x-1/2 
          w-48 rounded-lg bg-black/90 p-1 border border-white/10 shadow-lg
          transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
          space-y-1`}
        >
          {link.sublinks.map((sublink, index) => (
            <li
              key={sublink.name}
              className={`${
                index < link.sublinks.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <Link
                to={sublink.to}
                className={`py-2 px-3 text-sm font-medium transition-colors duration-200 block text-white/80 hover:text-blue-400`}
                onClick={closeMenu}
              >
                {sublink.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <Menu as="li" className={"relative border-b border-gray-700/50"}>
      {({ open, close }) => (
        <div>
          <Menu.Button className={buttonClasses}>
            <div className="flex items-center gap-4">
              <Icon
                icon={iconName}
                width="20"
                height="20"
                className="text-blue-400"
              />
              {link.name}
            </div>
            <Icon
              icon="lucide:chevron-down"
              width="20"
              height="20"
              className={`inline-block transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-y-0"
            enterTo="opacity-100 scale-y-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-y-100"
            leaveTo="opacity-0 scale-y-0"
            className={"origin-top overflow-hidden"}
          >
            <Menu.Items
              as="ul"
              static={true}
              className={"bg-black/50 backdrop-blur-sm p-0 w-full space-y-1"}
            >
              {link.sublinks.map((sublink, index) => (
                <li
                  key={sublink.name}
                  className={`py-1 ${
                    index < link.sublinks.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={sublink.to}
                        className={`flex items-center pl-16 py-1.5 text-sm font-medium transition-colors duration-200 block ${
                          active ? "text-blue-400" : "text-white/80"
                        }`}
                        onClick={() => {
                          close();
                          closeMenu();
                        }}
                      >
                        <Icon
                          icon={ICON_MAP[sublink.name] || "lucide:circle"}
                          width="14"
                          height="14"
                          className="mr-3 -ml-6 text-blue-400"
                        />
                        {sublink.name}
                      </Link>
                    )}
                  </Menu.Item>
                </li>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};

export default DropdownItem;
