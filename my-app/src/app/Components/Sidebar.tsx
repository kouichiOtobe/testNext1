'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
import React from 'react'
// import { useEffect, useState } from 'react';
import { SideBarData } from './SideBarData'
import { SidebarIcon } from './SidebarIcon';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
    const pathname = usePathname();
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
                        <Link href={item.link}
                            className={clsx('block px-4 py-2 rounded hover:bg-gray-300',
                              pathname === item.link && 'bg-blue-500 text-white'
                            )}
                        >
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
