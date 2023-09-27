import React, { useState } from "react";
import "./UpdatePassword.css"
import axios from "axios";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passwordCurrent: "",
    password: "",
    // appType: ""
  });

  const projectId = "qnx522qqijg3"; // Replace with your actual project ID

  const handlePasswordUpdate = () => {
    axios
      .patch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        formData,
        {
          headers: {
            projectId
          }
        }
      )
      .then((response) => {
        console.log("Password updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating password:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
<Stack sx={{backgroundColor:"red"}}>
  <Header/>
<Container maxWidth="sm" sx={{ marginTop: "1rem",backgroundColor:"white"}}>
      <Box
        sx={{
          // border: "1px solid #E0E0E0",
          borderRadius: "8px",
          padding: "2rem",
          height: "34rem",
        }}>
        <Typography
          variant="h4"
          sx={{
            paddingTop: "2rem",
            textAlign: "center",
          }}>
          Update Password
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingTop: "1rem", textAlign: "center" }}>
          to continue on YouTube
        </Typography>
        <TextField
          fullWidth
          label="Name"
          value={formData.name}
          onChange={handleChange}
          sx={{
            marginTop: "2.5rem",
          }}
        />
        <TextField
          fullWidth
          label="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            marginTop: "2.5rem",
          }}
        />
        <TextField
          fullWidth
          label="Enter Current Password"
          value={formData.passwordCurrent}
          onChange={handleChange}
          sx={{
            marginTop: "2.5rem",
          }}
        />
        <TextField
          fullWidth
          label="Enter  Password"
          value={formData.password}
          onChange={handleChange}
          sx={{
            marginTop: "2.5rem",
          }}
        />
        <Grid container alignItems="center">
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
            }}>
              <Link to="sign/">
            <Button
              variant="contained"
              size="medium"
              onClick={handlePasswordUpdate}
              sx={{
                margin:"20px",
              }}>
              Update Password
            </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Stack>
  );
}

export default UpdatePassword;