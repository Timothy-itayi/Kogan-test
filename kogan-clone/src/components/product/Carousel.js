import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const totalImages = images.length;

// Handle left arrow click
const handlePrevClick = () => {
  if (isTransitioning) return; 
  setIsTransitioning(true);
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;

  // Set transition and move the previous image to the first position
  carouselRef.current.style.transition = 'none';
  carouselRef.current.insertBefore(carouselRef.current.children[totalImages - 1], carouselRef.current.firstChild);
  requestAnimationFrame(() => {
    carouselRef.current.style.transition = 'transform 0.5s ease-out';
    carouselRef.current.style.transform = `translateX(100%)`;
    requestAnimationFrame(() => {
      carouselRef.current.style.transition = '';
      carouselRef.current.style.transform = '';
      setIsTransitioning(false);
      setCurrentIndex(prevIndex);
    });
  });
};

  // Handle right arrow click
  const handleNextClick = () => {
    if (isTransitioning) return; 
    setIsTransitioning(true);
    const nextIndex = (currentIndex + 1) % totalImages;

    carouselRef.current.style.transition = 'transform 0.2s ease-out';
    carouselRef.current.style.transform = `translateX(-${100}%)`;

    setTimeout(() => {
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(0)`;
      carouselRef.current.appendChild(carouselRef.current.children[0]);

      setTimeout(() => {
        carouselRef.current.style.transition = '';
        carouselRef.current.style.transform = '';
        setIsTransitioning(false);
        setCurrentIndex(nextIndex); 
      },);
    }, );
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <div className="relative overflow-hidden">
        <div ref={carouselRef} className="flex transition-transform ease-out duration-500">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Product Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        <button className="p-2 bg-gray-400 text-white" onClick={handlePrevClick}>
          <Image
            src="/assets/left-arrow-2.png"
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
            className={`border-2 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'} transition-border`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button className="p-2 bg-gray-400 text-white mr-2" onClick={handleNextClick}>
          <Image
            src="/assets/right-arrow.png"
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
