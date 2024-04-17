import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ClubCardProps {
  id: string;
}

interface ClubData {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  approved: string;
  profileImage: string | null;
  soc: boolean;
}

const ClubCard = (props: ClubCardProps) => {
  const [club, setClub] = useState<ClubData | undefined>();

  useEffect(() => {
    fetch('/api/clubs?id=' + encodeURIComponent(props.id))
      .then((response) => response.json())
      .then((data) => setClub(data.data));
  }, []);

  if (typeof club === 'undefined') {
    return null;
  }

  const desc =
    club.description.length > 50 ? club.description.slice(0, 150) + '...' : club.description;
  const name = club.name.length > 20 ? club.name.slice(0, 30) + '...' : club.name;

  return (
    <div className="h-full  flex flex-col  min-h-[400px] min-w-[300px] max-w-xs md:min-h-[600px]  rounded-lg bg-white shadow-lg">
      <div className="relative  h-48 sm:h-56 md:h-64 lg:h-72  overflow-hidden rounded-t-lg">
        <img
          src={club.profileImage ? club.profileImage : club.image}
          alt={club.name}
          className="absolute h-full w-full inset-0 select-none object-cover"
        />
        <button className="absolute right-2 top-2 rounded-full bg-black bg-opacity-50 p-1.5">
          <img src="/HeartOutline.svg" alt="Heart icon" className="h-7 w-7" />
        </button>
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h2 className="line-clamp-1 text-2xl font-medium text-slate-800 md:text-xl">{name}</h2>
        <p className="text-base text-slate-600 md:text-sm">{desc}</p>
      </div>
      <div className="m-5 mt-auto flex flex-row gap-4">
        <button className="px-4 py-2 bg-cornflower-500 rounded-full text-xs font-extrabold text-white transition-colors hover:bg-royal">
          Join
        </button>
        <Link
          href={`https://jupiter.utdnebula.com/directory/${club.id}`}
          className="px-4 py-2 bg-cornflower-50 rounded-full text-xs font-extrabold text-blue-primary transition-colors hover:bg-cornflower-100"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ClubCard;
