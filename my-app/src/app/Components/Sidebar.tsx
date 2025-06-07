'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
import React from 'react'
import { SideBarData } from './SideBarData'

export const Sidebar = () => {
  return (
    <div className="Sidebar">
        <ul className='SidebarList'>
           {SideBarData.map((value,key) => {
                return(
                    <li key={key} className='row' onClick={() => {
                        window.location.pathname = value.link
                    }}>
                        <div id="`icon${key}`">
                            {value.icon} 
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
