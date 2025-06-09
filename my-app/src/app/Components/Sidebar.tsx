'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
import React from 'react'
import { usePathname } from "next/navigation";
// import { useEffect, useState } from 'react';
import { SideBarMenu, MenuItem } from './SideBarData'
import { SidebarIcon } from './SidebarIcon';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from "react";

function SidebarItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const pathname = usePathname();
　const isActive = pathname === item.path;

  return (
    <div className="ml-2">
  
      <div
        className=""
        onClick={() => hasChildren && setOpen(!open)}
      >
        <Link href={item.path}
          className={clsx("flex items-center gap-2 px-4 py-2 rounded transition-colors",
             isActive ? "bg-white text-black" : "text-white hover:bg-blue-600")}>
          <div id="icon">{item.icon}</div>
            {hasChildren ? (open ? "▼ " : "▶ ") : " "}
          {item.title}
        </Link>
      </div>
      {open && hasChildren && (
        <div className="ml-4">
          {item.children!.map((child) => (
            <SidebarItem key={child.path} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
    //console.log(SideBarMenu);
  return (
    <div className='bg-black text-white'>
        <aside className="w-64 p-4 h-screen overflow-auto">
            <SidebarIcon />
             {SideBarMenu.map((item) => (
            <SidebarItem key={item.path} item={item} />
        ))}
        </aside>
    </div>
  );
}