import React from "react";
import { connect } from "react-redux";
import LoginForm from "../../components/Authentication/Login/LoginForm";
import classes from "./Login.module.css";
import { login } from "./action";

function Login(props) {

  function sendLoginData(params) {
    props.login(params);
  }

  return (
    <section className={classes.container}>
      <LoginForm onSendLoginData={sendLoginData}/>
    </section>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (params) => {
    dispatch(login(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
