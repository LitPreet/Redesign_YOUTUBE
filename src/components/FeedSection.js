import React, { useContext, useEffect, useState } from "react";
import LeftPanelItem from "./LeftPanelItem";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";
import { BsArrowLeftShort } from "react-icons/bs";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import Loader from '../Loader/Loader'
import LeftPanel from "./LeftPanel";

const FeedSection = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    mobileMenu,
    searchResults,
    loading,
    open,
    setOpen,
  } = useContext(Context);
  const navigate = useNavigate();

  const ClickItemHandler = (type, name) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  })

  return (
    <div className="flex w-full overflow-y-auto ">
      <LeftPanel />
   
    
 {loading && <Loader />}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2  md:gap-4 lg:gap-6 p-5 justify-center items-center w-[100%] ml-[48px]">

 {!loading &&  Array.isArray(searchResults) &&
     searchResults.map((item, index) => {
       if (item.type !== "video") return false;
     
       return (
         <VideoCard key={`${item?.video?.videoId}-${index}`} video={item?.video}  />
       );
     })}
    
</div>
    </div>
  );
};

export default FeedSection;
