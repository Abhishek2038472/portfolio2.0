import React from 'react';
import { useNavigate } from 'react-router-dom';
import Traning from "../../assets/img/traning.jpeg";
import third from "../../assets/img/third.jpeg";
import internship from "../../assets/img/Internship.jpeg";
import phnx from "../../assets/img/phnx.jpeg";
import workshop from "../../assets/img/workshop.jpeg";
import sahara from "../../assets/img/sahara.jpeg";
import cristmas from "../../assets/img/cristmas.jpeg";
import Ai from "../../assets/img/Ai.jpeg";
import profile from "../../assets/img/pop.png";

function Certificate() {
  const navigate = useNavigate();

  const certificates = [
    { title: 'Ai Master Class', issuer: 'ISO', year: 2025, image: Ai },
    { title: 'Third In Competition', issuer: 'Xplorica/FIEM', year: 2022, image: third },
    { title: 'Training On Mern Stack', issuer: 'Ardent', year: 2023, image: Traning },
    { title: 'Internship in Ardent', issuer: 'Ardent', year: 2023, image: internship },
    { title: 'Organizing Tech Fest', issuer: 'Xplorica/FIEM', year: 2022, image: phnx },
    { title: 'Organizing Manual Robotics Workshop', issuer: 'Xplorica/FIEM', year: 2022, image: workshop },
    { title: 'Organizing Charity Drive', issuer: 'Xplorica/FIEM', year: 2022, image: sahara },
    { title: 'Organizing Charity Drive', issuer: 'Xplorica/FIEM', year: 2023, image: cristmas },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bannerImg bg-cover bg-no-repeat bg-center text-white py-10 px-5">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-6 left-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300"
      >
        ← Back to Home
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <img 
          src={profile} 
          alt="Your Profile" 
          className="w-48 h-48 rounded-full shadow-xl mb-6 border-4 border-gray-700 hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-5xl font-extrabold text-white tracking-wide">My Certificates & Achievements</h2>
      </div>

      {/* Certificate Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="p-6 border border-gray-600 rounded-2xl text-center bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-50 hover:shadow-2xl hover:bg-opacity-75 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-xl"></div>
            <div className="relative group cursor-pointer">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-56 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mt-6 group-hover:text-blue-400 transition-all">{cert.title}</h2>
            <p className="text-gray-300 text-lg">Issued by: {cert.issuer}</p>
            <p className="text-gray-400 text-md">Year: {cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
