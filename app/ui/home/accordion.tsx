'use client';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "FULL REMODELS",
      content: "Complete transformation of your space from start to finish. Our full remodel services include design, demolition, construction, and final touches to create your dream environment."
    },
    {
      title: "KITCHEN RENOVATIONS",
      content: "Modernize your kitchen with our expert renovation services. We handle cabinetry, countertops, flooring, and appliances to create a functional and beautiful cooking space."
    },
    {
      title: "BATHROOM UPGRADES",
      content: "Transform your bathroom into a spa-like retreat. Our upgrades include plumbing, tiling, fixtures, and lighting to enhance both functionality and aesthetics."
    },
    {
      title: "OFFICE FIT-OUTS",
      content: "Professional workspace solutions tailored to your business needs. We design and build efficient, stylish office environments that boost productivity."
    }
  ];

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col border-t border-gray-200 my-10">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="flex items-center justify-between w-full py-5 text-left group"
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <div className="flex items-center">
              <span className="mr-3 text-gray-500 group-hover:text-gray-900 transition-colors">
                {activeIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </span>
              <h2 className="text-lg font-medium group-hover:text-blue-600 transition-colors">
                {item.title}
              </h2>
            </div>
          </button>
          
          <div
            id={`accordion-content-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <div className="pl-10 pr-5 text-gray-600">
              <p>{item.content}</p>
              <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// export default Accordion;