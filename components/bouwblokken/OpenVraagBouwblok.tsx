// File: components/bouwblokken/OpenVraagBouwblok.tsx

import React from 'react';

interface OpenVraagBouwblokProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  question: string;
  answer: string;
  setQuestion: (question: string) => void;
  setAnswer: (answer: string) => void;
}

const OpenVraagBouwblok: React.FC<OpenVraagBouwblokProps> = ({
  onMoveUp,
  onMoveDown,
  onRemove,
  question,
  answer,
  setQuestion,
  setAnswer,
}) => {
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <div className="relative p-4 border border-gray-300 rounded-lg max-w-full w-full md:max-w-3xl bg-white shadow-sm mx-auto">
      <div className="flex w-full">
        <div className="flex-grow">
          {/* Question Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Question:</label>
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              placeholder="Enter the question"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Answer Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Answer:</label>
            <input
              type="text"
              value={answer}
              onChange={handleAnswerChange}
              placeholder="Enter the correct answer"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
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

export default OpenVraagBouwblok;
