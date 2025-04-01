import React, { useState } from 'react';
import python from '../../assets/img/python1.png';
import html from '../../assets/img/html1.png';
import css from '../../assets/img/css1.png';
import tailwind from '../../assets/img/tailwind1.png';
import react from '../../assets/img/react1.png';

const Skills = () => {
  const [modalData, setModalData] = useState(null);

  const handleImageClick = (skill) => {
    setModalData(skill);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const skills = [
    {
      name: 'Python',
      image: python,
      practical: 70,
      theory: 80,
      practicalTooltip: 'Practical Knowledge: 3 Years',
      theoryTooltip: 'Theory Knowledge: 2 Years',
    },
    {
      name: 'HTML',
      image: html,
      practical: 95,
      theory: 90,
      practicalTooltip: 'Practical Knowledge: 2.5 Years',
      theoryTooltip: 'Theory Knowledge: 2 Years',
    },
    {
      name: 'CSS',
      image: css,
      practical: 80,
      theory: 80,
      practicalTooltip: 'Practical Knowledge: 2 Years',
      theoryTooltip: 'Theory Knowledge: 1.5 Years',
    },
    {
      name: 'React',
      image: react,
      practical: 75,
      theory: 80,
      practicalTooltip: 'Practical Knowledge: 1.5 Years',
      theoryTooltip: 'Theory Knowledge: 1 Year',
    },
    {
      name: 'Tailwind',
      image: tailwind,
      practical: 70,
      theory: 60,
      practicalTooltip: 'Practical Knowledge: 1 Year',
      theoryTooltip: 'Theory Knowledge: 0.5 Year',
    },
  ];

  return (
    <div className='box-border flex flex-col justify-center items-center h-auto p-5 bg-gray-600 rounded-3xl mt-5 opacity-90'>
      <h1 className='text-white text-2xl font-bold mb-4'>My Skills</h1>
      <div className='flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-32 items-center'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='cursor-pointer hover:scale-105 transition-transform'
            onClick={() => handleImageClick(skill)}
          >
            <img src={skill.image} alt={skill.name} className='w-24 sm:w-28 md:w-32 h-auto' />
          </div>
        ))}
      </div>

      {modalData && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-slate-600 p-4 rounded-lg shadow-lg text-center w-80'>
            <h2 className='text-xl font-bold mb-4'>{modalData.name}</h2>
            
            {/* Practical Knowledge Bar */}
            <div className='w-full mb-4'>
              <h3 className='text-white text-lg mb-1'>Practical Knowledge</h3>
              <div className='relative bg-gray-700 h-6 rounded mb-2'>
                <div
                  className='absolute bg-green-500 h-6 rounded-l'
                  style={{ width: `${modalData.practical}%` }}
                  title={modalData.practicalTooltip}
                ></div>
                <div className='absolute inset-0 flex justify-end items-center pr-2'>
                  <span className='text-white text-xs'>{modalData.practical}%</span>
                </div>
              </div>
            </div>
            
            {/* Theory Knowledge Bar */}
            <div className='w-full'>
              <h3 className='text-white text-lg mb-1'>Theory Knowledge</h3>
              <div className='relative bg-gray-700 h-6 rounded mb-2'>
                <div
                  className='absolute bg-blue-500 h-6 rounded-l'
                  style={{ width: `${modalData.theory}%` }}
                  title={modalData.theoryTooltip}
                ></div>
                <div className='absolute inset-0 flex justify-end items-center pr-2'>
                  <span className='text-white text-xs'>{modalData.theory}%</span>
                </div>
              </div>
            </div>
            
            <button
              className='bg-black text-white px-4 py-2 rounded hover:bg-blue-600'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
