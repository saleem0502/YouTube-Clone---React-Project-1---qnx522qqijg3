import { Container, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useStateProvider } from "../../utils/StateProvider";
import { useNavigate } from "react-router-dom";
// import Stack from '@mui/material/Stack';

// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';

function SignIn() {
  const [, dispatch] = useStateProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const projectId = "qnx522qqijg3";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/login",
    method: "POST",
    headers: headersList,
  };

  const login = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response);
      if (response.status === 200) {
        console.log("hey huy", response.data);
        dispatch({
          type: "SET_NAME",
          payload: response?.data?.data?.name,
        });
        dispatch({ type: "SET_TOKEN", payload: response.data.token });
        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("userName", response?.data?.data?.name);
        await navigate("/");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      if (errMsg === "please provide email and password") {
        alert("Please provide email and password");
      } else if (errMsg === "Incorrect EmailId or Password") {
        alert("Incorrect EmailId or Password");
      }
      console.error(error, errMsg);
    }
  };

  const handleLogin = () => {
    const bodyContent = JSON.stringify({
      email: email,
      password: password,
      appType: "ott",
    });

    reqOptions.data = bodyContent;

    login();
  };
  return (
    <Stack sx={{backgroundColor:"red"}}>
    <Container maxWidth="sm" sx={{ marginTop: "4rem",backgroundColor: "white" }}>
      <Box
        sx={{
            borderRadius: "8px",
            padding: "2rem",
            height: "34rem",
        }}>
        <Typography
          variant="h4"
          sx={{
            color: "googleRed",
            paddingTop: "2rem",
            textAlign: "center",
          }}>
          Google
        </Typography>
        <Typography
          variant="h5"
          sx={{ paddingTop: "1rem", textAlign: "center" }}>
          Sign In
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingTop: "1rem", textAlign: "center" }}>
          to continue on YouTube
        </Typography>
        <TextField
          fullWidth
          label="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{
            marginTop: "2.5rem",
          }}
        />
        <TextField
          fullWidth
          label="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{
            marginTop: "2.5rem",
          }}
        />
        <Link
          href="/password"
          color="text.primary"
          sx={{
            display: "block",
            marginBottom: "1rem",
            textDecoration: "none",
            color: "text.primary",
            marginTop: "0.25rem",
          }}>
          Forgot email?
        </Link>
        <Typography
          variant="body2"
          sx={{
            paddingTop: "1rem",
            color: "gray",
          }}>
          Not your computer? Use Guest mode to sign in privately.
        </Typography>
        <Link
          to="/"
          color="text.primary"
          sx={{
            display: "block",
            marginBottom: "1rem",
            textDecoration: "none",
            color: "text.primary",
            marginTop: "0.25rem",
          }}>
          Learn more
        </Link>
        <Grid container alignItems="center">
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
            }}>
            <Link
              href="/signup"
              color="text.secondary"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
              }}>
              Create an Account SignUp
            </Link>
            <Button
              variant="contained"
              size="medium"
              onClick={handleLogin}
              sx={{
                marginLeft: "20rem",
              }}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Stack>
  );
}

export default SignIn;