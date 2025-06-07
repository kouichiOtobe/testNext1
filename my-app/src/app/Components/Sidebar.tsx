import React from 'react'
import { SideBarData } from './SideBarData'


export const Sidebar = () => {
  return (
    <div className="Sidebar">
        <ul className='SidebarList'>
           {SideBarData.map((value,key) => {
                return(
                    <li>
                        <div id="icon">
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
