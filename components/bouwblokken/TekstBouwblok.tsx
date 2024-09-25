import React from 'react';
import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Dynamically import the editor to avoid SSR issues
const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });

interface TekstBouwblokProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
  onGenerateOpenQuestion: () => void;
  onGenerateMultipleChoice: () => void;
}

const TekstBouwblok: React.FC<TekstBouwblokProps> = ({
  onMoveUp,
  onMoveDown,
  onRemove,
  editorState,
  setEditorState,
  onGenerateOpenQuestion,
  onGenerateMultipleChoice,
}) => {
  const [image, setImage] = React.useState<string | null>(null);
  const [isLargeImage, setIsLargeImage] = React.useState(false);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null); // Remove the image
  };

  const handleImageSizeChange = (size: 'small' | 'large') => {
    setIsLargeImage(size === 'large');
  };

  return (
    <div className="relative p-4 border border-gray-300 rounded-lg max-w-full w-full md:max-w-3xl bg-white shadow-sm mx-auto">
      <div className="flex w-full">
        <div className="flex-grow">
          {/* Image Upload Section */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700">Text and image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {image && (
              <div className="mt-4 flex items-center">
                <button
                  onClick={() => handleImageSizeChange('small')}
                  className={`px-4 py-2 ${!isLargeImage ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg mr-2`}
                >
                  Small Image
                </button>
                <button
                  onClick={() => handleImageSizeChange('large')}
                  className={`px-4 py-2 ${isLargeImage ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg`}
                >
                  Large Image
                </button>
              </div>
            )}
          </div>

          {/* Rich Text Editor */}
          <div className={`flex ${isLargeImage ? 'flex-col' : 'flex-row'} w-full`}>
            {/* Editor */}
            <div className={`${image && !isLargeImage ? 'w-2/3' : 'w-full'} border border-gray-300 rounded-lg p-2 mb-4`}>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={handleEditorChange}
                toolbar={{
                  options: ['inline', 'blockType', 'list', 'link'],
                  inline: { options: ['bold', 'italic', 'underline'] },
                  blockType: {
                    inDropdown: true,
                    options: ['Normal', 'H1', 'H2', 'H3'],
                  },
                  list: { options: ['unordered', 'ordered'] },
                }}
              />
            </div>

            {/* Image Display */}
            {image && (
              <div className={`${isLargeImage ? 'w-full' : 'w-1/3'} mb-4 ml-4`}>
                <img
                  src={image}
                  alt="Uploaded"
                  className={`${
                    isLargeImage ? 'max-w-full h-auto' : 'max-w-[150px] h-auto'
                  } rounded-lg shadow-md`}
                  style={{ maxHeight: isLargeImage ? '600px' : 'auto' }}
                />
                <button
                  onClick={handleImageRemove}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Delete Image
                </button>
              </div>
            )}
          </div>

          {/* Generate Question Buttons */}
          <div className="flex justify-between mt-4 w-full space-x-4">
            <button
              onClick={onGenerateOpenQuestion}
              className="w-1/2 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Generate Open Question
            </button>
            <button
              onClick={onGenerateMultipleChoice}
              className="w-1/2 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Generate Multiple Choice
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2 ml-4 mt-6">
          <button onClick={onMoveUp} className="px-2 py-1 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none">
            ▲
          </button>
          <button onClick={onRemove} className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">
            ⨯
          </button>
          <button onClick={onMoveDown} className="px-2 py-1 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none">
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default TekstBouwblok;
