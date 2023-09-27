import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
  Button,
  IconButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

import "../SideBar/SideBar.css";
import {
  Home,
  Subscriptions,
  VideoLibrary,
  History,
  WatchLater,
  ThumbUp,
  MusicNote,
  Movie,
  LiveTv,
  SportsEsports,
  Announcement,
  School,
  Face,
  ChildFriendly,
  Settings,
  Report,
  Help,
  Feedback,
  Info,
} from "@mui/icons-material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useStateProvider } from "../../utils/StateProvider";

function SideBar() {
  const [{ sideBarToggle, token }, dispatch] = useStateProvider();
  // const [activeItem, setActiveItem] = useState("/");
  var activeItems = useLocation();
  var activeItem = activeItems.pathname;

  const handleToggle = () => {
    dispatch({ type: "SIDE_BAR_TOGGLE", payload: !sideBarToggle });
  };

  const handleNavigate = (str) => {
    console.log(str);
    navigate(str);
  };

  const navigate = useNavigate();

  return (
    <SwipeableDrawer
      anchor="left"
      open={sideBarToggle}
      onClose={handleToggle}
      onOpen={handleToggle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          paddingLeft: "10px",
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
          YouTube
        </Button>
      </div>
      <List>
        <ListItem
          button
          onClick={() => {
            handleNavigate("/");
          }}>
          <ListItemIcon
            sx={{ color: activeItem === "/" ? "black" : "#9d9d9d" }}>
            <Home />
          </ListItemIcon>
          <ListItemText
            sx={{ color: activeItem === "/" ? "black" : "#9d9d9d" }}
            primary="Home"
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <TheatersOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Shorts" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            handleNavigate("/premium");
          }}>
          <ListItemIcon
            sx={{ color: activeItem === "/premium" ? "black" : "#9d9d9d" }}>
            <Subscriptions />
          </ListItemIcon>
          <ListItemText
            sx={{ color: activeItem === "/premium" ? "black" : "#9d9d9d" }}
            primary="Subscriptions"
          />
        </ListItem>
        <Divider sx={{ backgroundColor: "white" }} />
        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <VideoLibrary />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Library" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <History />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="History" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Your videos" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            if (token) {
              handleNavigate("/later");
            } else {
              alert("Please Login");
            }
          }}>
          <ListItemIcon
            sx={{ color: activeItem === "/later" ? "black" : "#9d9d9d" }}>
            <WatchLater />
          </ListItemIcon>
          <ListItemText
            sx={{ color: activeItem === "/later" ? "black" : "#9d9d9d" }}
            primary="Watch Later"
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <DownloadOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Downloads" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <ThumbUp />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Liked videos" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <LocalFireDepartmentIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Trending" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <LocalMallOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Shopping" />
        </ListItem>
        <Divider sx={{ backgroundColor: "white" }} />
        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <MusicNote />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Music" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Downloads" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Movie />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Films" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <LiveTv />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Live" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <SportsEsports />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Gaming" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Announcement />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="News" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <School />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Learning" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Face />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Fashion & Beauty" />
        </ListItem>
        <Divider sx={{ backgroundColor: "white" }} />
        <ListItem
          onClick={() => {
            handleNavigate("/premium");
          }}
          button>
          <ListItemIcon
            sx={{ color: activeItem === "/premium" ? "black" : "#9d9d9d" }}>
            <MusicNoteOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            sx={{ color: activeItem === "/premium" ? "black" : "#9d9d9d" }}
            primary="YouTube Premium"
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <MusicNoteOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="YouTube Music" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <ChildFriendly />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="YouTube Kids" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Settings />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Settings" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Report />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Report history" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Help />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Help" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Feedback />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Send feedback" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#9d9d9d" }}>
            <Info />
          </ListItemIcon>
          <ListItemText sx={{ color: "#9d9d9d" }} primary="Settings" />
        </ListItem>
        <Divider sx={{ backgroundColor: "white" }} />
      </List>
    </SwipeableDrawer>
  );
}

export default SideBar;