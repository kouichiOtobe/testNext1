'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
import React from 'react'
import { useEffect, useState } from 'react';
import { SideBarData } from './SideBarData'
import { SidebarIcon } from './SidebarIcon';

export const Sidebar = () => {
    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

  return (
    <div className="Sidebar">
        <SidebarIcon />
        
        <ul className='SidebarList'>
           {SideBarData.map((value,key) => {
                return(
                    <li key={key} className='row'
                        id={currentPath === value.link ? "active" : ""}
                        onClick={() => {
                        //currentPath = value.link
                        
                    }}>
                        <div id="icon">
                            {value.icon} 
                        </div>
                        <div id="title">
                            {value.title}
                        </div>
                    </li>
                )
             }
        )}
        </ul>
    </div>
  )

}
