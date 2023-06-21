import React from "react";

import { AiFillHome, AiOutlineFlag,AiFillBell,AiFillLike } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import {BiLogOutCircle} from 'react-icons/bi'

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
   
    { name: "Likes", icon: <AiFillLike />, type: "menu" },
    { name: "Subscription", icon: <AiFillBell />, type: "subs" },
   
];
export const categories1 = [
    { name: "New", icon: <AiFillHome />, type: "home",divider: true, },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category",divider: true, },
    { name: "Music", icon: <CgMusicNote />, type: "category",divider: true, },
    { name: "Films", icon: <FiFilm />, type: "category",divider: true, },
    { name: "Live", icon: <MdLiveTv />, type: "category",divider: true, },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category",divider: true, },
    { name: "News", icon: <ImNewspaper />, type: "category",divider: true, },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category",divider: true, },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    
  
];