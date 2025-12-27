import React from "react";

import { Link } from "react-router-dom";
import { teamMembers } from "../data/teamData";
function Team() {
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3">
          Nosso Time
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
        </ul>
      </div>

      <div className="py-[8%] px-[12%] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <Link to={`/team/${member.id}`} key={member.id}>
            <div className="text-center">
              <div className="bg-white rounded-sm overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full"
                />
              </div>
              <h4 className="text-2xl text-white mt-4 font-semibold">
                {member.name}
              </h4>
              <span className="text-lg text-gray-300">{member.role}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Team;
