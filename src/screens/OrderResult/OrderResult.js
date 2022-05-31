import React from "react";
import Layout from "../../components/layout";
import OrderDetail from "../../components/OrderResult/OrderDetail";

function OrderResult(props) {
  return (
    <Layout>
      <h2>ĐẶT XE THÀNH CÔNG</h2>
      <OrderDetail />
    </Layout>
  );
}

export default OrderResult;
