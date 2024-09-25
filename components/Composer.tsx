"use client";

import React, { useReducer } from "react";
import PhaseAccordion from "./phases/PhaseAccordion";

// BlockState interface defines the state for different phases and showOptions
export interface BlockState {
  blocksByPhase: {
    Introductie: string[];
    Instructie: string[];
    Verwerking: string[];
    Afronding: string[];
  };
  showOptions: {
    Introductie: number | null;
    Instructie: number | null;
    Verwerking: number | null;
    Afronding: number | null;
  };
}

type ActionType =
  | { type: "ADD_BLOCK"; phase: keyof BlockState["blocksByPhase"]; blockType: string; index: number }
  | { type: "SHOW_OPTIONS"; phase: keyof BlockState["showOptions"]; index: number }
  | { type: "MOVE_UP"; phase: keyof BlockState["blocksByPhase"]; index: number }
  | { type: "MOVE_DOWN"; phase: keyof BlockState["blocksByPhase"]; index: number }
  | { type: "REMOVE_BLOCK"; phase: keyof BlockState["blocksByPhase"]; index: number };

const initialState: BlockState = {
  blocksByPhase: {
    Introductie: [],
    Instructie: [],
    Verwerking: [],
    Afronding: [],
  },
  showOptions: {
    Introductie: null,
    Instructie: null,
    Verwerking: null,
    Afronding: null,
  },
};

// Reducer function to manage state transitions
function reducer(state: BlockState, action: ActionType): BlockState {
  switch (action.type) {
    case "ADD_BLOCK":
      const updatedBlocksForPhase = [...state.blocksByPhase[action.phase]];
      updatedBlocksForPhase.splice(action.index, 0, action.blockType);
      return {
        ...state,
        blocksByPhase: {
          ...state.blocksByPhase,
          [action.phase]: updatedBlocksForPhase,
        },
        showOptions: { ...state.showOptions, [action.phase]: null },
      };

    case "SHOW_OPTIONS":
      return {
        ...state,
        showOptions: { ...state.showOptions, [action.phase]: action.index },
      };

    case "MOVE_UP":
      const moveUpBlocks = [...state.blocksByPhase[action.phase]];
      if (action.index > 0) {
        [moveUpBlocks[action.index - 1], moveUpBlocks[action.index]] = [
          moveUpBlocks[action.index],
          moveUpBlocks[action.index - 1],
        ];
      }
      return {
        ...state,
        blocksByPhase: { ...state.blocksByPhase, [action.phase]: moveUpBlocks },
      };

    case "MOVE_DOWN":
      const moveDownBlocks = [...state.blocksByPhase[action.phase]];
      if (action.index < moveDownBlocks.length - 1) {
        [moveDownBlocks[action.index + 1], moveDownBlocks[action.index]] = [
          moveDownBlocks[action.index],
          moveDownBlocks[action.index + 1],
        ];
      }
      return {
        ...state,
        blocksByPhase: {
          ...state.blocksByPhase,
          [action.phase]: moveDownBlocks,
        },
      };

    case "REMOVE_BLOCK":
      const updatedBlocks = state.blocksByPhase[action.phase].filter(
        (_, i) => i !== action.index
      );
      return {
        ...state,
        blocksByPhase: { ...state.blocksByPhase, [action.phase]: updatedBlocks },
      };

    default:
      return state;
  }
}

export default function ComposerPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBlock = (type: string, phase: keyof BlockState["blocksByPhase"], index: number) => {
    dispatch({ type: "ADD_BLOCK", blockType: type, phase, index });
  };

  const showOptionsForPhase = (phase: keyof BlockState["showOptions"], index: number) => {
    dispatch({ type: "SHOW_OPTIONS", phase, index });
  };

  const moveUp = (index: number, phase: keyof BlockState["blocksByPhase"]) => {
    dispatch({ type: "MOVE_UP", index, phase });
  };

  const moveDown = (index: number, phase: keyof BlockState["blocksByPhase"]) => {
    dispatch({ type: "MOVE_DOWN", index, phase });
  };

  const removeBlock = (index: number, phase: keyof BlockState["blocksByPhase"]) => {
    dispatch({ type: "REMOVE_BLOCK", index, phase });
  };

  return (
    <main className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-8">Lesdetails</h1>

      <div className="space-y-4 max-w-5xl mx-auto">
        {["Introductie", "Instructie", "Verwerking", "Afronding"].map((phase) => (
          <PhaseAccordion
            key={phase}
            phase={phase as keyof BlockState["blocksByPhase"]}
            blocks={state.blocksByPhase[phase as keyof BlockState["blocksByPhase"]]}
            showOptions={state.showOptions[phase as keyof BlockState["showOptions"]]}
            onShowOptions={(index) => showOptionsForPhase(phase as keyof BlockState["showOptions"], index)}
            onAddBlock={(type, index) => addBlock(type, phase as keyof BlockState["blocksByPhase"], index)}
            onMoveUp={(index) => moveUp(index, phase as keyof BlockState["blocksByPhase"])}
            onMoveDown={(index) => moveDown(index, phase as keyof BlockState["blocksByPhase"])}
            onRemoveBlock={(index) => removeBlock(index, phase as keyof BlockState["blocksByPhase"])}
          />
        ))}
      </div>
    </main>
  );
}