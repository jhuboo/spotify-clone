"use client";

import { Song } from "@/types";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import Slider from "@/components/Slider";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const Icon = true ? BsPauseFill : BsPlayFill;
  const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;

  const handlePlay = () => {
    console.log("play");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      {/* MediaItem & LikeButton*/}
      <div className="flex w-full justify-center">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={handlePlay}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon
            size={30}
            className="text-black"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={handlePlay}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon
            size={30}
            className="text-black"
          />
        </div>
        <AiFillStepForward
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            size={30}
            onClick={() => {}}
            className="cursor-pointer"
          />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
