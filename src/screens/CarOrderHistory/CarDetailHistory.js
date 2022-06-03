import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import OrderDetail from "../../components/OrderResult/OrderDetail";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { cancelOrder } from "../OrderResult/action";

function CarDetailHistory(props) {
  let history = useHistory();
  let [act, setAct] = useState("order");
  useEffect(() => {
  }, [])
  
  return (
    <Layout>
      <OrderDetail
        data={history.location.state}
        cancelOrder={props.cancelOrder}
        cancelAction={setAct}
      />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  cancelLoading: state.OrderResult.loading,
});

const mapDispatchToProps = (dispatch) => ({
  cancelOrder: (id) => {
    dispatch(cancelOrder(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailHistory);
