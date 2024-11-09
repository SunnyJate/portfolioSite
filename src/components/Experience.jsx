import React from "react";
import mysql from "../../public/mysql.png";
import agile from "../../public/agile.png";
import react from "../../public/react.png";
import js from "../../public/js.png";
import html from "../../public/html.png";
import css from "../../public/css.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mysql,
      name: "MySql",
    },
    {
      id: 2,
      logo: agile,
      name: "Agile",
    },
    {
      id: 3,
      logo: html,
      name: "HTML",
    },
    {
      id: 4,
      logo: css,
      name: "CSS",
    },
    {
      id: 5,
      logo: react,
      name: "Reactjs",
    },
    {
      id: 6,
      logo: js,
      name: "JavaScript",
    },
  ];

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <p className="">I have more than 1.5 years of experience in below technologies</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border-[2px] border-blue-200 rounded-full md:w-[200px] md:h-[200px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
          >
            <img
              src={logo}
              className="w-[150px] p-1 rounded-full "
              alt=""
            />
            <div><div className="">{name}</div></div>      
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
