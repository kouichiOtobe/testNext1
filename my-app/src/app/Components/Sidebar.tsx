'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
import React from 'react'
// import { useEffect, useState } from 'react';
import { SideBarMenu, MenuItem } from './SideBarData'
import { SidebarIcon } from './SidebarIcon';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from "react";

function SidebarItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="ml-2">
  
      <div
        className="flex items-center gap-2 px-4 py-2 hover:bg-blue-600"
        onClick={() => hasChildren && setOpen(!open)}
      >
        <div id="icon">{item.icon}</div>
        {hasChildren ? (open ? "▼ " : "▶ ") : " "}
        <Link href={item.path}>{item.title}</Link>
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
    console.log(SideBarMenu);
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