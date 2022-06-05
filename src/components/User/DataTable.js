import style from "./DataTable.module.css";
import React from 'react';
import { Table } from 'antd';
import money from '../Share/functions/money';
import dateFormat from 'dateformat'
const DataTable = ({ dataSource, loading, handleShowForm }) => {

  const columns = [
    {
      title: '#',
      className: 'text-center',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Mã đơn hàng',
      dataIndex: '_id',
      key: 'id',
      className: 'text-center',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Các sản phẩm',
      dataIndex: 'accessoryInfo',
      key: 'accessoryInfo',
      className: 'text-center',
      render: (value, record) =>
        <button onClick={() => handleShowForm(record)} className={`${style.buttonMore}`}> Xem thêm </button>
    },
    {
      title: 'Phương thức vận chuyển',
      dataIndex: 'deliveryMethod',
      key: 'delivery',
      className: 'text-center',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'totalPrice',
      key: 'total',
      className: 'text-center',
      render: (value, record) =>
        <div>
          <span> {money(value, "VND") || ''} </span>
        </div>
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createAt',
      key: 'createAt',
      className: 'text-center',
      render: (value, record) =>
        <div>
          <span> {dateFormat(value,'HH:MM dddd, mmmm d, yyyy') || ''} </span>
        </div>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      className: 'text-center',
      render: (value, record) =>
        <div className={`${style.buttonState}`} style={{ textAlign: 'center' }}>{
          (value === 'Pending') ?
            <span className={`${style.buttonStateC}`}>   {'Đang chờ' || ''} </span> :
            (value === 'Success') ?
              <span className={`${style.buttonStateN}`}> {"Đã nhận" || ''} </span> :
              <span className={`${style.buttonStateH}`} > {'Đã hủy' || ''} </span>
        }
        </div>
    },
  ]
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
}

export default DataTable;

