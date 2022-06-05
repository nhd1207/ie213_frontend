import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import OrderDetail from "../../components/OrderResult/OrderDetail";
import { useHistory } from "react-router-dom";
import classes from "./OrderResult.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getUser } from "../UserPage/action";
import { Spin } from "antd";
import { getListShowroom } from "../CarOrder/action";
import { cancelOrder } from "./action";
function OrderResult(props) {
  let history = useHistory();

  useEffect(() => {
    props.getUser();
  }, []);

  let [action, setAction] = useState("order");
  return (
    <Layout>
      <Spin spinning={props.loading}>
        <h3 className={classes.title}>
          {action === "order" ? (
            <>
              ĐẶT XE THÀNH CÔNG {" "}
              <FontAwesomeIcon color="#008000" icon={faCircleCheck} />
            </>
          ) : (
            <>
              HUỶ ĐẶT XE THÀNH CÔNG {" "}
              <FontAwesomeIcon color="#008000" icon={faCircleCheck} />
            </>
          )}
        </h3>
        <OrderDetail
          data={history.location.state}
          cancelOrder={props.cancelOrder}
          cancelAction={setAction}
        />
      </Spin>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  status: state.carOrderPage.status,
  carOrder: state.carOrderPage.carOrder,
  user: state.user.user,
  loading: state.user.loading,
  showroom: state.carOrderPage.showroom,
  orderResult: state.OrderResult.carOrder,
  cancelLoading: state.OrderResult.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (params) => {
    dispatch(getUser(params));
  },
  getListShowroom: (params) => {
    dispatch(getListShowroom(params));
  },
  cancelOrder: (id) => {
    dispatch(cancelOrder(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderResult);
