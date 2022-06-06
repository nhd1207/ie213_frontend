import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./SignUp.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import SignupForm from "../../components/Authentication/Signup/SignupForm";
import { connect } from "react-redux";
import { signup } from "./action";
import { Button, Modal } from "react-bootstrap";
import { Spin } from "antd";
import Layout from "../../components/layout";
import { useHistory } from "react-router-dom";
function SignUp(props) {
  function signUpHandler(params) {
    setShow(true);
    props.signup(params);
  }
  let [show, setShow] = useState(false);

  function closeModal() {
    setShow(false);
  }
  let history = useHistory();

  // useEffect(() => {
  //   if (props?.status === "success")
  //   setPermission(true);
  //   else setPermission(false);
  // }, [props?.status])
  function loginHandler() {
    history.push("/login");
  }

  return (
    <Layout>
      <div
        className="d-sm-none d-none d-xl-block"
        style={{ position: "absolute" }}
      >
        <div className={classes.rectangle} />
        <div className={classes.triangle} />
      </div>
      <div className={`${classes.container} row`}>
        <div className={`${classes.introduction} col-xl-8 col-sm-6 col-12`}>
          <h1 className={classes.introHeading}>
            CÔNG TY CỔ PHẦN{" "}
            <b style={{ color: "var(--yellow-color)" }}>SEVEN</b>
          </h1>
          <p>Nhà phân phối xe hơi cao cấp uy tín hàng đầu Việt Nam</p>
          <div className={classes.contact}>
            <div className={classes["contact-icon"]}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className={classes["contact-info"]}>
              <p>Hotline</p>
              <p>0934021021</p>
            </div>
          </div>
        </div>
        <div
          className={`${classes.signupFormContainer} col-xl-4 col-sm-6 col-12 row`}
        >
          <SignupForm
            onSignUp={signUpHandler}
            className={`${classes.signupForm} col-xl-12`}
          />
        </div>
      </div>
      <Modal show={show}>
        <Spin spinning={props.abc.loading}>
          <Modal.Header>
            <Modal.Title closeButton>
              {props.abc.loading
                ? "Đang xử lý..."
                : props?.status === "success"
                ? "Đăng ký thành công "
                : "Đăng ký thất bại "}
              {props?.status === "success" ? (
                <FontAwesomeIcon color={"#008000"} icon={faCircleCheck} />
              ) : props?.status === "" ? (
                <></>
              ) : (
                <FontAwesomeIcon color={"#FF0000"} icon={faCircleXmark} />
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props?.status === "success"
              ? "Chào mừng bạn đến với Seven - Nhà phân phối xe lớn nhất Việt Nam.\n Đăng nhập để tiếp tục"
              : "Vui lòng thử lại"}
          </Modal.Body>
          <Modal.Footer>
            {props?.status === "success" ? (
              <Button onClick={loginHandler}>OK</Button>
            ) : (
              <Button onClick={closeModal}>Thử lại</Button>
            )}
          </Modal.Footer>
        </Spin>
      </Modal>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  abc: state.signup,
  status: state.signup.status,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (params) => {
    dispatch(signup(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
