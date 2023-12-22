"use client";

import Image from "next/image";

import { Song } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const player = usePlayer();

  // Remove any part of the title within parentheses
  // for example
  // If the data.title has a something within parentheses () such as "Heroes Tonight (feat. Johnning)"" -
  //  only "Heroes Tonight" should be shown.
  const titleWithoutParentheses = data.title.replace(/\s*\(.*?\)\s*/g, "");

  const handleClick = () => {
    if (onClick) {
      onClick(data.id);
    }

    return player.setId(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/80 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden ">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt="Song Image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white text truncate sm:line-clamp-1">
          {titleWithoutParentheses}
        </p>
        <p className="text-neutral-400 text-sm truncate sm:line-clamp-1">
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
