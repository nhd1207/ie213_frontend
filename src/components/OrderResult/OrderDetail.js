import React from "react";

function OrderDetail(props) {
  return (
    <div>
      <h4>Chi tiết đơn hàng</h4>

      <div>
        <p>Họ và tên: <span>{props.name}</span></p>
      </div>
    </div>
  );
}

export default OrderDetail;
