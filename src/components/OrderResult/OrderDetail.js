import React from "react";
import { Badge, Button } from "react-bootstrap";
import classes from "./OrderDetail.module.css";

function OrderDetail(props) {
  return (
    <>
      {props.data.map((item) => {
        return (
          <>
            <div className={classes.container}>
              <div className={classes.detail}>
                <h4>
                  Chi tiết đơn hàng #{item._id}{" "}
                  <Badge as="span" bg="warning">
                    {item.status}
                  </Badge>
                </h4>{" "}
                <p>
                  Họ và tên: Nguyễn Hoàng Đức
                  {/* <span>{item.userInfo}</span> */}
                </p>
                <p>
                  Địa chỉ nhận hàng: Showroom 123 Linh Chiểu, Thủ Đức, TP HCM
                  {/* <span>{item.place}</span> */}
                </p>
                <p>
                  Số điện thoại: 012121213
                  {/* <span>{item.phone}</span> */}
                </p>
                <p>
                  Ngày đặt hàng: 15-08-2022
                  {/* <span>{item.tiem}</span> */}
                </p>
                <div style={{ textAlign: "center" }}>
                  <Button variant="danger">Huỷ đơn hàng</Button>
                </div>
                <div className={classes.bar} />
                <h3 className={classes.productDetail}>Thông tin sản phẩm</h3>
                <p>
                  Tên sản phẩm: Xe Audi RS7 2021
                  {/* <span>{item.year}</span> */}
                </p>
                <p>
                    Năm sản xuất: 2018
                  {/* <span>{item.year}</span> */}
                </p>
                <div style={{ textAlign: "center" }}>
                  <Button variant="primary">Xem chi tiết sản phẩm</Button>
                </div>
              </div>
              <div>
                <img src="https://cdn.24h.com.vn/upload/1-2021/images/2021-02-13/Audi-RS7-bo-sung-mau-ngoai-that-bat-mat-va-gia-ban-cao-nhat-trong-phan-khuc-a--4--1613233367-396-width660height440.jpg"></img>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default OrderDetail;
