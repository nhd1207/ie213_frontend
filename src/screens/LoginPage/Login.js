import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import LoginForm from "../../components/Authentication/Login/LoginForm";
import classes from "./Login.module.css";
import { login, verifyLayout } from "./action";
import { Modal } from "antd";
import RouteContext from "../../context/RouteContext";
import { useHistory } from "react-router-dom";
import Layout from "../../components/layout";

function Login(props) {
  let context = useContext(RouteContext);
  // let modalTitle = ''

  function sendLoginData(params) {
    let url = context.url;
    if (url === "/signup") url = "/home";
    props.login(params, url);
  }
  // const wrongPassword = () => {
  //   if(props?.user?.response?.message === 'Incorrect password') {
  //     props.modalTitle= 'Sai mật khẩu'
  //   }
  // }
  function translateResponse(m) {
    if (m === "Incorrect email ") return "Email không tồn tại!";
    else if (m === "Incorrect password") return "Sai mật khẩu!";
    return m;
  }
  const countDown = () => {
    let secondsToGo = 5;
    // wrongPassword(Modal.error)
    const modal = Modal.error({
      title: `${translateResponse(props?.user?.response?.message)}`,
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
  let history = useHistory();

  useEffect(() => {
    props.verifyLayout();
    if (props?.isLoggedIn) history.push("/home");
  }, [props?.isLoggedIn]);

  return (
    <Layout>
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
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.login,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (params, url) => {
    dispatch(login(params, url));
  },
  verifyLayout: () => {
    dispatch(verifyLayout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
