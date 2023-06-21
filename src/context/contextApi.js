import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [likedVideo, setLikedVideo] = useState([]);
  const [SubscribeChannel, setSubscribeChannel] = useState([]);
  const [account, setAccount] = useState(true);


  const addLikedVideo = (video) => {
    setLikedVideo((prevLikedVideo) => [...prevLikedVideo, video]);
  };

  const addSubscribe = (video) => {
    setSubscribeChannel((prevLikedVideo) => [...prevLikedVideo, video]);
  };
  const UnSubscribe = (video) => {
    setSubscribeChannel((prevLikedVideo) =>
      prevLikedVideo.filter((v) => v !== video)
    );
  };
  const removeLikedVideo = (video) => {
    setLikedVideo((prevLikedVideo) =>
      prevLikedVideo.filter((v) => v !== video)
    );
  };

  //it will be called when user clicks on side panel
  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`)
      .then(({ contents }) => {
        setSearchResults(contents);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Context.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        loading,
        setLoading,
        open,
        setOpen,
        likedVideo,
        addLikedVideo,
        removeLikedVideo,
        SubscribeChannel,
        setSubscribeChannel,
        addSubscribe,
        UnSubscribe,
        account, setAccount
        
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
