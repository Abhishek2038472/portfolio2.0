import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook for navigation
import Todo from '../../assets/img/Todo.jpeg';
import TTT from '../../assets/img/TTT.jpeg';
import Yt from '../../assets/img/Youtubelite.jpeg';
import Ic from '../../assets/img/ImageC.jpeg';
import Cs from '../../assets/img/CS.jpeg';
import Travel from '../../assets/img/Travel.png';
import { FaGithub } from 'react-icons/fa'; // GitHub icon

const CardLayout = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  const cards = [
    { img: Todo, title: "Todo App", description: "A simple Todo list app for task management.", github: "https://github.com/Abhishek2038472/TO-DO" },
    { img: TTT, title: "Tic-Tac-Toe", description: "Classic Tic-Tac-Toe game with a clean UI.", github: "https://github.com/Abhishek2038472/TIC-TAC-TOE" },
    { img: Yt, title: "YouTube Lite", description: "A lightweight version of YouTube for quick browsing.", github: "https://github.com/Abhishek2038472/U-TUBE" },
    { img: Ic, title: "Image Converter", description: "An image converter app for converting formats.", github: "https://github.com/Abhishek2038472/Image-Compressor" },
    { img: Travel, title: "Travel Planner", description: "A web app for planning trips with recommendations.", github: "https://github.com/yourusername/travel-planner" },
    { img: Cs, title: "Coming Soon", description: "New project Coming soon" },
  ];

  return (
    <div className="bg-bannerImg min-h-screen">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between p-4  text-white">
        <button 
          onClick={() => navigate(-1)} 
          className="px-4 py-2 bg-[#000000] rounded hover:bg-[#36bcff] transition duration-300">
          Back
        </button>
        <h1 className="text-2xl font-bold">Projects</h1>
        <div></div> {/* Empty div to keep header layout aligned */}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg bg-white"
          >
            <div className="w-full h-60">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg p-4">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-base">{card.description}</p>
                <a href={card.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[#00abf0] hover:text-[#007dbf]">
                  <FaGithub className="inline-block mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
