export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  cover: string;
  url: string;
  lyrics?: string;
}

export interface Playlist {
  id: number;
  name: string;
  cover: string;
  songs: Song[];
}

export interface ImagePreview {
  url: string;
  file: File;
}