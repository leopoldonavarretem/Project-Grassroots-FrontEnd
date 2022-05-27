import React, { useState } from "react";
import { signup } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";

import GroupsCard from "../../components/GroupsPage/GroupsCard";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";


export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <Container sx={{ m: 1 }}>
      <Card sx={{ width: "40%", ml: 60, mt: 10 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="div" gutterBottom>
            Sign Up.
          </Typography>
          <form onSubmit={handleFormSubmission} className="auth__form">
            <TextField
              id="input-username"
              type="text"
              label="Username"
              variant="filled"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleInputChange}
              required
            />
            <br />

            <TextField
              id="input-password"
              type="password"
              name="password"
              variant="filled"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
              required
              minLength="8"
              sx={{m:1}}
            />

            {error && (
              <div className="error-block">
                <p>There was an error submiting the form:</p>
                <p>{error.message}</p>
              </div>
            )}
            <br />

            <Button variant="contained" endIcon={<LoginIcon />} type="submit">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
