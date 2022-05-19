import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit,faInfo,faCheck } from '@fortawesome/free-solid-svg-icons'
import { Popconfirm, message, Button } from 'antd';
import { HistoryOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import dateFormat from 'dateformat'
import money from '../../../Share/functions/money';

const DataTable = ({ dataSource, loading, info, changeStatus,type }) => {

  const onSubmit = (values) => {
    info(values)
  }

  const onDelete = (values) => {
    changeStatus(values)
  }

  const onCancel = (values) => {
    changeStatus(values,'Cancelled');
  };

  const onAccept = (values) => {
    changeStatus(values,'Accepted');
  }

  const onSuccess = (values) => {
    changeStatus(values,'Success');
  }

  const columns = [
    {
      title: '#',
      width: 50,
      className: 'text-center',
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Tên người dùng',
      dataIndex: ['userInfo'],//, 'name'],
      key: 'name',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {value?.name || ''} </span>
        </div>
    },
    {
      title: 'Số điện thoại',
      dataIndex: ['userInfo', 'info','phoneNumber'],
      key: 'name',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Giá xe',
      dataIndex: ['carInfo','price'],
      key: 'price',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {money(value,'VNĐ')|| ''} VNĐ</span>
        </div>
    },
    {
      title: 'Tiền đặt cọc',
      dataIndex: 'deposit',
      key: 'deposit',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {money(value,'VNĐ') || ''} </span>
        </div>
    },
    {
      title: 'Thời gian hẹn',
      dataIndex: 'time',
      key: 'time',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span> {dateFormat(value,'HH:MM dddd, mmmm d, yyyy') || ''} </span>
        </div>
    },
    {
      title: 'Địa điểm nhận xe',
      dataIndex: ['place'],
      key: 'price',
      className: 'text-center',
      render: (value, record) =>
        <div style={{ textAlign: 'center' }}>
          <span style={{weight:"bold"}}> {value?.name || ''} </span><br/>
          <span> {value?.address || ''} </span>
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
            <span style={{ color: 'blue' }}><HistoryOutlined />   {'Đang chờ' || ''} </span> :
            (value === 'Success') ?
              <span style={{ color: 'green' }}><CheckOutlined /> {"Đã nhận" || ''} </span> :
              <span style={{ color: 'red' }}><CloseOutlined /> {value || ''} </span>
        }
        </div>
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space>
          <button onClick={() => onSubmit(record)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Thông tin xe">
              <span className="px-2">
                <FontAwesomeIcon icon={faInfo} />
              </span>
            </Tooltip>
          </button>
          {type == "Pending" ?
            <Popconfirm
              disabled={record.status === "Success"}
              placement="left"
              title="Xác nhận duyệt đơn?"
              onConfirm={() => onAccept(record)}
              okText="Có"
              cancelText="Không">
              <button className="btn btn-sm btn-primary" style={{color:'green'}}>
                <span className="px-2">
                <FontAwesomeIcon icon={faCheck} />
                </span>
              </button>
            </Popconfirm>
            : <></>
          }
           {type == "Accepted" ?
            <Popconfirm
              disabled={record.status === "Success"}
              placement="left"
              title="Xác nhận giao hàng thành công?"
              onConfirm={() => onSuccess(record)}
              okText="Có"
              cancelText="Không">
              <button className="btn btn-sm btn-primary" style={{color:'green'}}>
                <span className="px-2">
                <FontAwesomeIcon icon={faCheck} />
                </span>
              </button>
            </Popconfirm>
            : <></>
          }
          {type == "Pending" || type == "Accepted" ?
            <Popconfirm
              disabled={record.status === "Success"}
              placement="left"
              title="Bạn có muốn hủy?"
              onConfirm={() => onCancel(record)}
              okText="Có"
              cancelText="Không"
            >
              <button className="btn btn-sm btn-primary">
                <Tooltip placement="top" tilte="Hủy đơn đặt cọc">
                  <span className="px-2">
                    <FontAwesomeIcon icon={faDeleteLeft} />
                  </span>
                </Tooltip>
              </button>
            </Popconfirm> : <></>}
        </Space>
      ),
    },]
  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
}

export default DataTable;