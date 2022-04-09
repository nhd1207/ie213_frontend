import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./SignupForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

function SignupForm() {
  return (
    <div className={classes.container}>
      <h2>ĐĂNG KÝ</h2>
      <Form className={classes.form}>
        <FormGroup className={"mb-3"}>
          <FormLabel>
            Họ và tên
          </FormLabel>
          <FormControl id="name" type="text" />
        </FormGroup>
        <FormGroup className={"mb-3"}>
          <FormLabel>Số điện thoại</FormLabel>
          <FormControl id="phoneNumber" type="text" />
        </FormGroup>
        <Form.Group className={"mb-3"} controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="seven@example.org" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật khẩu ít nhất 8 ký tự" />
        </Form.Group>
        <Button className={classes["signup-button"]}>Đăng ký</Button>
      </Form>
    </div>
  );
}

export default SignupForm;
