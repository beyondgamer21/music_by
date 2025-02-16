import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';
import { Song } from '../types';
import { LyricsScreen } from './LyricsScreen';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  currentSong: Song | null;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentSong }) => {
  const [showLyrics, setShowLyrics] = useState(false);

  if (!currentSong) return null;

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800"
      >
        <div className="flex items-center px-4 py-2">
          <img 
            src={currentSong.cover} 
            alt={currentSong.title} 
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{currentSong.title}</h3>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
          </div>
          <button onClick={() => setShowLyrics(!showLyrics)}>
            <Mic className="text-white w-6 h-6" />
          </button>
        </div>
        
        {/* YouTube Music Embed */}
        <div className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentSong.youtubeId}?autoplay=1`}
            title="YouTube Music Player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {showLyrics && <LyricsScreen lyrics={currentSong.lyrics} onClose={() => setShowLyrics(false)} />}
    </>
  );
};
