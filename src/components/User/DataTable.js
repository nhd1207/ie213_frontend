import React from 'react';
import { Table, Spin, Space, Tooltip, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import money from '../Share/functions/money';
import { HistoryOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';


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
        <button onClick= {()=>handleShowForm(record)}> Xem thêm </button>
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
          <span> {money(value,"VND") || ''} </span>
        </div>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      className: 'text-center',
      render: (value, record) =>
      <div style={{ textAlign: 'center' }}>{
        (value === 'Pending') ?
          <span style={{ color: 'blue' }}>   {'Đang chờ' || ''} </span> :
          (value === 'Success') ?
            <span style={{ color: 'green' }}> {"Đã nhận" || ''} </span> :
            <span style={{ color: 'red' }}  > {'Đã hủy' || ''} </span>
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

