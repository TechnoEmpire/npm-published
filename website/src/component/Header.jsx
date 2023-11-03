import React from 'react';

export const Header = () => {
  return (
    <>
      <div className='relative z-20 w-full flex justify-between items-center h-20 z-30'>
        <a href='https://github.com/TechnoEmpire/react-easy-modal' target='_blank' rel='noopener noreferrer' className='text-3xl text-gray-100 leading-tight'>
          react-easy-modal
        </a>

        <ul className='flex text-lg lowercase italic'>
          <a href='https://github.com/TechnoEmpire/react-easy-modal' target='_blank' rel='noopener noreferrer'>
            <li className='ml-4'>Feature</li>
          </a>
          <a href='https://github.com/TechnoEmpire/react-easy-modal' target='_blank' rel='noopener noreferrer'>
            <li className='ml-4'>Docs</li>
          </a>
          <a href='https://github.com/TechnoEmpire/react-easy-modal' target='_blank' rel='noopener noreferrer'>
            <li className='ml-4'>
              <button className='block mb-4 px-3 py-2 text-xs font-bold rounded no-underline hover:shadow bg-purple-600 text-white'>
                GitHub
              </button>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};
