import GoogleIcon from "@mui/icons-material/Google";
import LockIcon from "@mui/icons-material/Lock";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { logInWithGoogle, setError } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const textBoxStyle = { margin: "10px 0" };
  return (
    <Grid>
      <Paper elevation={10} className="paper-style">
        <Grid align="center">
          <Avatar style={{ backgroundColor: "green" }}>
            <LockIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <TextField
          style={textBoxStyle}
          label="Email"
          fullWidth
          required
          placeholder="Enter Email"
          variant="standard"
        />
        <TextField
          style={textBoxStyle}
          id="standard-basic"
          label="Password"
          fullWidth
          required
          type="password"
          placeholder="Enter Password"
          variant="standard"
        />
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: "15px" }}
          fullWidth
          color="primary">
          Login
        </Button>
        <p>
          New user?<Link to="/register"> Register</Link>
        </p>

        <Grid align="center">
          <button
            style={{ border: "none", borderRadius: "10px" }}
            onClick={handleGoogleLogIn}>
            <GoogleIcon
              style={{
                padding: "10px",
                fontSize: "35px",
                color: "red",
              }}
            />
          </button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
/* <div>
      <button onClick={handleGoogleLogIn}>Login with google</button>
      <br />
      <p>
        New at this is site? <Link to="/register">register</Link>
      </p>
    </div> */
