import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import OrderDetail from "../../components/OrderResult/OrderDetail";
import { useHistory } from "react-router-dom";
import classes from "./OrderResult.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getUser } from "../UserPage/action";
import { Spin } from "antd";
import {getListShowroom} from "../CarOrder/action";

function OrderResult(props) {
  let history = useHistory();

  useEffect(() => {
    console.log(history.location);
    props.getUser();
  }, []);

  return (
    <Layout>
      <Spin spinning={props.loading}>
        <h3 className={classes.title}>
          ĐẶT XE THÀNH CÔNG{" "}
          <FontAwesomeIcon color="#008000" icon={faCircleCheck} />
        </h3>
        <OrderDetail data={history.location.state} user={props?.user} />
      </Spin>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  status: state.carOrderPage.status,
  carOrder: state.carOrderPage.carOrder,
  user: state.user.user,
  loading: state.user.loading,
  showroom: state.carOrderPage.showroom
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (params) => {
    dispatch(getUser(params));
  },
  getListShowroom: (params) => {
    dispatch(getListShowroom(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderResult);
