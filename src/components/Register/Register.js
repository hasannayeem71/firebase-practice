import LockIcon from "@mui/icons-material/Lock";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const textBoxStyle = { margin: "10px 0" };
  return (
    <Grid>
      <Paper elevation={10} className="paper-style">
        <Grid align="center">
          <Avatar style={{ backgroundColor: "green" }}>
            <LockIcon />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <TextField
          style={textBoxStyle}
          label="Name"
          fullWidth
          type="text"
          required
          placeholder="Your Name"
          variant="standard"
        />
        <TextField
          style={textBoxStyle}
          label="Email"
          fullWidth
          type="email"
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
        <TextField
          style={textBoxStyle}
          id="standard-basic"
          label="Re-enter Password"
          fullWidth
          required
          type="password"
          placeholder="Re-enter Password"
          variant="standard"
        />
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: "15px" }}
          fullWidth
          color="primary">
          Register
        </Button>
        <p>
          Already Register?<Link to="/login">login</Link>
        </p>

        <Grid align="center"></Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
/*

<div>
      <input type="email" name="" placeholder="email" id="" />
      <br />
      <input type="password" name="" placeholder="password" id="" />
      <br />
      <button>Register</button>
      <br />
      <button>Login With google</button>
      <br />
      <p>
        already hava a account ?<Link to="/login">login</Link>
      </p>
    </div>
*/
