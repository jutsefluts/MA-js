// File: components/bouwblokken/MeerkeuzeBouwblok.tsx

import React from 'react';

interface MeerkeuzeBouwblokProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  question: string;
  options: string[];
  correctAnswers: boolean[];
  setQuestion: (question: string) => void;
  setOptions: (options: string[]) => void;
  setCorrectAnswers: (correctAnswers: boolean[]) => void;
}

const MeerkeuzeBouwblok: React.FC<MeerkeuzeBouwblokProps> = ({
  onMoveUp,
  onMoveDown,
  onRemove,
  question,
  options,
  correctAnswers,
  setQuestion,
  setOptions,
  setCorrectAnswers,
}) => {
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleCheckboxChange = (index: number) => {
    const newCorrectAnswers = [...correctAnswers];
    newCorrectAnswers[index] = !newCorrectAnswers[index];
    setCorrectAnswers(newCorrectAnswers);
  };

  return (
    <div className="relative p-4 border border-gray-300 rounded-lg max-w-full w-full md:max-w-3xl bg-white shadow-sm mx-auto">
      <div className="flex w-full">
        <div className="flex-grow">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Multiple Choice Question:</label>
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              placeholder="Enter the main question"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Options:</label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={option}
                  onChange={(event) => handleOptionChange(index, event)}
                  placeholder={`Option ${index + 1}`}
                  className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
                />
                <input
                  type="checkbox"
                  checked={correctAnswers[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="h-5 w-5"
                />
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Answer:</label>
            <p>{correctAnswers.map((isCorrect, idx) => isCorrect && `Option ${idx + 1}`).filter(Boolean).join(', ') || 'None selected'}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2 ml-4 mt-6">
          <button
            onClick={onMoveUp}
            className="px-2 py-1 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            ▲
          </button>
          <button
            onClick={onRemove}
            className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
          >
            ⨯
          </button>
          <button
            onClick={onMoveDown}
            className="px-2 py-1 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none"
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeerkeuzeBouwblok;
