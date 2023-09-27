import React, { useEffect, useState } from "react";
import "../Watchlater/WatchLater.css";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShuffleSharpIcon from "@mui/icons-material/ShuffleSharp";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WatchLater() {
  let viewNum;
  let hoursNum;
  const navigate = useNavigate();

  const [{ token, userName }, dispatch] = useStateProvider();
  const [watchLater, setWatchlater] = useState([]);

  const apiUrl = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";

  const headers = {
    Authorization: `Bearer ${token}`,
    projectID: "qnx522qqijg3",
  };
  console.log(token);

  useEffect(() => {
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log(response.data.data.shows);
        setWatchlater(response.data.data.shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleWatchLaterVideo = (obj) => {
    dispatch({ type: "SET_VIDEO", payload: obj });
    navigate("/detail");
  };

  return (
    <div className="watchlater-body">
      <div className="primary-watchlater">
        <div className="image_button" display="flex">
          <img
            src={watchLater[0]?.thumbnail}
            alt="dummy"
            className="watch_later_img"
          />
          <div>
            <h1
              style={{
                fontFamily: "Roboto,sans-serif",
                fontSize: "24px",
                color: "white",
                marginLeft: "20px",
              }}>
              Watch Later
            </h1>
            <h5
              style={{
                fontFamily: "Roboto,sans-serif",
                marginTop: "20px",
                color: "white",
                marginLeft: "20px",
              }}>
              {userName}
            </h5>
            <h6
              style={{
                fontFamily: "Roboto,sans-serif",
                marginTop: "10px",
                fontSize: "11px",
                color: "white",
                marginLeft: "20px",
              }}>
              {watchLater.length} Videos
            </h6>
          </div>
          <div>
            <Button
              sx={{
                color: "white",
                borderRadius: "50%", // Set the border-radius to 50% for a round shape
                width: "60px", // Set the width and height to define the size of the button
                height: "50px",
                marginLeft: "20px",
              }}>
              <ArrowDownwardIcon />
            </Button>
            <Button
              sx={{
                color: "white",
                borderRadius: "50%",
                height: "50px",
                marginLeft: "20px",
              }}>
              <MoreVertIcon />
            </Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
          }}>
          <Button
            sx={{
              borderRadius: "25px",
              width: "100%",
              height: "40px",
              background: "white",
              color: "black",
              marginLeft: "20px",
              textTransform: "none",
            }}>
            <PlayArrowIcon sx={{ padding: "10px" }} />
            Play all
          </Button>
          <Button
            sx={{
              borderRadius: "25px",
              width: "100%",
              height: "40px",
              background: "#637272",
              color: "black",
              marginRight: "20px",
              textTransform: "none",
            }}>
            <ShuffleSharpIcon sx={{ padding: "10px" }} />
            Shuffle
          </Button>
        </div>
      </div>
      <div className="secondary-watchlater">
        {watchLater.map((watch) => {
          return (
            <Stack
              direction="row"
              key={watch._id}
              onClick={() => handleWatchLaterVideo(watch)}>
              <img
                src={watch.thumbnail}
                alt="dummy"
                style={{
                  margin: "0px 0px 10px 15px",
                  width: "165px",
                  height: "90px",
                  cursor: "pointer",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />

              <div style={{ marginLeft: "10px" }}>
                <Typography sx={{ fontSize: "14px", color: "black" }}>
                  {watch.title}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Typography sx={{ color: "gray", fontSize: "12px" }}>
                    {watch.director}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize: "13px" }}>
                    {(viewNum = Math.floor(Math.random() * 1000) + 1)}
                    {(hoursNum = Math.floor(Math.random() * 100) + 1)}
                    {viewNum} Views &#8226; {hoursNum}Hours ago
                  </Typography>
                </Stack>
              </div>
            </Stack>
          );
        })}
      </div>
    </div>
  );
}

export default WatchLater;