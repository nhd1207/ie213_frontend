import React from "react";
import { connect } from "react-redux";
import LoginForm from "../../components/Authentication/Login/LoginForm";
import classes from "./Login.module.css";
import { login } from "./action";
import { Button, Modal } from "antd";

function Login(props) {
  function sendLoginData(params) {
    props.login(params);
  }

  const countDown = () => {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: `${props?.user?.response?.message}`,
      // content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Vui Lòng Thử Lại`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <section className={`${classes.container}`}>
      <LoginForm
        className={`col-xl-12`}
        loading={props.user.loading}
        onSendLoginData={sendLoginData}
      />
      {/* {props?.user?.response?.message ? (
        <div className={`${classes.message} col-xl-12`}>
          <p>{props?.user?.response?.message}</p>
        </div>
      ) : (
        <></>
      )} */}
      {props?.user?.response?.message ? countDown() : null}
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
