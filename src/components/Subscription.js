import React from "react";
import { useContext } from "react";
import { Context } from "../context/contextApi";
import LeftPanel from "./LeftPanel";
import Subs from "../images/subs.png";


const Subscription = () => {
  const { SubscribeChannel,UnSubscribe } = useContext(Context);

  const handleUnsubscribe = (videoId) => {
    UnSubscribe(videoId);
    console.log(videoId);
  };

  return (
    <div className="flex w-full overflow-y-auto ">
      <LeftPanel />
      {!SubscribeChannel ||SubscribeChannel.length === 0 ? (
        <>
             <div className="h-[90vh] md:h-[85vh] flex justify-center items-start md:items-center bg-black w-full overflow-y-hidden">
          <div className=" mt-[50px] md:mt-[40px] md:w-full   w-full md:flex flex md:flex-col flex-col md:justify-center md:items-center  justify-center items-center overflow-y-hidden md:overflow-y-hidden">
            <h1 className="text-center text-white text-sm md:text-2xl font-semibold">
              No Channels Subscribe yet
            </h1>
            <img src={Subs} alt="subs" className="md:w-[350px] w-[200px]" />
          </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2  md:gap-4 lg:gap-6 p-5 justify-center items-center w-[100%] ml-[48px]">
            {SubscribeChannel.map((video,index) => (
              
<div key={index} id="toast-message-cta" className="w-full max-w-[200px] p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
    <div className="flex">
        <img className="w-8 h-8 rounded-full shadow-lg" src={video?.author?.avatar[0]?.url} alt="Jese"/>
        <div className="ml-3 text-sm font-normal flex flex-col">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{video?.author?.title}</span>
           
            <button onClick={() => handleUnsubscribe(video)} className="inline-flex mt-1  px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">UnSubscribe</button>   
        </div>
      
    </div>
</div>

            ))}
          </div>
        </>
      )}

      {/* {loading && <Loader />} */}
    </div>
  );
};

export default Subscription;
