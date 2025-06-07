'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
import React from 'react'
import { SideBarData } from './SideBarData'
import { SidebarIcon } from './SidebarIcon';

export const Sidebar = () => {
  return (
    <div className="Sidebar">
        <SidebarIcon />
        <ul className='SidebarList'>
           {SideBarData.map((value,key) => {
                return(
                    <li key={key} className='row'
                        id={window.location.pathname == value.link ? "active" : ""}
                        onClick={() => {
                        window.location.pathname = value.link
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
