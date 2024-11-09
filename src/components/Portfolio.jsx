import React from "react";
import react from "../../public/react.png";
import js from "../../public/js.png";
import html from "../../public/html.png";
import css from "../../public/css.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: react,
      name: "ReactJs",
    },
    {
      id: 2,
      logo: js,
      name: "js",
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
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text-justify">
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItem.map(({id, logo, name})=>(
            <div key={id} className="md:w-[250px] md:h-[250px] border-[2px] border-blue-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
                <img src={logo} 
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] border-black" alt="" />
                <div>
                    <div className="px-2 font-bold text-xl mb-2">Name</div>
                    <p className="px-2 text-gray-700">Name of Project</p>
                </div>
                <div className="px-4 py-4 space-x-3 justify-around">
                    <button className="bg-blue-400 hover:bg-blue-600 text-black font-bold px-2 py-2 rounded">Video</button>
                    <button className="bg-green-400 hover:bg-green-600 text-black font-bold px-2 py-2 rounded">Source Code</button>
                </div>
            </div>
        ))}
      </div>
    </div>
    
  );
}

export default Portfolio;
