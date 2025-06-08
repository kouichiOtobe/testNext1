'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
import React from 'react'
import { useEffect, useState } from 'react';
import { SideBarData } from './SideBarData'
import { SidebarIcon } from './SidebarIcon';
import Link from 'next/link';

export const Sidebar = () => {
    // const [currentPath, setCurrentPath] = useState('');
    // useEffect(() => {
    //     setCurrentPath(window.location.pathname);
    // }, []);

  return (
    <div className="Sidebar">
        <SidebarIcon />
        
        <ul className='SidebarList'>
           {SideBarData.map((item,ix) => {
                return(
                    <li key={ix} className='row'>
                        <Link href={item.link}>
                            <div id="icon">
                                {item.icon}
                            </div>
                            <div id="title">
                                {item.title}
                            </div>
                        </Link>
                    </li>
                )
             }
        )}
        </ul>
    </div>
  )

}
