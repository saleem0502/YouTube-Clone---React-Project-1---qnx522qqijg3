import React, { useEffect } from "react";
import "../Main/VideoSuggestion.css";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useStateProvider } from "../../utils/StateProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useNavigation

function VideoSuggestion() {
  const navigate = useNavigate(); // Use useNavigate instead of useNavigation
  let viewNum;
  let hoursNum;
  const [{ searchResult, selectedVideo }, dispatch] = useStateProvider();
  const handleSong = (obj) => {
    dispatch({ type: "SET_VIDEO", payload: obj });
    navigate("/detail"); // Use navigate to navigate to the "/detail" route
  };
  useEffect(() => {
    console.log(selectedVideo);
  }, [selectedVideo]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
      {searchResult?.map((obj) => {
        return (
          <div className="suggestion" onClick={() => handleSong(obj)}>
            <div>
              <img src={obj.thumbnail} alt="dummy" className="image_sugg" />
            </div>
            <div style={{ marginLeft: "15px", marginTop: "25px" }}>
              <Typography sx={{ fontSize: "17px", color: "black" }}>
                {obj.title}
              </Typography>

              <Typography sx={{ color: "gray", fontSize: "13px" }}>
                {(viewNum = Math.floor(Math.random() * 1000) + 1)}
                {(hoursNum = Math.floor(Math.random() * 100) + 1)}
                {viewNum} Views &#8226; {hoursNum}Hours ago
              </Typography>
              <Typography
                sx={{ color: "gray", fontSize: "12px", marginTop: "13px" }}>
                <Stack direction="row">
                  <Avatar
                    alt="avatar"
                    sx={{
                      width: 35,
                      height: 35,
                      mr: "5px",
                    }}
                    src={obj.thumbnail}></Avatar>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {obj.director}
                  </div>
                </Stack>
              </Typography>
              <Typography
                sx={{ color: "gray", fontSize: "12px", marginTop: "13px" }}
                className="description-text">
                {obj.description}
              </Typography>
            </div>
          </div>
        );
      })}
    </Box>
  );
}

export default VideoSuggestion;