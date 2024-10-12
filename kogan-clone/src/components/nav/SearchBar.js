import Image from 'next/image';


const SearchBar = () => {
  return (
    <div className="flex items-center ml-4 w-full max-w-2xl">
      <input
        type="text"
        className="flex grow p-2 border rounded-l-full text-black focus:outline-none"
        placeholder="Search"
        defaultValue="Search"
      />
      <button type="submit" className="flex items-center justify-center p-3  bg-red-600  rounded-r-full">
        <Image
          src='/assets/search.png'
          width={21}
          height={21}
          alt='search icon'
          className='filter invert'
        />
      </button>
      <button className="p-2 text-gray-500">
        <i className="fas fa-times"></i>
      </button>

    </div>
  );
};

export default SearchBar;
