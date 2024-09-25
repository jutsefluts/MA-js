// File: components/BouwblokContainer.tsx

import React from 'react';
import TekstBouwblok from './bouwblokken/TekstBouwblok';
import OpenVraagBouwblok from './bouwblokken/OpenVraagBouwblok';
import MeerkeuzeBouwblok from './bouwblokken/MeerkeuzeBouwblok';
import { EditorState } from 'draft-js';

interface BouwblokContainerProps {
  type: string;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  blockData: {
    editorState?: EditorState;
    question?: string;
    answer?: string;
    options?: string[];
    correctAnswers?: boolean[];
  };
  updateBlockData: (newData: Partial<BouwblokContainerProps['blockData']>) => void;
  onGenerateOpenQuestion?: () => void; // Optional, only for TekstBouwblok
  onGenerateMultipleChoice?: () => void; // Optional, only for TekstBouwblok
}

const BouwblokContainer: React.FC<BouwblokContainerProps> = ({
  type,
  onMoveUp,
  onMoveDown,
  onRemove,
  blockData,
  updateBlockData,
  onGenerateOpenQuestion,
  onGenerateMultipleChoice,
}) => {
  switch (type) {
    case 'TekstBlok':
      return (
        <TekstBouwblok
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onRemove={onRemove}
          editorState={blockData.editorState!}
          setEditorState={(editorState: EditorState) =>
            updateBlockData({ editorState })
          }
          onGenerateOpenQuestion={onGenerateOpenQuestion!}
          onGenerateMultipleChoice={onGenerateMultipleChoice!}
        />
      );
    case 'MeerkeuzeVraag':
      return (
        <MeerkeuzeBouwblok
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onRemove={onRemove}
          question={blockData.question!}
          options={blockData.options!}
          correctAnswers={blockData.correctAnswers!}
          setQuestion={(question: string) => updateBlockData({ question })}
          setOptions={(options: string[]) => updateBlockData({ options })}
          setCorrectAnswers={(correctAnswers: boolean[]) =>
            updateBlockData({ correctAnswers })
          }
        />
      );
    case 'OpenVraag':
      return (
        <OpenVraagBouwblok
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onRemove={onRemove}
          question={blockData.question!}
          answer={blockData.answer!}
          setQuestion={(question: string) => updateBlockData({ question })}
          setAnswer={(answer: string) => updateBlockData({ answer })}
        />
      );
    default:
      return null;
  }
};

export default BouwblokContainer;
