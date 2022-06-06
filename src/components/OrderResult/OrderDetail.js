import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import classes from "./OrderDetail.module.css";
import {useHistory} from "react-router-dom";
function OrderDetail(props) {
  function translateStatus(status) {
    if (status === "Pending")
      return {
        status: "Đang chờ",
        bg: "warning",
      };
    else if (status === "Cancelled")
      return {
        status: "Đã huỷ",
        bg: "danger",
      };
    else if (status === "Accepted")
      return {
        status: "Đã xác nhận",
        bg: "success",
      };
    else if (status === "Success")
      return {
        status: "Hoàn thành",
        bg: "success",
      };
  }

  function timestampConverter(timestamp) {
    let t = timestamp.slice(0, 16);
    let result = new Date(t);
    return result;
  }

  let [orderStatus, setOrderStatus] = useState({
    status: "",
    bg: "",
  });
  let [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setOrderStatus(translateStatus(props.data[0].status));
  }, []);

  useEffect(() => {
    if (
      props.data[0].status === "Success" ||
      props.data[0].status === "Accepted" ||
      props.data[0].status === "Cancelled"
    )
      setIsDisabled(true);
  }, [props.data[0].status]);
  let history = useHistory();
  function carDetailHandler(id) {
    history.push(`/car/${id}`);
  }
  return (
    <>
      {props.data.map((item) => {
        let key = 0;
        key++;
        return (
          <section key={`product ${key}`}>
            <div className={classes.container}>
              <div className={classes.detail}>
                <h4>
                  Chi tiết đơn hàng #{item._id}{" "}
                  <Badge as="span" bg={orderStatus.bg}>
                    {orderStatus.status}
                  </Badge>
                </h4>{" "}
                <p>
                  Họ và tên: <span>{item?.userInfo?.name}</span>
                </p>
                <p>
                  Địa chỉ nhận xe:{" "}
                  <span>{item?.place?.name + ", " + item?.place?.address}</span>
                </p>
                <p>
                  Số điện thoại: <span>{item?.phone}</span>
                </p>
                <p>
                  Ngày đặt xe:{" "}
                  <span>
                    {timestampConverter(item?.created_at).toLocaleDateString() +
                      " " +
                      timestampConverter(item?.created_at).toLocaleTimeString()}
                  </span>
                </p>
                <p>
                  Ngày nhận xe:{" "}
                  <span>
                    {timestampConverter(item?.time).toLocaleDateString() +
                      " " +
                      timestampConverter(item?.time).toLocaleTimeString()}
                  </span>
                </p>
                <p>
                  Ghi chú: <span>{item?.note}</span>
                </p>
                <div style={{ textAlign: "center" }}>
                  <Button
                    disabled={isDisabled}
                    variant="danger"
                    onClick={() => {
                      props.cancelOrder(item._id);
                      props.cancelAction("cancel");
                      setOrderStatus({
                        status: "Đã huỷ",
                        bg: "danger",
                      });
                      setIsDisabled(true);
                    }}
                  >
                    Huỷ đơn hàng
                  </Button>
                </div>
                <div className={classes.bar} />
                <h3 className={classes.productDetail}>Thông tin sản phẩm</h3>
                <p>
                  Tên sản phẩm: <span>{item?.carInfo?.name}</span>
                </p>
                <p>
                  Năm sản xuất: <span>{item?.carInfo?.year}</span>
                </p>
                <div style={{ textAlign: "center" }}>
                  <Button variant="primary" onClick={() => carDetailHandler(item?.carInfo._id)}>Xem chi tiết sản phẩm</Button>
                </div>
              </div>
              <div>
                <img
                  alt=""
                  src={item?.carInfo?.image?.avatar}
                  className={classes.avatar}
                ></img>
              </div>
            </div>
            <div className={classes.break} />
          </section>
        );
      })}
    </>
  );
}

export default OrderDetail;
