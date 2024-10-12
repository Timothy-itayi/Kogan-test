// src/components/product/Carousel.js
import Image from 'next/image';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + images.length) %images.length;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
  <div className="max-w-md mx-auto py-10">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Product Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full 34"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        <button
          className="p-2 bg-gray-400 text-white"
          onClick={handlePrevClick}
        >
          <Image
            src='/assets/left-arrow-2.png'
            width="15"
            height="21"
            alt="Previous"
            className="filter invert"
          />
        </button>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            width={50}
            height={50}
            className={`border-2 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button
          className="p-2 bg-gray-400 text-white mr-2"
          onClick={handleNextClick}
        >
          <Image
            src='/assets/right-arrow.png'
            width="15"
            height="21"
            alt="Next"
            className="filter invert"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
