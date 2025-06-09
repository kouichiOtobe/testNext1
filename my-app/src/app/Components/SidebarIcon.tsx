"use client" // App Router では必須（クライアントコンポーネント）
import React from 'react';
import Image from 'next/image';
import Icon from "../Images/AGAVE_Icon.png";

export const SidebarIcon = () => {
  return (
    <div className="SidebarIcon">
        <div  className="flex justify-center items-center">
            <Image src={Icon} alt="SidebarIcon" priority />
        </div>
        <p>利用者：乙部</p>
    </div>
  )
}
