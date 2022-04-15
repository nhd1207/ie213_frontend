import React, { useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./LoginForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function emailReducer(state, action) {
  if (action.type === "EMAIL_LOGIN")
  {
    return {
      value: action.value,
      isEmailValid: action.isEmailValid,
      isEmailInputLostFocus: action.isEmailInputLostFocus
    }
  } else if (action.type === "EMAIL_INPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isEmailValid: state.isEmailValid,
      isEmailInputLostFocus: true
    }
  } else {
    return {
      value: "",
      isEmailValid: false,
      isEmailInputLostFocus: false
    }
  }
}
function LoginForm() {
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isEmailValid: false,
    isEmailInputLostFocus: false,
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
      type: "EMAIL_INPUT_LOSTFOCUS"
    })
  }

  function passwordChangeHandler() {
    
  }

  function loginHandler(email, password) {}
  return (
    <div className={style.background}>
      <h1>ĐĂNG KÝ</h1>
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div>
            <FontAwesomeIcon icon={faKey} />
            <Form.Label className={style["login-label"]}>Mật khẩu</Form.Label>
          </div>
          <Form.Control
            className={style["login-input"]}
            type="password"
            placeholder="Mật khẩu ít nhất 8 ký tự"
            onChange={passwordChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Nhớ mật khẩu" />
        </Form.Group>
        <Button
          className={style["login-button"]}
          variant="primary"
          type="submit"
        >
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
