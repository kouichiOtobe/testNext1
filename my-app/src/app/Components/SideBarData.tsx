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

export type MenuItem = {
  title: string;
  icon: React.ReactNode;
  path: string;
  children?: MenuItem[];
};

//＊＊＊　メニュー　＊＊＊
export const SideBarMenu:MenuItem[] =[
    {
        title: "ホーム",
        icon: <HomeIcon />,
        path: "/"
    },
    {
        title: "勉強中",
        icon: <SmartToyOutlinedIcon />,
        path: "/testSidebar",
        children: [ {
            title: "フォームデモ",
            icon: <EmailOutlinedIcon />,
            path: "/testSidebar"
        },
        {
            title: "クイズ",
            icon: <SmartToyOutlinedIcon />,
            path: "/quiz"
        }]
    },
    {
        title: "設定",
        icon: <SettingsSuggestOutlinedIcon />,
        path: "/Setting",
        children: [{
            title: "補助設定",
            icon: <SettingsSuggestOutlinedIcon />,
            path: "/Setting/hojyo"
        }]
    },
    {
        title: "About",
        icon: <InfoOutlinedIcon />,
        path: "/about"
    }
]