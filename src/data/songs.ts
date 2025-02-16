import { Song, Playlist } from '../types';

export const songs: Song[] = [
  {
    id: 1,
    title: "Forest Lullaby",
    artist: "Lesfm",
    album: "Nature Sounds",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1ecd.mp3",
    lyrics: "[Verse 1]\nIn the whispers of the trees\nNature's melody at ease\nGentle breezes, soft and slow\nGuiding dreams where'er they go\n\n[Chorus]\nForest lullaby, sweet and pure\nNature's harmony to cure\nClose your eyes and drift away\nLet the forest guide your way"
  },
  {
    id: 2,
    title: "Summer Walk",
    artist: "Olexy",
    album: "Peaceful Moments",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    url: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_c9a4a1d834.mp3",
    lyrics: "[Verse 1]\nSunlight dancing through the leaves\nWarm embrace of summer breeze\nFootsteps light upon the ground\nPeace in solitude is found"
  },
  {
    id: 3,
    title: "Ambient Piano",
    artist: "SergeQuadrado",
    album: "Reflections",
    cover: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    url: "https://cdn.pixabay.com/download/audio/2022/03/19/audio_270bbe0b6c.mp3",
    lyrics: "[Verse 1]\nKeys of ivory and dreams\nMelodies flow like streams\nEchoes of emotions deep\nMemories we choose to keep"
  }
];

export const playlists: Playlist[] = [
  {
    id: 1,
    name: "Chill Vibes",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    songs: [songs[0], songs[1]]
  },
  {
    id: 2,
    name: "Focus Mode",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    songs: [songs[2], songs[0]]
  }
];