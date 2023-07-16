"use client";

import { Item } from "@/types/types";
import React, { useState } from "react";
import Image from "next/image";
import { PlaySection } from "./PlaySection";

export const HorizontalTrack = ({
  item,
  i,
  currentPlayingItem,
  setCurrentPlayingItem,
}: {
  item: Item;
  i: number;
  currentPlayingItem: Item | null;
  setCurrentPlayingItem: React.Dispatch<React.SetStateAction<Item | null>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isCurrentlyPlaying = currentPlayingItem?.track.id === item.track.id;

  return (
    <div
      className="flex justify-between px-4 items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setCurrentPlayingItem(item)}
    >
      <div
        className={`flex items-center ${
          currentPlayingItem ? "w-1/2" : "w-1/3"
        } show`}
      >
        <PlaySection
          isHovered={isHovered}
          preview_url={item.track.preview_url}
          songNo={i + 1}
        />
        <Image
          src={item.track.album.images[0].url}
          height={640}
          width={640}
          alt={item.track.album.name}
          className="w-10 h-10 object-cover mr-5"
        />
        <div>
          <p className={`${isCurrentlyPlaying ? "text-green-500" : ""}`}>
            {item.track.name}
          </p>
          <div className="flex items-center">
            {item.track.artists.map((artist, index) => (
              <>
                <p key={artist.id} className="text-sm">
                  {artist.name}
                </p>
                {index !== item.track.artists.length - 1 && (
                  <span className="mr-1">,</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <p className="w-1/3 show text-sm truncate">{item.track.album.name}</p>
      <p className="show">{formatDuration(item.track.duration_ms)}</p>
    </div>
  );
};

const formatDuration = (duration_ms: number): string => {
  const minutes = Math.floor(duration_ms / 60000);
  const seconds = Math.floor((duration_ms % 60000) / 1000);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
