import React, { useReducer, useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import style from "./LoginForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Spin } from "antd";
import { Link } from "react-router-dom";
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
      isPasswordLostFocus: action.isPasswordLostFocus,
    };
  } else if (action.type === "PASSWORD_INPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isPasswordCorrect: state.isPasswordCorrect,
      isPasswordLostFocus: true,
    };
  }
  return {
    value: "",
    isPasswordCorrect: false,
    isPasswordLostFocus: false,
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
    isPasswordLostFocus: false,
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
      if (password.trim().length >= 8) return true;
      return false;
    }
    dispatchPassword({
      type: "PASSWORD_LOGIN",
      value: enteredPassword,
      isPasswordCorrect: validatePassword(enteredPassword),
      isPasswordLostFocus: true,
    });
  }

  let invalidEmail = email.isEmailInputLostFocus && !email.isEmailValid;
  let wrongPassword =
    password.isPasswordLostFocus && !password.isPasswordCorrect;
  let [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email.isEmailValid && password.isPasswordCorrect) setDisabled(false);
    else setDisabled(true)
  }, [email.isEmailValid, password.isPasswordCorrect]);
  // let context = useContext(AuthContext);

  function loginHandler(event) {
    event.preventDefault();
    let params = {
      email: email.value,
      password: password.value,
    };
    props.onSendLoginData(params);
  }
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  const passwordInput = useRef(null)
  const HandleMouseDownPassword = (e) => {
    e.preventDefault()
    const endPassword = passwordInput.current.value.length
    passwordInput.current.setSelectionRange(endPassword, endPassword)
    passwordInput.current.focus()
  }
  return (
    <div className={`row`}>
      <div className={`${style.background} col-xl-6 col-9`}>
        <h1 className={`${style.titleLogin}`}>ĐĂNG NHẬP</h1>
        <Form className={`${style.loginForm} row`} onSubmit={loginHandler}>
          <Form.Group
            className={`${style.formGroup} mb-3 col-xl-9 col-9`}
            controlId="formBasicEmail"
          >
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <Form.Label className={`${style.loginLabel}`}>Email</Form.Label>
            </div>
            <Form.Control
              className={`${style.loginInput}`}
              type="email"
              placeholder="Vpseven@gmail.com"
              value={email.value}
              onChange={emailChangeHandler}
              onBlur={emailValidation}
            />
            {invalidEmail && (
              <Form.Text className={`${style.mailError}`}>
                Email không hợp lệ
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group
            className={`${style.formGroup} mb-3 col-xl-9 col-9`}
            controlId="formBasicPassword"
          >
            <div>
              <FontAwesomeIcon icon={faKey} />
              <Form.Label className={`${style.loginLabel}`}>
                Mật khẩu
              </Form.Label>
            </div>
            <InputGroup>
              <FormControl
                className={`${style.loginInput}`}
                type={passwordShown ? "text" : "password"}
                placeholder="Mật Khẩu"
                ref={passwordInput}
                autoFocus
                onChange={passwordChangeHandler}
              >
              </FormControl>
              <InputGroup.Text  
                    className={`${style.eyeIcon}`}
                    onClick={togglePassword}
                    onMouseUp={HandleMouseDownPassword}>
                    {passwordShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </InputGroup.Text>
            </InputGroup>
            {wrongPassword && (
              <Form.Text className={`${style.passwordError}`}>
                Mật khẩu cần có ít nhất 8 ký tự
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group
            className={`${style.formGroup} mb-3 col-xl-9 col-9`}
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Nhớ mật khẩu" />
          </Form.Group>
          <div className={`${style.formGroup} ${style.submit} col-xl-9 col-9`}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Spin
                spinning={props.loading}
                className={`${style.loginSpin} col-xl-4 col-4`}
              >
                <Button
                  className={`${style.loginButton} col-xl-6`}
                  variant="primary"
                  type="submit"
                  disabled={disabled}
                >
                  ĐĂNG NHẬP
                </Button>
              </Spin>
            </div>
          </div>
          <div className={`${style.formGroup} ${style.singup} col-xl-9 col-9`}>
            <p className={`${style.titleSignup}`}>
              Chưa có tài khoản? {" "}
              <Link to={`/signup`} className={style.signup}>Đăng ký ngay! </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
