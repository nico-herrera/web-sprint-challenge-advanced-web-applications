import React, { useEffect, useState } from "react";
import { history } from "../history";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  // const history = useHistory();

  useEffect(() => {
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers: {
          authorization:
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
        },
      })
      .then((res) => {
        axios
          .get(`http://localhost:5000/api/colors`, {
            headers: {
              authorization: "",
            },
          })
          .then((res) => {
            console.log(res);
          });
      });
  });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page");
      })
      .catch((err) => console.log("cannot login: ", err.message));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username123"
          id="username"
          name="username"
          value={credentials.username}
          onChange={changeHandler}
          data-testid="test-username"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password... shhhh"
          id="password"
          name="password"
          value={credentials.password}
          onChange={changeHandler}
          data-testid="test-password"
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
