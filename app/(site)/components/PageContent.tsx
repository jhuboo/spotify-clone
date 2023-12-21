"use client";

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <>
        <div className="flex justify-center items-center h-96">
          <h1 className="text-white text-2xl font-semibold">No songs found</h1>
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 2xl:grid-cols-8 gap-4 mt-4j">
      {songs.map((song) => (
        <SongItem
          onClick={(id: string) => onPlay(id)}
          key={song.id}
          data={song}
        />
      ))}
    </div>
  );
};

export default PageContent;
