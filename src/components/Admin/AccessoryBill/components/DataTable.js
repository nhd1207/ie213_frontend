import React from "react";
import { Table, Space, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faCheck,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Popconfirm } from "antd";
import {
  HistoryOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import money from "../../../Share/functions/money";

const DataTable = ({ dataSource, loading, info, cancelAccessory, type }) => {
  const onSubmit = (values) => {
    info(values);
  };

  const onCancel = (values) => {
    cancelAccessory(values,'Cancelled');
  };

  const onAccept = (values) => {
    cancelAccessory(values,'Accepted');
  }

  const onSuccess = (values) => {
    cancelAccessory(values,'Success');
  }

  const columns = [
    {
      title: "#",
      width: 100,
      className: "text-center",
      render: (value, record, i) => <p>{i + 1}</p>,
    },
    {
      title: "Tên người dùng",
      dataIndex: ["userId","name"],
      key: "name",
      className: "text-center",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Số điện thoại",
      dataIndex: ["userId","info","phoneNumber"],
      key: "STD",
      className: "text-center",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Tổng đơn hàng",
      dataIndex: "totalPrice",
      key: "totalPrice",
      className: "text-center",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          <span> {money(value, "VNĐ") || ""} </span>
        </div>
      ),
    },
    {
      title: "Phương thức vận chuyển",
      dataIndex: "deliveryMethod",
      key: "deliveryMethod",
      className: "text-center",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Địa chỉ giao hàng",
      dataIndex: "place",
      key: "place",
      className: "text-center",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      className: "text-center",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          {value === "Pending" ? (
            <span style={{ color: "black" }}>
              <HistoryOutlined /> {"Đang chờ duyệt" || ""}{" "}
            </span>
          ) : value === "Success" ? (
            <span style={{ color: "green" }}>
              <CheckOutlined /> {"Thành công" || ""}{" "}
            </span>
          ) : value === "Accepted" ? (
            <span style={{ color: "blue" }}>
              <CheckOutlined /> {'Đã duyệt' || ""}{" "}
            </span>
          ) : (
            <span style={{ color: "red" }}>
              <CloseOutlined /> {"Đã hủy" || ""}{" "}
            </span>
          )}
        </div>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => (
        <Space>
          <button
            onClick={() => onSubmit(record)}
            className="btn btn-sm btn-primary"
          >
            <Tooltip placement="top" title="Thông tin đơn hàng">
              <span className="px-2">
                <FontAwesomeIcon icon={faInfo} />
              </span>
            </Tooltip>
          </button>
          {type === "Pending" ?
            <Popconfirm
              disabled={record.status === "Success"}
              placement="left"
              title="Xác nhận duyệt đơn?"
              onConfirm={() => onAccept(record)}
              okText="Có"
              cancelText="Không">
              <button className="btn btn-sm btn-primary">
              <Tooltip placement="top" title="Xác nhận duyệt đơn">
                <span className="px-2">
                <FontAwesomeIcon icon={faCheck} />
                </span>
                </Tooltip>
              </button>
            </Popconfirm>
            : <></>
          }
           {type === "Accepted" ?
            <Popconfirm
              disabled={record.status === "Success"}
              placement="left"
              title="Xác nhận giao hàng thành công?"
              onConfirm={() => onSuccess(record)}
              okText="Có"
              cancelText="Không">
              <button className="btn btn-sm btn-primary" >
              <Tooltip placement="top" title="Xác nhận giao hàng thành công">
                <span className="px-2">
                <FontAwesomeIcon icon={faCheck} />
                </span>
                </Tooltip>
              </button>
            </Popconfirm>
            : <></>
          }
          {type === "Pending" || type === "Accepted" ?
            <Popconfirm
              disabled={record.status === "Success"}
              placement="left"
              title="Bạn có muốn hủy?"
              onConfirm={() => onCancel(record)}
              okText="Có"
              cancelText="Không"
            >
              <button className="btn btn-sm btn-primary">
                <Tooltip placement="top" title="Hủy đơn">
                  <span className="px-2">
                    <FontAwesomeIcon icon={faDeleteLeft} />
                  </span>
                </Tooltip>
              </button>
            </Popconfirm> : <></>}
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
};

export default DataTable;