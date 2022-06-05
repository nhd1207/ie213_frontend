import React from "react";
import { Table, Space, Tooltip, Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faExclamation } from "@fortawesome/free-solid-svg-icons";
import dateFormat from "dateformat";
const DataTable = ({ dataSource, loading, updateUser, deleteUser }) => {
  const onSubmit = (values) => {
    updateUser(values);
  };

  const onDelete = (values) => {
    deleteUser(values);
  };

  const columns = [
    {
      title: "#",
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: "Tên người dùng",
      dataIndex: "name",
      key: "name",
      className: "text-left",
      render: (value, record) => (
        <div>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Hình",
      dataIndex: "photo",
      key: "photo",
      className: "text-left",
      render: (value, record) => <img src={value} height={50} width={50}></img>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      className: "text-left",
      render: (value, record) => (
        <div>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Số điện thoại",
      dataIndex: ["info", "phoneNumber"],
      key: "phone_number",
      className: "text-left",
      render: (value, record) => (
        <div>
          <span> {value || ""} </span>
        </div>
      ),
    },
    {
      title: "Ngày sinh",
      dataIndex: ["info", "dateOfBirth"],
      key: "date_of_birth",
      className: "text-left",
      render: (value, record) => (
        <div>
          <span> {dateFormat(value, "mmmm dS, yyyy") || ""} </span>
        </div>
      ),
    },
    {
      title: "Quyền",
      dataIndex: "role",
      key: "role",
      className: "text-left",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          {value === "admin" ? (
            <span style={{ color: "green" }}> {"Quản trị viên" || ""} </span>
          ) 
          : value === "manager"?
          (
            <span style={{ color: "orange" }}> {"Quản lý" || ""} </span>
          ):
          (
            <span style={{ color: "blue" }}> {"Người dùng" || ""} </span>
          )}
        </div>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "active",
      key: "active",
      className: "text-left",
      render: (value, record) => (
        <div style={{ textAlign: "center" }}>
          {value? (
            <span style={{ color: "green" }}> {"Hoạt động" || ""} </span>
          ) : (
            <span style={{ color: "red" }}> {"Không hoạt động" || ""} </span>
          )}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Popconfirm
            placement="left"
            title={record.active?"Bạn có muốn xóa?":'Bạn có muốn khôi phục'}
            onConfirm={() => onDelete(record?._id)}
            okText="Có"
            cancelText="Không"
          >
            <button 
              className="btn btn-sm btn-primary"
            >
              <Tooltip placement="top" title="Chuyển trạng thái người dùng">
                <span className="px-2">
                  <FontAwesomeIcon icon={faExclamation} />
                </span>
              </Tooltip>
            </button>
          </Popconfirm>
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
