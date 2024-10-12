// src/components/NavBar.js
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md fixed  w-full z-10">
      <div className="flex items-center">
        <Image
          src="/assets/kogan-logo.png"
          alt="kogan logo"
          height={100}
          width={100}
        />
      </div>
      <div className="flex items-center ml-4 w-full max-w-2xl">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l-full focus:outline-none"
          placeholder="running shoe mens"
          defaultValue="running shoe mens"
        />
        <button className="p-2 bg-red-500 text-white rounded-r-full">
          <i className="fas fa-search"></i>
        </button>
        <button className="p-2 text-gray-500">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
