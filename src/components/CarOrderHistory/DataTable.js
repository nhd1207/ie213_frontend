import style from "../User/DataTable.module.css";
import React from "react";
import { Table, Spin, Space, Tooltip, List } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import money from "../Share/functions/money";
import dateFormat from "dateformat";
import {
  HistoryOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
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
          ) : value === "Success" ? (
            <span className={`${style.buttonStateN}`}> {"Đã nhận" || ""} </span>
          ) : (
            <span className={`${style.buttonStateH}`}> {"Đã hủy" || ""} </span>
          )}
        </div>
      ),
    },
    {
      title: "Khác",
      dataIndex: "_id",
      key: "_id",
      className: "text-center",
      render: (value, record) => <Button onClick={() => {moreDetailHandler(value)}}>Xem thêm</Button>,
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
