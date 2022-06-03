import style from "../User/DataTable.module.css";
import React from "react";
import { Table } from "antd";
import money from "../Share/functions/money";
import dateFormat from "dateformat";

import { Button } from "react-bootstrap";
const DataTable = ({ dataSource, loading, moreDetailHandler }) => {
    
  const columns = [
    {
      title: "#",
      className: "text-center",
      width: 100,
      render: (value, record, i) => <p>{i + 1}</p>,
    },
    {
      title: "Mã đơn hàng",
      dataIndex: "_id",
      key: "id",
      className: "text-center",
      render: (value, record) => (
        <div>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "carInfo",
      key: "carInfo",
      className: "text-center",
      render: (value, record) => (
        <p>{value?.name}</p>
      )
    },
    {
      title: "Tổng tiền",
      dataIndex: "carInfo",
      key: "carInfo",
      className: "text-center",
      render: (value, record) => (
        <div>
          <span> {money(value?.price, "VND") || ""} </span>
        </div>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "time",
      key: "time",
      className: "text-center",
      render: (value, record) => (
        <div>
          <span> {dateFormat(value, "HH:MM dddd, mmmm d, yyyy") || ""} </span>
        </div>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      className: "text-center",
      render: (value, record) => (
        <div className={`${style.buttonState}`} style={{ textAlign: "center" }}>
          {value === "Pending" ? (
            <span className={`${style.buttonStateC}`}>
              {" "}
              {"Đang chờ" || ""}{" "}
            </span>
          ) : value === "Accepted" ? (
            <span className={`${style.buttonStateN}`}> {"Đã nhận" || ""} </span>
          ) : value === "Cancelled" ? (
            <span className={`${style.buttonStateH}`}> {"Đã hủy" || ""} </span>
          ) : <span className={`${style.buttonStateN}`}> {"Hoàn thành" || ""}</span>}
        </div>
      ),
    },
    {
      title: "Khác",
      dataIndex: "_id",
      key: "_id",
      className: "text-center",
      render: (value, record) => <Button onClick={() => {moreDetailHandler(record); }}>Xem thêm</Button>,
    },
  ];
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
};

export default DataTable;
