import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { ImagePreview } from '../types';

interface ImageUploadProps {
  onImageSelect: (preview: ImagePreview) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        onImageSelect({ url, file });
      }
    },
    [onImageSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        onImageSelect({ url, file });
      }
    },
    [onImageSelect]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 transition-colors hover:border-indigo-500 cursor-pointer"
    >
      <Upload className="w-12 h-12 text-gray-400 mb-4" />
      <p className="text-lg text-gray-600 mb-2">Drag and drop your image here</p>
      <p className="text-sm text-gray-500 mb-4">or</p>
      <label className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors cursor-pointer">
        Browse Files
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileInput}
        />
      </label>
    </div>
  );
};