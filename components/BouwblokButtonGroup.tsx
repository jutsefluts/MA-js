import React from 'react';

interface ButtonGroupProps {
  onMoveUp: () => void;
  onRemove: () => void;
  onMoveDown: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onMoveUp, onRemove, onMoveDown }) => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <button
        onClick={onMoveUp}
        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all shadow"
        aria-label="Move Up"
      >
        ▲
      </button>
      <button
        onClick={onRemove}
        className="bg-red-500 p-2 rounded-md text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all shadow"
        aria-label="Remove Block"
      >
        ✖
      </button>
      <button
        onClick={onMoveDown}
        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all shadow"
        aria-label="Move Down"
      >
        ▼
      </button>
    </div>
  );
};

export default ButtonGroup;
