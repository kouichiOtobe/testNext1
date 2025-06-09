'use client'; // App Router を使っている場合は必要（クライアントコンポーネント）
// import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

export const SideBarData =[
    {
        title: "ホーム",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "クイズ",
        icon: <SmartToyOutlinedIcon />,
        link: "/quiz"
    },
    {
        title: "フォームデモ",
        icon: <EmailOutlinedIcon />,
        link: "/testSidebar"
    },
    {
        title: "About",
        icon: <InfoOutlinedIcon />,
        link: "/about"
    }
]