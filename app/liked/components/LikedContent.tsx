"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import LikedButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400 items-center justify-center">
        <p className="text-2xl font-bold mt-80">No Liked Songs</p>
      </div>
    );

  return (
    <div className="flex flex-col w-full gap-y-2 p-6">
      {songs.map((song: any) => (
        <div
          key={song.id}
          className="flex items-center w-full gap-x-4"
        >
          <div className="flex-1">
            <MediaItem
              data={song}
              onClick={(id: string) => onPlay(id)}
            />
          </div>
          <LikedButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
