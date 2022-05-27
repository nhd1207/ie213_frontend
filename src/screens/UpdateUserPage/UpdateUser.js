import { Menu, Button, Descriptions, Modal, List } from "antd";
// import style from "./index.module.css";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Spin, Table } from "antd";
import { updateUser } from "./action";
import dateFormat from "dateformat";
import FormUpdateUser from "../../components/User/FormUpdateUser"

function UpdateUser(props) {

  const updateUserInfo = (value) => {
    props.updateUser({
      name: value.name,
      info: value
    });
  }

  return (
    <Layout>
      <FormUpdateUser data={props.user} updateUser={updateUserInfo}></FormUpdateUser>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (params) => {
    dispatch(updateUser(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
