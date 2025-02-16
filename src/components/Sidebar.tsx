import React from 'react';
import { Home, Library, Search, Plus } from 'lucide-react';
import { playlists } from '../data/songs';
import { cn } from '../lib/utils';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("w-64 bg-black p-6", className)}>
      <div className="space-y-4">
        <div className="space-y-2">
          <button className="text-white flex items-center space-x-2 hover:text-green-400 transition-colors w-full">
            <Home className="h-6 w-6" />
            <span>Home</span>
          </button>
          <button className="text-white flex items-center space-x-2 hover:text-green-400 transition-colors w-full">
            <Search className="h-6 w-6" />
            <span>Search</span>
          </button>
          <button className="text-white flex items-center space-x-2 hover:text-green-400 transition-colors w-full">
            <Library className="h-6 w-6" />
            <span>Your Library</span>
          </button>
        </div>

        <div className="pt-4">
          <button className="text-white flex items-center space-x-2 hover:text-green-400 transition-colors w-full">
            <Plus className="h-6 w-6" />
            <span>Create Playlist</span>
          </button>
        </div>

        <div className="pt-4">
          <h2 className="text-white font-semibold mb-4">Your Playlists</h2>
          <div className="space-y-2">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                className="text-gray-400 hover:text-white transition-colors w-full text-left"
              >
                {playlist.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};