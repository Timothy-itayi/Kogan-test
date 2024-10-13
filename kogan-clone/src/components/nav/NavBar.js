// src/components/NavBar.js
import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';
const NavBar = () => {
  return (
    <div className="flex   p-4 bg-white shadow-md fixed  w-full z-10">
      <div className="flex items-center">
        <Image
          src="/assets/kogan-logo.png"
          alt="kogan logo"
          height={150}
          width={150}
        />
      </div>
      <SearchBar/>
 <div className="ml-auto">
 <button className="p-2   ">
          <Link href="https://timothyitayi.com">
            <i className=' hover:text-[#e71333] underline text-black'>Made by Tim</i>
          </Link>
        </button>
 </div>
 
 </div>
       
      
    
  );
};

export default NavBar;
