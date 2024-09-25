// File: components/AccordionItem.tsx
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg mb-4">
      <div
        onClick={handleToggle}
        className="cursor-pointer p-4 bg-gray-200 flex justify-between items-center"
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

export default AccordionItem;
