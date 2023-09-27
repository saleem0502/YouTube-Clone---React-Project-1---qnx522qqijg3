import React from "react";

import "./YoutubePremium.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PauseCircleOutlineSharpIcon from "@mui/icons-material/PauseCircleOutlineSharp";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

function YoutubePremium() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="main-section">
        {/* not responsive the texts are not rreponsive */}
        <div className="content">
          <img
            className="image"
            src="./premium-logo.png"
            alt="YouTube Premium Logo"
          />
          <Typography
            variant="h4"
            sx={{
              marginTop: "1rem",
            }}>
            YouTube and YouTube Music ad-free,
            <br /> offline, and in the background
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
            sx={{
              marginTop: "2rem",
              borderRadius: "50px",
              color: "black",
              textTransform: "none",
              backgroundColor: "#3ea6ff",
            }}>
            Get YouTube Premium
          </Button>
          <Typography
            variant="h5"
            sx={{
              marginTop: "2rem",
            }}>
            Prepaid and subscription plans available. Prices start at
            <br />
            ₹129.00/month. Free trials available with subscription plans only.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginTop: "2rem",
            }}>
            Or save money with{" "}
            <Link
              sx={{
                textDecoration: "none",
              }}>
              an annual, family, or student membership
            </Link>
          </Typography>
          <Typography
            sx={{
              marginTop: "1rem",
            }}>
            <Link
              sx={{
                textDecoration: "none",
              }}>
              Restrictions apply. Learn more here.
            </Link>
          </Typography>
        </div>
      </div>
      <div>
        {/* the items are not aligne dto the center */}
        <Container
          maxWidth="none"
          sx={{
            background: "white",
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
            // height:'25rem',
            minHeight: "25rem",
            flexGrow: "1",
          }}>
          <Grid
            container
            spacing={2}
            // justifyContent="center"
            sx={{
              color: "black",
              // display:'flex',
              // // alignItems:'center'
              // justifyContent:'center',
              // justifyItems:'center'
            }}>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "3rem",
                textAlign: "center",
              }}>
              <PauseCircleOutlineSharpIcon
                sx={{
                  fontSize: "6rem",
                  color: "red",
                }}
              />
              <Typography variant="h4" align="center">
                Ad-free & background play
              </Typography>
              <Typography align="center">
                Watch videos uninterrupted by ads, while using other apps or
                when the screen is locked.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: "3rem",
              }}>
              <DownloadForOfflineOutlinedIcon
                sx={{
                  fontSize: "6rem",
                  color: "red",
                }}
              />
              <Typography variant="h4" align="center">
                Downloads
              </Typography>
              <Typography align="center">
                Save videos for when you really need them - like when you're on
                a plane or commuting.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: "3rem",
              }}>
              <PlayCircleOutlineSharpIcon
                sx={{
                  fontSize: "6rem",
                  color: "red",
                }}
              />
              <Typography variant="h4" align="center">
                YouTube Music Premium
              </Typography>
              <Typography align="center">
                Download our new music app and listen without interruptions.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container
        maxWidth="none"
        sx={{
          // background:'violet',
          // marginTop:'4rem',
          backgroundImage:
            "url(https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_story1_indiancoupleandroid_desktop_2880x1620.jpg)",
          backgroundSize: "cover", // Use 'cover' to make the image cover the entire container
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: 'fixed',
          display: "flex",
          justifyContent: "center",
          // height:'25rem',
          minHeight: "35rem",
          flexGrow: "1",
        }}></Container>
      <Container
        maxWidth="none"
        sx={{
          backgroundImage:
            "url(https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_story2_indiadownload_desktop_2880x1620.jpg)",
          // marginTop:'4rem',
          backgroundSize: "cover", // Use 'cover' to make the image cover the entire container
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          // height:'25rem',
          minHeight: "35rem",
          flexGrow: "1",
        }}></Container>
      <Container
        maxWidth="none"
        sx={{
          backgroundImage:
            "url(https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_story3_indianman_bkg_desktop_2880x1620.jpg)",
          backgroundSize: "cover", // Use 'cover' to make the image cover the entire container
          backgroundRepeat: "no-repeat",
          // marginTop:'4rem',
          display: "flex",
          justifyContent: "center",
          // height:'25rem',
          minHeight: "35rem",
          flexGrow: "1",
        }}></Container>

      <Container
        maxWidth="none"
        sx={{
          backgroundImage:
            "url(https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_story4_musictxtright2022v2_desktop_2880x1620.jpg)",
          // marginTop:'4rem',
          backgroundSize: "cover", // Use 'cover' to make the image cover the entire container
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          // height:'25rem',
          minHeight: "35rem",
          flexGrow: "1",
        }}></Container>
      <Container
        maxWidth="none"
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "35rem",
          flexGrow: "1",
          color: "black",
        }}>
        <Typography variant="h4" gutterBottom>
          FAQs
        </Typography>

        <Accordion
          sx={{
            width: "100%",
            maxWidth: "400px",
            background: "white",
            borderStyle: "none none solid none",
          }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              color: "black", // Text color for question
            }}>
            What is included with YouTube Premium?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "black", // Text color for content
            }}>
            YouTube Premium includes ad-free YouTube, the ability to download
            videos for offline viewing, and background play for videos.
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ width: "100%", maxWidth: "400px", background: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{
              color: "black", // Text color for question
            }}>
            How does downloading videos and music work?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "black", // Text color for content
            }}>
            You can download videos and music on your mobile devices to watch
            and listen offline for up to 30 days without an internet connection.
            To learn more, check out our Help Center article.
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ width: "100%", maxWidth: "400px", background: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{
              color: "black", // Text color for question
            }}>
            What is background play?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "black", // Text color for content
            }}>
            Background play allows videos and music to keep playing in the
            background, even when you open other apps or turn off your device's
            screen.
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{ width: "100%", maxWidth: "400px", background: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
            sx={{
              color: "black", // Text color for question
            }}>
            How can I cancel my membership?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              color: "black", // Text color for content
            }}>
            You can cancel your YouTube Premium membership by visiting the Paid
            Membership page. You can rejoin YouTube Premium at any time.
          </AccordionDetails>
        </Accordion>

        <Typography variant="body2" sx={{ marginTop: "2rem" }}>
          Have other questions? Visit the{" "}
          <Link
            sx={{
              textDecoration: "none",
              color: "blue",
            }}>
            YouTube Help Centre
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

export default YoutubePremium;