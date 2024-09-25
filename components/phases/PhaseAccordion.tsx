// File: components/phases/PhaseAccordion.tsx

import React, { useState } from 'react';
import AccordionItem from '../AccordionItem';
import BouwblokContainer from '../BouwblokContainer';
import { EditorState } from 'draft-js';

const PhaseAccordion: React.FC<{ phase: string }> = ({ phase }) => {
  const [blocks, setBlocks] = useState<
    {
      type: string;
      editorState?: EditorState;
      question?: string;
      answer?: string;
      options?: string[];
      correctAnswers?: boolean[];
    }[]
  >([]);

  const addBlock = (type: string, index?: number) => {
    const newBlock = { type, editorState: EditorState.createEmpty(), question: '', answer: '', options: ['', '', '', ''], correctAnswers: [false, false, false, false] };
    
    // If index is provided, insert the new block after the current one, otherwise add it at the end.
    const newBlocks = [...blocks];
    if (index !== undefined) {
      newBlocks.splice(index + 1, 0, newBlock); // Insert after the current index
    } else {
      newBlocks.push(newBlock); // Add to the end
    }
    
    setBlocks(newBlocks);
  };

  const moveBlockUp = (index: number) => {
    if (index > 0) {
      const newBlocks = [...blocks];
      const temp = newBlocks[index - 1];
      newBlocks[index - 1] = newBlocks[index];
      newBlocks[index] = temp;
      setBlocks(newBlocks);
    }
  };

  const moveBlockDown = (index: number) => {
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      const temp = newBlocks[index + 1];
      newBlocks[index + 1] = newBlocks[index];
      newBlocks[index] = temp;
      setBlocks(newBlocks);
    }
  };

  const removeBlock = (index: number) => {
    const newBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(newBlocks);
  };

  const updateBlockData = (index: number, newData: Partial<typeof blocks[0]>) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], ...newData };
    setBlocks(newBlocks);
  };

  return (
    <AccordionItem title={phase}>
      <div className="space-y-4">
        {blocks.map((block, index) => (
          <BouwblokContainer
            key={index}
            type={block.type}
            onMoveUp={() => moveBlockUp(index)}
            onMoveDown={() => moveBlockDown(index)}
            onRemove={() => removeBlock(index)}
            blockData={block} // Pass the entire blockData here
            updateBlockData={(newData: Partial<typeof blocks[0]>) =>
              updateBlockData(index, newData)
            }
            onGenerateOpenQuestion={() => addBlock('OpenVraag', index)} // Insert after current block
            onGenerateMultipleChoice={() => addBlock('MeerkeuzeVraag', index)} // Insert after current block
          />
        ))}

        {/* Buttons for adding different block types */}
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => addBlock('TekstBlok')}
            className="bg-gray-300 p-2 rounded-lg"
          >
            Voeg Tekstblok Toe
          </button>
          <button
            onClick={() => addBlock('MeerkeuzeVraag')}
            className="bg-gray-300 p-2 rounded-lg"
          >
            Voeg Meerkeuzevraag Toe
          </button>
          <button
            onClick={() => addBlock('OpenVraag')}
            className="bg-gray-300 p-2 rounded-lg"
          >
            Voeg Open Vraag Toe
          </button>
        </div>
      </div>
    </AccordionItem>
  );
};

export default PhaseAccordion;
