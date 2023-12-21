"use client";

import { Song } from "@/types";
import MediaItem from "@/components/MediaItem";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found
      </div>
    );
  }

  return (
    <div>
      {songs.map((song: Song) => (
        <div key={song.id}>
          <div>
            <MediaItem data={song} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
