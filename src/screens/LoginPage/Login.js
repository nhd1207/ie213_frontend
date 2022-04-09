import React from "react";
import LoginForm from "../../components/Authentication/Login/LoginForm";
import classes from "./Login.module.css";

function Login() {
  return (
    <section className={classes.container}>
      <LoginForm />
    </section>
  );
}

export default Login;
