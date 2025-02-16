import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Song } from '../types';

interface SongCardProps {
  song: Song;
  onPlay: (song: Song) => void;
}

const fetchYouTubeMusicId = async (query: string) => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=AIzaSyAkg6eCyMiH7nabDwXwoN9TwAIj9QV-f1Q`);
  const data = await response.json();
  return data.items.length > 0 ? data.items[0].id.videoId : null;
};

export const SongCard: React.FC<SongCardProps> = ({ song, onPlay }) => {
  const [loading, setLoading] = useState(false);

  const handlePlay = async () => {
    setLoading(true);
    const youtubeId = await fetchYouTubeMusicId(`${song.title} ${song.artist} audio`);
    if (youtubeId) {
      onPlay({ ...song, youtubeId });
    }
    setLoading(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 rounded-lg overflow-hidden transition-shadow hover:shadow-xl"
    >
      <div className="relative group">
        <img 
          src={song.cover} 
          alt={song.title} 
          className="w-full h-48 object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {loading ? <span className="text-white">Loading...</span> : <Play className="w-12 h-12 text-white" />}
        </motion.button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{song.title}</h3>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>
    </motion.div>
  );
};
