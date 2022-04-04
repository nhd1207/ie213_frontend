import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./SignupForm.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

function SignupForm() {
  return (
    <div>
      <h1>ĐĂNG KÝ</h1>
      <Form>
        <FormGroup>
          <FormLabel className={"mb-3"} controlId="name">
            Họ và tên
          </FormLabel>
          <FormControl id="name" type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel className={"mb-3"} controlId="phoneNumber">
            Số điện thoại
          </FormLabel>
          <FormControl id="phoneNumber" type="text" />
        </FormGroup>
        <Form.Group className={"mb-3"} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button>Đăng ký</Button>
      </Form>
    </div>
  );
}

export default SignupForm;
