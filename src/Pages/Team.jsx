import React from "react";
import { Link } from "react-router-dom";
import team1 from "../assets/Images/team-01.png";
import team2 from "../assets/Images/team-02.png";
import team3 from "../assets/Images/team-03.png";
import team4 from "../assets/Images/team-04.png";
import team5 from "../assets/Images/team-05.jpg";
import team6 from "../assets/Images/team-06.jpg";

const teamMembers = [
  {
    id: "1",
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team1,
    age: "27 Years",
    location: "Mumbai, India",
    email: "aarav.rao@gmail.com",
    phone: "+55 1194999999",
  },
  {
    id: "2",
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team2,
    age: "27 Years",
    location: "Mumbai, India",
    email: "aarav.rao@gmail.com",
    phone: "+55 1194999999",
  },
  {
    id: "3",
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team3,
    age: "27 Years",
    location: "Mumbai, India",
    email: "aarav.rao@gmail.com",
    phone: "+55 1194999999",
  },
  {
    id: "4",
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team4,
    age: "27 Years",
    location: "Mumbai, India",
    email: "aarav.rao@gmail.com",
    phone: "+55 1194999999",
  },
  {
    id: "5",
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team5,
    age: "27 Years",
    location: "Mumbai, India",
    email: "aarav.rao@gmail.com",
    phone: "+55 1194999999",
  },
  {
    id: "6",
    name: "Aarav Rao",
    role: "UI/UX Designer",
    img: team6,
    age: "27 Years",
    location: "Mumbai, India",
    email: "aarav.rao@gmail.com",
    phone: "+55 1194999999",
  },
];
const Team = () => {
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
            <Link to="/about" className="font-normal text-white text-lg">
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
};

export default Team;
