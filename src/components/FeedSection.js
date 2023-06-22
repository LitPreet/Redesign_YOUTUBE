import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";
import Loader from "../Loader/Loader";
import LeftPanel from "./LeftPanel";

const FeedSection = () => {
  const { searchResults, loading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  });

  return (
    <div className="flex w-full overflow-y-auto bg-black">
      <LeftPanel />

      {loading && (
        <div className="h-[100vh] bg-black w-full">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2  md:gap-4 lg:gap-6 p-5 justify-center items-center w-[100%] ml-[48px]">
        {!loading &&
          Array.isArray(searchResults) &&
          searchResults.map((item, index) => {
            if (item.type !== "video") return false;

            return (
              <VideoCard
                key={`${item?.video?.videoId}-${index}`}
                video={item?.video}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FeedSection;
