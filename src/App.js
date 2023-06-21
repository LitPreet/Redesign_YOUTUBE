import React, { useState, useEffect,useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Header from "./components/Header";
import FeedSection from "./components/FeedSection";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import LikedVideoList from "./components/LikedVideoList";
import Subscription from "./components/Subscription";
import Intro from "./components/Intro";
import { AppContext } from "./context/contextApi";
import Login from "./login/Login";
import SignUp from "./SignUp/SignUp";



const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [ authenticated, setAuthenticated] = useState(false);


  const handleUserSignUp = () => {
    setAuthenticated(true);
  };
  const handleUserSignOut = () => {
    setAuthenticated(false);
  };

  useEffect(() => {
    if (authenticated) {
      const introTimer = setTimeout(() => {
        setShowIntro(false);
      }, 6000);

      return () => {
        clearTimeout(introTimer);
      };
    }
  }, [authenticated]);

  return (
    <AppContext>
      <BrowserRouter>
        {authenticated ? (
          showIntro ? (
            <Intro />
          ) : (
            <div className="flex flex-col h-full">
              <Header onSignOut={handleUserSignOut}/>
              <Routes>
                <Route path="/"  element={<FeedSection />} />
                <Route
                  path="/searchResult/:searchQuery"
                  element={<SearchResult />}
                />
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/liked-videos" element={<LikedVideoList />} />
                <Route path="/subscribe-channel" element={<Subscription />} />
              </Routes>
            </div>
          )
        ) : (
          <Routes>
            <Route
              path="/login"
              element={<Login onSignUp={handleUserSignUp} />}
            />
            <Route
              path="/signup"
              element={<SignUp onSignUp={handleUserSignUp} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
