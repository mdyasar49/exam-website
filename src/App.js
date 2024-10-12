import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, InputLabel, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigate = useNavigate();

  const verifyUserName = (event) => {
    setUserName(event.target.value);
  };

  const verifyPassWord = (event) => {
    setPassWord(event.target.value);
  };

  const handleLogin = () => {
    if (userName === 'admin' && passWord === 'admin') {
      alert(`Welcome ${userName}`);
      navigate('/QuestionData');
    } else {
      alert('Try Again');
    }
  };

  const ranQuestion = () => {
    let i = 0;
    for (i; i < 10; i++) {
      let ran = Math.round(Math.random() * 50);
      console.log(ran);
      return ran;
    }
  };
  ranQuestion();

  return (
    <Box>
      <Container className="loginContainer">
        <Grid container spacing={2}>
          <Grid item>
            <InputLabel className="loginInputLabel">
              <b>UserName</b>
            </InputLabel>
            <TextField
              name="userName"
              onChange={verifyUserName}
              className="loginTextField"
            />
          </Grid>
          <Grid item>
            <InputLabel className="loginInputLabel">
              <b>Password</b>
            </InputLabel>
            <TextField
              name="passWord"
              type="password"
              onChange={verifyPassWord}
              className="loginTextField"
            />
          </Grid>
          <Grid item className="loginButtonContainer">
            <Button variant="contained" onClick={handleLogin} className="loginButton">
              Login
            </Button>
          </Grid>
        </Grid>
        <Box></Box>
      </Container>
    </Box>
  );
}

export default App;
