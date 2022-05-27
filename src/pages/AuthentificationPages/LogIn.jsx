import React, { useState } from "react";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import LoginIcon from "@mui/icons-material/Login";
import CardContent from "@mui/material/CardContent";

export default function LogIn({ authenticate }) {
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
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <Container sx={{ m: 1 }}>
      <Card sx={{ width: "40%", ml: 60, mt:10 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="div" gutterBottom>
            Log In.
          </Typography>
          <form onSubmit={handleFormSubmission} className="signup__form">
            <TextField
              id="filled-basic"
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
              label="password"
              variant="filled"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleInputChange}
              required
              minLength="8"
              x={{ m: 1 }}s
            />
            <br />

            {error && (
              <div className="error-block">
                <p>There was an error submiting the form:</p>
                <p>{error.message}</p>
              </div>
            )}

            <Button variant="contained" endIcon={<LoginIcon />} type="submit">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
