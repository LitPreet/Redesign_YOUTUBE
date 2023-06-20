import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import FeedSection from "./components/FeedSection";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import LikedVideoList from "./components/LikedVideoList";
import Subscription from "./components/Subscription";

import { AppContext } from "./context/contextApi";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<FeedSection />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/liked-videos" element={<LikedVideoList />} />
            <Route path="/subscribe-channel" element={<Subscription />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
