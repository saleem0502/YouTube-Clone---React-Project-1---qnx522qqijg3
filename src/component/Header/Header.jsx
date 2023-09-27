import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  AppBar,
  Button,
  InputBase,
  Paper,
  Toolbar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const [{ sideBarToggle, userName }, dispatch] = useStateProvider();
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 480);
  const [searchInputVisible, setSearchInputVisible] = useState(false);

  const handleWindowResize = () => {
    setIsSmallScreen(window.innerWidth <= 540);
    if (window.innerWidth <= 540) {
      setSearchInputVisible(false);
    }
  };
  useEffect(() => {
    console.log(isSmallScreen);
  }, [isSmallScreen]);

  useEffect(() => {
    // Add an event listener to handle window resize
    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleToggle = () => {
    dispatch({ type: "SIDE_BAR_TOGGLE", payload: !sideBarToggle });
    console.log(sideBarToggle);
  };

  const handleAvatarClick = (event) => {
    setAvatarMenuAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarMenuAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch({ type: "SET_TOKEN", payload: null });
    dispatch({ type: "SET_NAME", payload: "" });
    navigate("/");
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(e);
  };

  const handleInput = async (e) => {
    e.preventDefault();
    try {
      let headersList = {
        projectId: "qnx522qqijg3",
      };

      let reqOptions = {
        url: `https://academics.newtonschool.co/api/v1/ott/show?title=${searchQuery}`,
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      const songData = response.data.data; // Assuming the API returns an array of song data

      console.log(songData);
      dispatch({ type: "SET_SEARCH_SONG", payload: songData }); // Providing the Search data to global
      navigate("/suggestion");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLongInput = () => {
    setSearchInputVisible(true);
  };
  const handlesmallInput = () => {
    setSearchInputVisible(false);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        display: "flex",
        margin: "0px",
        padding: "0px",
        justifyContent: "center",
        height: "56px",
        position: "sticky",
        color: "black",
      }}>
      {searchInputVisible ? (
        <div style={{ display: "flex" }}>
          <ArrowBackIcon
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              ml: "10px",
              mr: "4px",
              width: "30px",
              cursor: "pointer",
              borderRadius: "15px",
              "&:hover": { background: "#eeeeee" },
            }}
            onClick={handlesmallInput}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "50px",
                border: "1px solid #e0e0e0",
                backgroundColor: "white",
                width: "100%",
                height: "36px",
              }}>
              <InputBase
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}
                sx={{
                  flex: 1,
                  marginLeft: "16px",
                }}
              />
              <SearchIcon
                onClick={(e) => handleInput(e)}
                className="mainSearchBar"
              />
            </Paper>

            <Button sx={{ minWidth: "0px" }}>
              <MicIcon />
            </Button>
          </div>
        </div>
      ) : (
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}>
            <IconButton>
              <MenuSharpIcon
                sx={{
                  color: "black",
                }}
                onClick={handleToggle}
              />
            </IconButton>
            <Button
              onClick={() => navigate("/")}
              sx={{
                backgroundColor: "transparent",
                color: "black",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "& .MuiButton-startIcon": {
                  color: "red",
                },
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "-1px",
              }}
              startIcon={
                <YouTubeIcon
                  sx={{
                    marginLeft: "5px",
                  }}
                />
              }>
              <Typography variant="h5">YouTube</Typography>
            </Button>
          </div>

          {isSmallScreen ? (
            <div
              style={{ display: "flex", width: "100%", justifyContent: "end" }}>
              <SearchIcon onClick={handleLongInput} className="subSearchBar" />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
              }}>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50px",
                  border: "1px solid #e0e0e0",
                  backgroundColor: "white",
                  width: "100%",
                  height: "36px",
                }}>
                <InputBase
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleChange}
                  sx={{
                    flex: 1,
                    marginLeft: "16px",
                  }}
                />
                <SearchIcon
                  onClick={(e) => handleInput(e)}
                  className="mainSearchBar"
                />
              </Paper>

              <Button>
                <MicIcon />
              </Button>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <VideoCallOutlinedIcon
              sx={{ "@media (max-width: 540px)": { display: "none" } }}
            />
            <NotificationsNoneOutlinedIcon
              sx={{ "@media (max-width: 370px)": { display: "none" } }}
            />
            <Avatar
              alt="User Avatar"
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            />
            <Menu
              anchorEl={avatarMenuAnchorEl}
              open={Boolean(avatarMenuAnchorEl)}
              onClose={handleAvatarClose}>
              {userName ? (
                <div>
                  <MenuItem onClick={() => navigate("/")}>
                    Hello.. {userName}
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={() => navigate("/signin")}>Login</MenuItem>
                  <MenuItem onClick={() => navigate("/signup")}>
                    Signup
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/profile")}>
                Update Profile
              </MenuItem>
              <MenuItem onClick={() => navigate("/password")}>
                Update Password
              </MenuItem>
                </div>
              )}
              <MenuItem onClick={() => navigate("/premium")}>
                Youtube Premium
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      )}
    </AppBar>
  );
}

export default Header;