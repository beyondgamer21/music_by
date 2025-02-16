import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Song } from '../types';

interface LyricsScreenProps {
  song: Song;
  onClose: () => void;
}

export const LyricsScreen: React.FC<LyricsScreenProps> = ({ song, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full mx-4 bg-zinc-900 rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <img
            src={song.cover}
            alt={song.title}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">{song.title}</h2>
            <p className="text-gray-400">{song.artist}</p>
          </div>
        </div>

        <div className="text-gray-300 whitespace-pre-line">
          {song.lyrics || "No lyrics available"}
        </div>
      </div>
    </motion.div>
  );
};