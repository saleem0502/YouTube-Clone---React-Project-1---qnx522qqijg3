import React from "react";
import "./Style/App.css";
import Header from "./component/Header/Header";
import SideBar from "./component/SideBar/SideBar";
import VideoFeed from "./component/Main/VideoFeed";
import WatchLater from "./component/Watchlater/WatchLater";
import { Route, Routes, useLocation } from "react-router-dom";
import YoutubePremium from "./component/Subscription/YoutubePremium";
import VideoDetail from "./component/Main/VideoDetail";
import SignUp from "./component/UserPage/SignUp";
import SignIn from "./component/UserPage/SignIn";
import VideoSuggestion from "./component/Main/VideoSuggestion";
import UpdatePassword from "./component/UserPage/UpdatePassword";
import UpdateProfile from "./component/UserPage/UpdateProfile";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/signup" ? (
        <SignUp />
      ) : location.pathname === "/signin" ? (
        <SignIn />
      ) : location.pathname === "/premium" ? (
        <YoutubePremium />
        ) : location.pathname === "/password" ? (
          <UpdatePassword />
          ) : location.pathname === "/profile" ? (
            <UpdateProfile />
      ) : (
        <div className="main">
          <Header />
          <div className="section">
            <SideBar />
            <Routes>
              <Route path="/" exact element={<VideoFeed />} />

              <Route path="/later" element={<WatchLater />} />
              <Route path="/premium" element={<YoutubePremium />} />
              <Route path="/detail" element={<VideoDetail />} />
              <Route path="/suggestion" element={<VideoSuggestion />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
