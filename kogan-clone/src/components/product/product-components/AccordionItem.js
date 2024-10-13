import React, { useRef } from 'react';
import Image from 'next/image';

const AccordionItem = ({ title, body, isOpen, onClick }) => {
  const contentHeight = useRef(null);

  return (
    <div className="wrapper pl-4">
      <button
        className={`title-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className="title-content">{title}</p>
        <Image 
          src='/assets/right-arrow.png'
          width='21'
          height='21'
          alt='arrow'
          className={`arrow ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
      <div
        ref={contentHeight}
        className={`body-container pl-3 ${isOpen ? 'open' : ''}`}
        style={isOpen ? { height: contentHeight.current.scrollHeight } : { height: '0px' }}
      >
        <p className="body-content">{body}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
