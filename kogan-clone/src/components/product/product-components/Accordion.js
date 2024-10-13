import React, { useState } from 'react';
import data from './AccordionData';
import AccordionItem from './AccordionItem'; // Make sure you're correctly importing this component

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container border">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
