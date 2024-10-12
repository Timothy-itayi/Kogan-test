// src/components/product/Carousel.js
import Image from 'next/image';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      <Image
        src={images[currentIndex]} // Display the current image
        alt={`Product Image ${currentIndex + 1}`}
        width={600}
        height={400}
        className="w-full"
      />
      <div className="flex justify-center mt-2 space-x-2">
        <button
          className="p-2 gray-400 bg-gray-400 text-white "
          onClick={handlePrevClick}
        >
            <Image
         src='/assets/left-arrow-2.png'
         width="15"
         height="21"
          className="filter invert"
         /> {/* Left Arrow */}
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
          className="p-2 gray-400 bg-gray-400 text-white "
          onClick={handleNextClick}
        >
         <Image
         src='/assets/right-arrow.png'
         width="15"
         height="21"
         className="filter invert"
         />
         {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
