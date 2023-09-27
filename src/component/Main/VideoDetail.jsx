import React, { useEffect } from "react";
import "../Main/VideoDetail.css";
import { Avatar, Typography, Button } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
// import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function VideoDetail() {
  // const navigate = useNavigate();
  const [{ selectedVideo, list, token }, dispatch] = useStateProvider();

  const randomArr = Math.floor(Math.random() * 4);
  var endIndex = randomArr * 20 + 19;
  const displayedList = list.slice((0 + randomArr) * 19, endIndex);

  useEffect(() => {
    // console.log("displayedList", displayedList);
  }, [displayedList]);
  const subscribeNum = Math.floor(Math.random() * 10) + 1;
  const likeNum = Math.floor(Math.random() * 1000) + 1;
  let viewNum;
  let hoursNum;

  const handleVideoDetail = (obj) => {
    setTimeout(() => {
      dispatch({ type: "SET_VIDEO", payload: obj });
      // console.log(obj);
      console.log("selectedVideo", selectedVideo);
    }, 1000);
  };

  const handleWatchLater = () => {
    if (token === null) {
      console.log(token);
      alert("Please LogIn");
    } else {
      const apiUrl =
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
      const jwtToken = token;
      const projectId = "qnx522qqijg3";
      const showId = selectedVideo._id; // Replace 'your_show_id' with the actual show ID.

      const headers = {
        Authorization: `Bearer ${jwtToken}`,
        projectID: projectId,
      };

      const data = {
        showId: showId,
      };
      // axios.method(url,header,body).then((response)=>{}).catch((errror)=>{})
      axios
        .patch(apiUrl, data, { headers })
        .then((response) => {
          console.log("PATCH request successful:", response.data);
          if (
            response.data.message === "Show added to watchlist successfully."
          ) {
            alert("Show added to watchlist successfully.");
          } else if (
            response.data.message ===
            "Show removed from watchlist successfully."
          ) {
            alert("Show removed from watchlist successfully.");
          }
        })
        .catch((error) => {
          console.error("Error making PATCH request:", error);
        });

      console.log(token);
    }
  };
  return (
    <div className="main-body">
      <div className="primary-section">
        <video loop controls style={{ width: "100%" }}>
          <source src={selectedVideo.video_url} />
        </video>
        <h3
          style={{
            fontFamily: "Roboto, Arial, sans-serif",
            margin: "12px 0px 12px 0px",
          }}>
          {selectedVideo.title + " : " + selectedVideo.description}
        </h3>
        <div className="video_footer">
          <div style={{ display: "flex", alignItems: "center", width: "700" }}>
            <Avatar
              sx={{
                width: 35,
                height: 35,
              }}
              src={selectedVideo.thumbnail}
              alt="User Avatar"
            />
            <div style={{ paddingLeft: "15px" }}>
              <Typography sx={{ color: "Black" }}>
                {selectedVideo.director}
              </Typography>
              <Typography sx={{ color: "gray", fontSize: "13px" }}>
                {subscribeNum}M subscribers
              </Typography>
            </div>
            <Button
              variant="contained"
              size="medium"
              sx={{
                height: "38px",
                borderRadius: "40px",
                backgroundColor: "black",
                textTransform: "none",
                marginLeft: "10px",
              }}>
              Subscribe
            </Button>
          </div>
          <div className="button-group">
            <Button
              className="button-style"
              sx={{
                color: "black",
                background: "#e4e5eb",
                marginLeft: "2px",
              }}>
              {/* need  to add gaps bet buttons */}
              <ThumbUpOffAltIcon />
              {likeNum}
            </Button>
            <Button
              className="button-style"
              sx={{
                color: "black",
                background: "#e4e5eb",
                marginLeft: "2px",
              }}>
              <ThumbDownOffAltIcon />
            </Button>

            <Button
              className="button-style"
              onClick={handleWatchLater}
              sx={{
                color: "black",
                background: "#e4e5eb",
              }}>
              <BookmarkAddOutlinedIcon />
              Watch Later
            </Button>
          </div>
        </div>
      </div>
      <div className="secondary-section">
        {displayedList.map((obj, index) => {
          return (
            <div
              key={obj._id}
              className="video_card"
              onClick={() => {
                handleVideoDetail(obj);
              }}>
              <div>
                <img src={obj.thumbnail} alt="dummy" />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <Typography sx={{ fontSize: "14px", color: "black" }}>
                  {obj.title}
                </Typography>
                <Typography sx={{ color: "gray", fontSize: "12px" }}>
                  {obj.director}
                </Typography>
                <Typography sx={{ color: "gray", fontSize: "13px" }}>
                  {(viewNum = Math.floor(Math.random() * 1000) + 1)}
                  {(hoursNum = Math.floor(Math.random() * 100) + 1)}
                  {viewNum} Views &#8226; {hoursNum}Hours ago
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VideoDetail;