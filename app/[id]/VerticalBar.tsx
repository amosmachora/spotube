import { useGlobalData } from "@/hooks/useGlobalData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const VerticalBar = () => {
  const { playlists } = useGlobalData();
  return (
    <div className="show flex flex-col justify-end h-screen w-20">
      <p>Logo</p>
      {playlists?.map((playlist) => (
        <Link key={playlist.id} href={playlist.id}>
          <Image
            src={playlist.images[0].url}
            alt={playlist.name}
            height={playlist.images[0].height ?? 120}
            width={playlist.images[0].width ?? 120}
            className="h-12 w-12 cursor-pointer my-3 rounded object-cover mx-auto"
          />
        </Link>
      ))}
    </div>
  );
};
