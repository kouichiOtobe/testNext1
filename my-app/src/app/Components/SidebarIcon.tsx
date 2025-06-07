import React from 'react';
import Image from 'next/image';
import Icon from "../Images/AGAVE_Icon.png";

export const SidebarIcon = () => {
  return (
    <div className="SidebarIcon">
        <Image src={Icon} alt="SidebarIcon" width={50}/>
        <p>otobe@s-gardening.jp</p>
    </div>
  )
}
