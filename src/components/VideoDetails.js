import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
import Loader from "../Loader/Loader";

const VideoDetails = () => {
  // this determines whether the button is disabled or not
  const [isDisabled, setIsDisabled] = useState(false);
  const [disableSubscribe, setDisableSubscribe] = useState(false);
  const [video, setVideo] = useState();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();

  const {  addLikedVideo, addSubscribe } =
    useContext(Context);
// eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    setIsDisabled(false);
    setDisableSubscribe(false);
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const handleLike = (video) => {
    addLikedVideo(video);
    setIsDisabled(true);
  };
  const handleSubscribe = (video) => {
    addSubscribe(video);
    setDisableSubscribe(true);
  };

  const styles = {
    buttonDisabled: {
      cursor: "not-allowed",
    },
  };

  const fetchVideoDetails = () => {
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      setVideo(res);

      setIsVideoLoaded(true);
    });
  };

  const fetchRelatedVideos = () => {
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideos(res);
    });
  };

  return !video || video.length === 0 ? (
    <>
      <Loader />
    </>
  ) : (
    <div className="flex justify-center h-[calc(100%-56px)] flex-row  bg-[#222222]">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] py-3 px-4 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg-mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>

              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-start">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>
                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0 ">
              <button
                onClick={() => handleLike(video)}
                disabled={!isVideoLoaded || isDisabled}
                style={isDisabled ? styles.buttonDisabled : styles.button}
                className="px-4 w-[120px] h-[45px] flex items-center justify-center  bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform "
              >
                <AiOutlineLike className="text-xl md:text-2xl text-white mr-2" />
                <span className='class="ml-2"'>
                  {`${abbreviateNumber(video?.stats?.likes, 2)}`}
                </span>
              </button>

              <div className="flex items-center  justify-center h-11 px-[0.5rem] w-[120px]  md:px-6 rounded-3xl bg-white/[0.15] ml-4">
                <AiOutlineEye className="text-xl md:text-3xl text-white mr-2" />
                <span className="flex">
                  {`${abbreviateNumber(video?.stats?.views, 2)}`}
                </span>
              </div>
              <button
                onClick={() => handleSubscribe(video)}
                disabled={!isVideoLoaded || disableSubscribe}
                style={disableSubscribe ? styles.buttonDisabled : styles.button}
                className=" mx-2 w-[120px] inline-flex justify-center items-center h-[45px]  px-[2px] sm:py-2 sm:px-3 md:py-2 md:px-4 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
              >
                <svg className="h-6 w-6 md:w-8 md:h-8 fill-current mr-2" viewBox="0 0 24 24">
                  <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                </svg>
                <span className="text-sm">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
