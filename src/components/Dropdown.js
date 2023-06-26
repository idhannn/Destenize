import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <p className="text-xs text-slate-400 ms-5">Lokasi</p>
        <button
          type="button"
          className="inline-flex justify-center w-full text-blue rounded-md shadow-sm px-4 py-2 bg-white font-medium text-gray-700 text-lg hover:bg-gray-50"
          id="dropdown-menu-button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          Indonesia Yogyakarta
          <svg
            className="-mr-1 ml-2 h-7 w-7 rotate-180 hover:bg-slate-200 p-1 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3.586L3.707 9.879a1 1 0 001.414 1.414L10 6.414l4.879 4.879a1 1 0 001.414-1.414L10 3.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
        >
          {/* Item dropdown */}
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 hover:bg-slate-100 text-sm"
              role="menuitem"
            >
              Opsi 1
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 hover:bg-slate-100 text-sm"
              role="menuitem"
            >
              Opsi 2
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 hover:bg-slate-100 text-sm"
              role="menuitem"
            >
              Opsi 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
