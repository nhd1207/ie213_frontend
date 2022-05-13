import React, { useReducer, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./LoginForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Spin } from "antd";
import AuthContext from "../../../context/AuthContext"
function emailReducer(state, action) {
  if (action.type === "EMAIL_LOGIN") {
    return {
      value: action.value,
      isEmailValid: action.isEmailValid,
      isEmailInputLostFocus: action.isEmailInputLostFocus,
    };
  } else if (action.type === "EMAIL_INPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isEmailValid: state.isEmailValid,
      isEmailInputLostFocus: true,
    };
  } else {
    return {
      value: "",
      isEmailValid: false,
      isEmailInputLostFocus: false,
    };
  }
}

function passwordReducer(state, action) {
  if (action.type === "PASSWORD_LOGIN") {
    return {
      value: action.value,
      isPasswordCorrect: action.isPasswordCorrect,
    };
  } else if (action.type === "PASSWORD_INPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isPasswordCorrect: state.isPasswordCorrect,
    };
  }
  return {
    value: "",
    isPasswordCorrect: false,
  };
}

function LoginForm(props) {
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isEmailValid: false,
    isEmailInputLostFocus: false,
  });

  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isPasswordCorrect: false,
  });

  function emailChangeHandler(event) {
    let enteredEmail = event.target.value.trim();
    function validateEmail(email) {
      const result =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regular expression
      return result.test(email);
    }
    dispatchEmail({
      type: "EMAIL_LOGIN",
      value: enteredEmail,
      isEmailValid: validateEmail(enteredEmail),
      isEmailInputLostFocus: true,
    });
  }

  function emailValidation() {
    dispatchEmail({
      type: "EMAIL_INPUT_LOSTFOCUS",
    });
  }

  function passwordChangeHandler(event) {
    let enteredPassword = event.target.value.trim();
    function validatePassword(password) {
      //compare password with database
    }
    dispatchPassword({
      type: "PASSWORD_LOGIN",
      value: enteredPassword,
      isPasswordCorrect: validatePassword(enteredPassword),
    });
  }

  let invalidEmail = email.isEmailInputLostFocus && !email.isEmailValid;
  let wrongPassword = !password.isPasswordCorrect;
  let context = useContext(AuthContext);

  function loginHandler(event) {
    event.preventDefault();
    let params = {
      email: email.value,
      password: password.value,
    };
    props.onSendLoginData(params);
  }

  return (
    <div className={style.background}>
      <h1>ĐĂNG NHẬP</h1>
      <Form className={style.loginform} onSubmit={loginHandler}>
        <Form.Group className={"mb-3"} controlId="formBasicEmail">
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <Form.Label className={style["login-label"]}>Email</Form.Label>
          </div>
          <Form.Control
            className={style["login-input"]}
            type="email"
            placeholder="Vpseven@example.org"
            // value={email}
            onChange={emailChangeHandler}
            onBlur={emailValidation}
          />
          {invalidEmail && (
            <Form.Text className={style["email-error"]}>
              Emai không hợp lệ
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div>
            <FontAwesomeIcon icon={faKey} />
            <Form.Label className={style["login-label"]}>Mật khẩu</Form.Label>
          </div>
          <Form.Control
            className={style["login-input"]}
            type="password"
            placeholder="Ít nhất 8 ký tự"
            onChange={passwordChangeHandler}
          />
          {wrongPassword && (
            <Form.Text className={style["password-error"]}>
              Mật khẩu sai
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Nhớ mật khẩu" />
        </Form.Group>
        <Spin spinning={props.loading}>
          <Button
            className={style["login-button"]}
            variant="primary"
            type="submit"
          >
            Đăng nhập
          </Button>
        </Spin>
      </Form>
    </div>
  );
}

export default LoginForm;
