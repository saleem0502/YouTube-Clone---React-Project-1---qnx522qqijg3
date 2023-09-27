import React, { useEffect, useState } from "react";
import "./VideoFeed.css";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../../utils/StateProvider";

function VideoFeed() {
  const [videolist, setvideolist] = useState([]);
  const [, dispatch] = useStateProvider();
  const projectId = "qnx522qqijg3";
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(` https://academics.newtonschool.co/api/v1/ott/show`, {
        headers: {
          projectId: projectId,
        },
      })
      .then((response) => {
        dispatch({ type: "SET_VIDEO_LIST", payload: response.data.data });
        setvideolist(response.data.data);
      })

      .catch((error) => {
        console.error("Error fetching music data:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    console.log("Updated videoList:", videolist);
  }, [videolist]);

  const handleVideoDetail = (video) => {
    dispatch({ type: "SET_VIDEO", payload: video });
  };
  return (
    <Grid
      spacing={3}
      sx={{
        m: "20px 0px 0px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}>
      {videolist?.map((video, index) => {
        return (
          <Grid
            key={video._id}
            sm={12}
            className="video_list"
            item
            onClick={() => {
              handleVideoDetail(video);
              navigate("/detail");
            }}>
            <img src={video.thumbnail} alt="dummy" className="main_image" />
            <Box
              sx={{
                display: "flex",
                width: "326px",
                height: "100px",
                ml: "13px",
              }}>
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                }}
                src={video.thumbnail}
                alt="User Avatar"
              />
              <Box sx={{ pl: "5px" }}>
                <Typography>{video.title}</Typography>
                <Typography sx={{ color: "gray" }}>{video.director}</Typography>
                <Typography sx={{ color: "gray" }}>
                  views &#8226; hours ago
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default VideoFeed;