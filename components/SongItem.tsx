"use client";

import Image from "next/image";

import { Song } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-lg overflow-hidden p-3 bg-neutral-800 hover:bg-neutral-700 cursor-pointer transition duration-200 ease-in-out"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "./images/liked.png"}
          fill
          alt="Song Image"
        />
      </div>
    </div>
  );
};

export default SongItem;
