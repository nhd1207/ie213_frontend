import React, { useReducer, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./SignupForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";
function emailReducer(state, action) {
  if (action.type === "EMAIL_CHANGE") {
    return {
      value: action.value,
      isEmailValid: action.isEmailValid,
      isEmailLostFocused: action.isEmailLostFocused,
    };
  } else if (action.type === "EMAIL_LOST_FOCUS") {
    return {
      value: state.value,
      isEmailValid: state.isEmailValid,
      isEmailLostFocused: true,
    };
  } else
    return {
      value: "",
      isEmailValid: false,
      isEmailLostFocused: false,
    };
}

function passwordReducer(state, action) {
  if (action.type === "PASSWORD_CHANGE") {
    return {
      value: action.value,
      isPasswordValid: action.isPasswordValid,
      isPasswordLostFocused: action.isPasswordLostFocused,
    };
  } else if (action.type === "PASSWORD_LOST_FOCUS") {
    return {
      value: state.value,
      isPasswordValid: state.isPasswordValid,
      isPasswordLostFocused: true,
    };
  } else
    return {
      value: "",
      isPasswordValid: false,
      isPasswordLostFocused: false,
    };
}

function confirmPasswordReducer(state, action) {
  if (action.type === "CONFIRM_CHANGE") {
    return {
      value: action.value,
      isValid: action.isValid,
      isLostFocused: action.isLostFocused,
    };
  } else if (action.type === "CONFIRM_LOST_FOCUS") {
    return {
      value: state.value,
      isValid: state.isValid,
      isLostFocused: true,
    };
  } else if (action.type === "COMPARE") {
    return {
      value: state.value,
      isValid: action.isValid,
      isLostFocused: true,
    };
  }
  return {
    value: "",
    isValid: false,
    isLostFocused: false,
  };
}

function SignupForm(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isEmailValid: false,
    isEmailLostFocused: false,
  });
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isPasswordValid: false,
    isPasswordLostFocused: false,
  });
  const [confirmPassword, dispatchConfirmPassword] = useReducer(
    confirmPasswordReducer,
    {
      value: "",
      isValid: true,
      isLostFocused: false,
    }
  );

  function signUpHandler(event) {
    event.preventDefault();
    let params = {
      name: name,
      email: email.value,
      password: password.value,
      passwordConfirmation: confirmPassword.value,
      info: {
        phoneNumber: phoneNumber,
        dateOfBirth: "01/01/1990",
      },
    };
    props.onSignUp(params);
  }

  function emailChangeHandler(event) {
    let enteredEmail = event.target.value.trim();
    function validateEmail(email) {
      const result =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regular expression
      return result.test(email);
    }
    dispatchEmail({
      type: "EMAIL_CHANGE",
      value: enteredEmail,
      isEmailValid: validateEmail(enteredEmail),
      isEmailLostFocused: true,
    });
  }
  function emailBlurHandler() {
    dispatchEmail({
      type: "EMAIL_LOST_FOCUS",
    });
  }

  function passwordChangeHandler(event) {
    let enteredPassword = event.target.value;
    function validatePassword(password) {
      if (password.length >= 8) return true;
    }
    dispatchPassword({
      type: "PASSWORD_CHANGE",
      value: enteredPassword,
      isPasswordValid: validatePassword(enteredPassword),
      isPasswordLostFocused: true,
    });
    dispatchConfirmPassword({
      type: "COMPARE",
      isValid: confirmPassword.value === enteredPassword,
    });
  }
  function passwordBlurHandler() {
    dispatchPassword({
      type: "PASSWORD_LOST_FOCUS",
    });
  }

  function confirmPasswordChangeHandler(event) {
    let enteredConfirm = event.target.value;
    function validatePassword(confirm) {
      if (confirm === password.value) return true;
      return false;
    }
    dispatchConfirmPassword({
      type: "CONFIRM_CHANGE",
      value: enteredConfirm,
      isValid: validatePassword(enteredConfirm),
      isLostFocused: true,
    });
  }

  function confirmPasswordBlurHandler() {
    dispatchConfirmPassword({ type: "CONFIRM_LOST_FOCUS" });
  }

  let errorEmail = email.isEmailLostFocused && !email.isEmailValid;
  let errorPassword =
    password.isPasswordLostFocused && !password.isPasswordValid;
  let errorConfirm = confirmPassword.isLostFocused && !confirmPassword.isValid;
  let [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    setDisabledButton(
      email.isEmailValid &&
        password.isPasswordValid &&
        confirmPassword.isValid &&
        name.trim().length > 0
    );
  }, [
    email.isEmailValid,
    password.isPasswordValid,
    confirmPassword.isValid,
    disabledButton,
    name,
  ]);

  return (
    <div className={classes.container}>
      <h2>ĐĂNG KÝ</h2>
      <Form className={classes.form} onSubmit={signUpHandler}>
        <FormGroup className={"mb-3"}>
          <FormLabel>
            Họ và tên <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <FormControl
            id="name"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className={"mb-3"}>
          <FormLabel>Số điện thoại </FormLabel>
          <InputGroup>
            <InputGroup.Text>+84</InputGroup.Text>
            <FormControl
              id="phoneNumber"
              type="text"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </InputGroup>
        </FormGroup>
        <Form.Group className={"mb-3"} controlId="formBasicEmail">
          <Form.Label>
            Email <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="seven@example.org"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {errorEmail && (
            <Form.Text className={classes.error}>Email sai định dạng</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Mật khẩu <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Mật khẩu ít nhất 8 ký tự"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {errorPassword && (
            <Form.Text className={classes.error}>
              Mật khẩu phải có ít nhất 8 ký tự
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Xác nhận mật khẩu <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="password"
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
          />
          {errorConfirm && (
            <Form.Text className={classes.error}>
              Mật khẩu không trùng khớp
            </Form.Text>
          )}
        </Form.Group>
        <Button
          className={classes["signup-button"]}
          type="submit"
          disabled={!disabledButton}
        >
          Đăng ký
        </Button>
      </Form>
    </div>
  );
}

export default SignupForm;
