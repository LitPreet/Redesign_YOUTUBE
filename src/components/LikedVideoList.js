import React from "react";
import { useContext } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import VideoLength from "../shared/VideoLength";
import { Context } from "../context/contextApi";
import LeftPanel from "./LeftPanel";
import Like from "../images/like.png";
import { IoMdRemoveCircle } from "react-icons/io";

const LikedVideoList = () => {
  const { likedVideo, removeLikedVideo } = useContext(Context);

  const handleUnlike = (videoId) => {
    removeLikedVideo(videoId);
    console.log(videoId);
  };
  const handleDivClick = (videoId) => {
    window.location.href = `/video/${videoId}`;
  };

  return (
    <div className="flex w-full overflow-y-auto ">
      <LeftPanel />
      {!likedVideo || likedVideo.length === 0 ? (
        <>
        <div className="h-[90vh] md:h-[85vh] bg-black flex justify-center items-start md:items-center w-full overflow-y-hidden">
          <div className=" mt-[50px] md:mt-[40px] md:w-full w-full md:flex flex md:flex-col flex-col md:justify-center md:items-center  justify-center items-center overflow-y-hidden md:overflow-y-hidden">
            <h1 className="text-center text-white text-sm md:text-2xl font-semibold">
              No liked videos yet
            </h1>
            <img src={Like} alt="d" className="md:w-[350px] w-[200px]" />
          </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2  md:gap-4 lg:gap-6 p-5 justify-center items-center w-[100%] ml-[48px]">
            {likedVideo.map((video) => (
              <div className='flex flex-col items-center '>
              <div
                onClick={() => handleDivClick(video?.id)}
                className="flex flex-col mb-8 mx-3 bg-[#222222] cursor-pointer rounded-lg border-[2px] border-black "
              >
                <div className="relative h-40 md:first-line:h-40  overflow-hidden">
                  <img
                    className="h-full w-full object-cover" alt="img"
                    src={video?.thumbnails?.[0]?.url}
                  />

                  {video.lengthSeconds && (
                    <VideoLength time={video?.lengthSeconds} />
                  )}
                </div>
                <div className="flex text-black mt-3 ml-2">
                  <div className="flex items-start">
                    <div className="flex h-9 w-9 rounded-full border border-white overflow-hidden">
                      <img
                        className="h-full w-full object-cover "
                        src={video?.author?.avatar[0]?.url}
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-3 overflow-hidden">
                    <span className="text-sm font-bold line-clamp-2 text-white">
      
                      {video?.title}
                    </span>
                    <span className="text-[12px] font-semibold mt-2 text-white/[0.8] flex items-center">
                      {!video?.author?.title && "Zinc"}
                      {video?.author?.title}

                      {video?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}
                    </span>

                    <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                      <span>
                        {`${abbreviateNumber(video?.stats?.views, 2)}`} views
                      </span>
                      <span
                        className="flex text-[24px] leading-none font-bold text-black/[0.7] relative
   top-[-10px] mx-1"
                      >
                        .
                      </span>
                      <span className="truncate">
                        {video?.publishedTimeText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => handleUnlike(video)}    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-sm px-8 py-2.5 text-center mr-2 mb-2 flex justify-center items-center"><IoMdRemoveCircle />{" "} UnLike</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* {loading && <Loader />} */}
    </div>
  );
};

export default LikedVideoList;
