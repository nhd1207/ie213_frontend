import React, { useEffect } from "react";
import Layout from "../../components/layout";
import OrderDetail from "../../components/OrderResult/OrderDetail";
import { useHistory } from "react-router-dom";
import classes from "./OrderResult.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function OrderResult(props) {
  let history = useHistory();
  useEffect(() => {
    console.log(history.location);
  });

  return (
    <Layout>
      <h3 className={classes.title}>ĐẶT XE THÀNH CÔNG <FontAwesomeIcon color="#008000" icon={faCircleCheck} /></h3>
      <OrderDetail data={history.location.state}/>
    </Layout>
  );
}

export default OrderResult;
