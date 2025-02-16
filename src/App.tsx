import React, { useState, Suspense } from 'react';
import { Music2 } from 'lucide-react';
import { songs } from './data/songs';
import { Song } from './types';
import { SongCard } from './components/SongCard';
import { MusicPlayer } from './components/MusicPlayer';
import { Sidebar } from './components/Sidebar';
import Spline from '@splinetool/react-spline';

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [splineError, setSplineError] = useState(false);

  const handleSplineError = () => {
    setSplineError(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <Sidebar className="fixed h-screen" />
        
        <main className="flex-1 ml-64">
          {/* Hero Section with 3D Object */}
          <div className="h-[500px] relative overflow-hidden">
            {!splineError ? (
              <Suspense fallback={<div className="w-full h-full bg-zinc-900" />}>
                <Spline 
                  scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.splinecode"
                  onError={handleSplineError}
                />
              </Suspense>
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-zinc-800 to-black" />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-5xl font-bold mb-4">Welcome to Melody</h1>
                <p className="text-xl text-gray-300">Your music, reimagined.</p>
              </div>
            </div>
          </div>

          {/* Featured Section */}
          <div className="px-8 py-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Featured Songs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {songs.map((song) => (
                <SongCard 
                  key={song.id} 
                  song={song} 
                  onPlay={setCurrentSong}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Music Player */}
      <MusicPlayer currentSong={currentSong} />
    </div>
  );
}

export default App;