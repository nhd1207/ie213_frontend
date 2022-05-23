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
      <LoginForm loading={props.user.loading} onSendLoginData={sendLoginData} />
      {props?.user?.response?.message ? (
        <div className={classes.message}>
          <p >{props?.user?.response?.message}</p>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  user: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  login: (params) => {
    dispatch(login(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
