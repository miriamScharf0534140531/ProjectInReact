import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import AppStore from "./class/appstore";

// import * as React from 'react';
import Alert from "@mui/material/Alert";
// import AlertTitle from '@mui/material/AlertTitle';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let dataa;
  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:8787/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        return response;
      })
      .then((data) => {
        console.log("Success:", data);
        if (data.status === 401) {
          AppStore.setIsErrorLogin(true);
          // alert("לא הצלחת להתחבר");
          //   <Alert severity="error" sx={{ width: '100%' }}>
          //   <AlertTitle>Error</AlertTitle>
          //   This is an error alert — <strong>check it out!</strong>
          // </Alert>
        } else if (data.status === 200) {
          AppStore.setIsLogin(true);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    // if(dataa.st)
  };
  return (
    <div id="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input
          size="lg"
          color="primary"
          placeholder="name"
          sx={{ margin: "10px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          size="lg"
          color="primary"
          placeholder="password"
          type="password"
          sx={{ margin: "10px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="solid">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
