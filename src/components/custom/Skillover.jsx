import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import python from "../../assets/img/python1.png";
import html from "../../assets/img/html1.png";
import css from "../../assets/img/css1.png";
import tailwind from "../../assets/img/tailwind1.png";
import react from "../../assets/img/react1.png";
import js from "../../assets/img/js1.png";

const Timeline = () => {
  const navigate = useNavigate(); // Hook for navigation

  const skills = [
    {
      img: html,
      title: "HTML",
      color: "#f06529",
      year: "2019 - 2024",
      description:
        "Proficient in HTML since 2019, with hands-on experience in building numerous projects, creating responsive and accessible web pages that enhance user experience and performance.",
    },
    {
      img: js,
      title: "JavaScript",
      color: "#fdd634",
      year: "2023 - 2024",
      description:
        "Skilled in JavaScript since 2023, with practical experience in building basic projects that focus on enhancing interactivity and dynamic functionality on the web.",
    },
    {
      img: react,
      title: "React JS",
      color: "#00d8ff",
      year: "2023 - 2024",
      description:
        "Experienced in React.js since 2023, with hands-on involvement in developing basic projects that emphasize building scalable and dynamic user interfaces.",
    },
    {
      img: python,
      title: "Python",
      color: "#6caa48",
      year: "2019 - 2023",
      description:
        "Proficient in Python since 2019, with hands-on experience in developing various projects, including interactive games using Turtle Graphics, showcasing a strong understanding of programming fundamentals and creative problem-solving.",
    },
    {
      img: css,
      title: "CSS",
      color: "#01041d",
      year: "2023 - 2024",
      description:
        "Skilled in CSS since 2019, with hands-on experience in creating visually appealing and responsive designs, contributing to numerous projects that focus on enhancing the user interface and experience.",
    },
    {
      img: tailwind,
      title: "Tailwind",
      color: "#599636",
      year: "2024",
      description:
        "Experienced in Tailwind CSS since 2023, with hands-on involvement in developing responsive and highly customizable user interfaces, focusing on efficiency and scalability in design.",
    },
  ];

  return (
    <div className="bg-bannerImg bg-cover bg-no-repeat font-poppins text-white min-h-screen p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 bg-[#00abf0] text-white font-semibold rounded hover:bg-[#007dbf] transition duration-300"
      >
        Back
      </button>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white bg-opacity-60 text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col items-center"
          >
            {/* Image Container */}
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md flex items-center justify-center bg-gray-100">
              <img
                src={skill.img}
                alt={skill.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Card Content */}
            <h2 className="text-2xl font-bold mb-2" style={{ color: skill.color }}>
              {skill.title}
            </h2>
            <small className="block text-sm text-[#000000] font-semibold mb-4">
              {skill.year}
            </small>
            <p className="text-base leading-relaxed text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
