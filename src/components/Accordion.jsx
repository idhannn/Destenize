import React, { useState } from 'react';
import style from './style'

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (

    <section className="py-5 sm:py-10">
      <div className={`${style.container}`}>
      <div className="bg-white rounded-md shadow-md">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-0' : 'max-h-32'
        }`}
      >
        <div className="px-4 py-3 bg-gray-100 text-slate-600">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
      </div>
    </section>


  );
}

export default Accordion;

