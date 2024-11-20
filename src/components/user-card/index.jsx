import React from 'react';
import Button from '../button';
import { useState } from 'react';

export default function UserCard({ user }) {
  const [following, setFollowing] = useState(false);
  return (
    <button className="py-3 px-4 flex gap-3 transition-colors hover:bg-white/[0.03]">
      <img
        src={user.avatar}
        className="w-10 h-10 rounded-full object-cover"
        alt=""
      />
      <div className="flex-1 flex flex-col text-left">
        <div className="text-[15px] text-[#e7e9ea] font-bold leading-5">
          {user.fullName}
        </div>
        <div className="text-[15px] text-[#71767b] ">@{user.username}</div>
      </div>
      <div>
        {following ? (
          <Button
            size="small"
            variant="white-outline"
            onClick={() => setFollowing(false)}
            className="whitespace-nowrap group"
          >
            <div className="flex group-hover:hidden">Takip ediliyor</div>
            <div className="hidden group-hover:flex">Takibi bırak</div>
          </Button>
        ) : (
          <Button
            size="small"
            variant="white"
            onClick={() => setFollowing(true)}
          >
            Takip et
          </Button>
        )}
      </div>
    </button>
  );
}
