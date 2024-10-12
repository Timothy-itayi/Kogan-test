// src/components/NavBar.js
import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';
const NavBar = () => {
  return (
    <div className="flex  p-4 bg-white shadow-md fixed  w-full z-10">
      <div className="flex items-center">
        <Image
          src="/assets/kogan-logo.png"
          alt="kogan logo"
          height={100}
          width={100}
        />
      </div>
      <SearchBar/>
 <div className="ml-auto">
 <button className="p-2  text-black">
          <Link href="https://timothyitayi.com">
            <i>Made by Tim</i>
          </Link>
        </button>
 </div>
 
 </div>
       
      
    
  );
};

export default NavBar;
