// src/components/product/ProductDetail.js
import Image from 'next/image';
import Carousel from './Carousel';
import Accordion from './product-components/accordion';

const ProductDetail = () => {
  const images = [
    '/assets/productImages/photo01.jpeg',
    '/assets/productImages/photo02.jpeg',
    '/assets/productImages/photo03.jpeg',
    '/assets/productImages/photo04.jpeg',
    '/assets/productImages/photo05.jpeg',
  ];

  return (
    <div className="py-20">

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <Carousel images={images} />
        <Accordion/> 
        </div>
        <div className="md:w-1/3 md:pl-4 mt-4 md:mt-0">
  
 
          <h1 className=" pt-10  text-black font-bold mb-2">Adidas Mens adizero Takumi Sen 8 Running Shoes Runners Sneakers - White/Teal/Orange - US 13</h1>
          <a href="#" className="text-black underline mb-4 block">Adidas</a>
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
  );
};

export default ProductDetail;
