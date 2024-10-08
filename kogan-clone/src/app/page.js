'use client';

import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md fixed w-full z-10">
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

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="mt-16"> {/* Add margin-top to avoid content being hidden behind the fixed navbar */}
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-2">
            <a href="#" className="hover:underline">CLOTHING, SHOES & ACCESSORIES</a>
            <a href="#" className="hover:underline"> MEN'S SHOES & FASHION</a>
            <a href="#" className="hover:underline"> MEN'S SHOES</a>
            <a href="#" className="hover:underline"> MEN'S RUNNING SHOES</a>
          </div>

          <div className="flex">
            <div className="w-2/3">
              <Image
                src="" // Add your image source here
                alt="Adidas Mens adizero Takumi Sen 8 Running Shoes Runners Sneakers - White/Teal/Orange - US 13"
                width={600}
                height={400}
                className="w-full"
              />
              <div className="flex mt-2 space-x-2">
                <Image
                  src="" // Thumbnail image source
                  alt="Thumbnail 1"
                  width={50}
                  height={50}
                  className="border-2 border-blue-500"
                />
                <Image
                  src="" // Thumbnail image source
                  alt="Thumbnail 2"
                  width={50}
                  height={50}
                />
                <Image
                  src="" // Thumbnail image source
                  alt="Thumbnail 3"
                  width={50}
                  height={50}
                />
                <Image
                  src="" // Thumbnail image source
                  alt="Thumbnail 4"
                  width={50}
                  height={50}
                />
                <Image
                  src="" // Thumbnail image source
                  alt="Thumbnail 5"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="w-1/3 pl-4">
              <div className="flex items-center mb-2">
                <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Low Stock</span>
                <button className="ml-auto text-gray-500 hover:text-gray-700">
                  <i className="far fa-heart"></i> Add to wishlist
                </button>
              </div>
              <h1 className="text-xl font-bold mb-2">Adidas Mens adizero Takumi Sen 8 Running Shoes Runners Sneakers - White/Teal/Orange - US 13</h1>
              <a href="#" className="text-blue-500 hover:underline mb-4 block">Adidas</a>
              <div className="flex items-center mb-4">
                <span className="text-red-600 text-3xl font-bold">$208.55</span>
                <span className="text-gray-500 text-sm ml-2 line-through">Non-member $215</span>
                <span className="ml-auto text-green-600 font-semibold">FREE Shipping</span>
              </div>
              <div className="mb-4">
                <label htmlFor="size" className="block text-gray-700 mb-1">Size</label>
                <select id="size" className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>US 13</option>
                </select>
              </div>
              <button className="w-full bg-red-600 text-white font-bold py-2 rounded mb-4 hover:bg-red-700">Add to cart</button>
              <div className="bg-gray-100 p-4 rounded">
                <h2 className="text-lg font-bold mb-2">Join FIRST</h2>
                <ul className="text-sm text-gray-700 mb-2">
                  <li className="flex items-center mb-1"><i className="fas fa-check text-green-500 mr-2"></i> Save $6.45 on Non-Member Price</li>
                  <li className="flex items-center mb-1"><i className="fas fa-check text-green-500 mr-2"></i> Earn $2.09 Rewards Credit</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Bonus $10 Kogan.com Credit*</li>
                </ul>
                <p className="text-xs text-gray-500">Try 14 days of Kogan FIRST for free. Cancel anytime.</p>
                <a href="#" className="text-blue-500 hover:underline text-sm font-semibold mt-2 block">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
