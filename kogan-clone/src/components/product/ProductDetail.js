// src/components/product/ProductDetail.js
import Image from 'next/image';
import Carousel from './Carousel';
import Accordion from './product-components/Accordion';

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
  
 
          <h1 className=" pt-10  text-lg  text-black p-font ">Adidas Mens adizero Takumi Sen 8 Running Shoes Runners Sneakers - White/Teal/Orange - US 13</h1>
          <a href="#" className="text-black text-sm underline  ">Adidas</a>
          <div className="flex flex-row items-center pt-10">
  <p className='align-bottom'> 
    <Image 
      src='/assets/tick.svg'
      width='60'
      height='24'
      alt='tick'
      className='mr-2'
    />
  </p>
  <h2 className="   align-top inline-flex items-center">
  <p className="text-black  align-text-top p-font">
    Member
  </p>
  </h2>
</div>

       
          <div className="flex items-center ">
  <div className="flex flex-col">
  <span className="bg-red-500 text-white rounded-l-full  px-2 py-1 mr-2 text-3xl price-font">
  $208<span className="text-xl align-top-adjusted ">.55</span>
</span>

    <span className="text-black text-sm pt-2">Non-member <span className="font-bold">$215</span></span>
    </div>
    <div className='pl-5 '> 
    <div className="ml-auto text-black   mb-5 ">
    <span className="bg-red-500  p-0.5  text-xs text-white rounded px-2  mr-1 p-font " >FREE</span> 
    <span className="text-xs p-font" >Shipping</span>
  </div>
    </div>
 
  
</div>



        
          <div className="mb-4">

          </div>
          <button className="w-full bg-red-600 text-white font-bold py-2 rounded mb-4 hover:bg-red-700">Add to cart</button>
          <div className=" bg-[#f6ede6] p-4 rounded-t-lg">
          <div className="flex flex-row">
  <h2 className="text-sm text-black font-bold mb-2 inline-flex items-center">
    <p className=" align-text-bottom">Join</p>
    <Image 
      src='/assets/tick.svg'
      width='80'
      height='24'
      alt='tick'
      className='ml-1 align-bottom' 
    />
  </h2>
</div>

            <ul className="text-sm text-black mb-2">
              <li className="flex items-center mb-1"><Image
              src="/assets/untitled.svg"
              width="24"
              height="24"
              alt='untitled'
              className="font-size: 12px"
              />             
              <i className="fas fa-check text-green-500 mr-2">
              </i> Save <span className="font-bold ml-1 mr-1">$6.45</span> on Non-Member Price</li>
              <li className="flex items-center mb-1">
                
                <i className="fas fa-check text-green-500 mr-2">
                  <Image
                  src="/assets/earn.svg"
                  width="24"
                  height="24"
                  alt="earn"
                  className='font-size: 12px'

                  />
                  </i> Earn <span className="font-bold ml-1 mr-1">$2.09</span> Rewards Credit</li>
           
            </ul>
           
           
  
          </div>
          <div className='bg-[#e71333] pt-3  pb-2 rounded-b-lg'>
            <p className="text-xs  text-center text-white">Try 14 days of Kogan FIRST for free. Cancel anytime.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
