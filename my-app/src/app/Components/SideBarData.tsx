'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
// import React from 'react'
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import path from 'path';
import { MenuItem } from '@mui/material';

type MenuItem = {
  title: string;
  icon: React.ReactNode;
  path: string;
  children?: MenuItem[];
};

/**
 * MenuItem 配列を破壊的に変更し、指定された path の要素に children を追加する
 * @param menu - MenuItem 配列（直接変更される）
 * @param targetPath - 追加先の path
 * @param newChildren - 追加する children 配列
 * @returns 成功: true / 失敗: false
 */
function addChildrenByPathMutate(
  menu: MenuItem[],
  targetPath: string,
  newChildren: MenuItem[]
): boolean {
  let found = false;

  const addRecursively = (items: MenuItem[]) => {
    for (const item of items) {
      if (item.path === targetPath) {
        item.children = [...(item.children || []), ...newChildren];
        found = true;
        return;
      }
      if (item.children) {
        addRecursively(item.children);
        if (found) return;
      }
    }
  };

  addRecursively(menu);

  if (!found) {
    console.error(`指定された path "${targetPath}" は見つかりませんでした。`);
    return false;
  }

  return true;
}

//＊＊＊　メニュー　＊＊＊
export const SideBarMenu:MenuItem[] =[
    {
        title: "ホーム",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        title: "クイズ",
        icon: <SmartToyOutlinedIcon />,
        path: "/quiz"
    },
    {
        title: "フォームデモ",
        icon: <EmailOutlinedIcon />,
        path: "/testSidebar"
    },
    {
        title: "設定",
        icon: <SettingsSuggestOutlinedIcon />,
        path: "/Setting"
    },
    {
        title: "About",
        icon: <InfoOutlinedIcon />,
        path: "/about"
    }
]

//＊＊＊サブメニューの追可
const result = addChildrenByPathMutate(SideBarMenu,
     "/settings", [{title:"その他", icon: <SettingsSuggestOutlinedIcon />,path:"/setting/etc"}]);
console.log(result); // true

console.log(SideBarMenu); // menu に直接追加されている