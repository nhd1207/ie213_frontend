import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Popconfirm, message, Button } from 'antd';

const DataTable = ({ dataSource, loading, updateAccessory, deleteAccessory }) => {

  const onSubmit = (values) => {
    updateAccessory(values)
  }

  const onDelete = (values) => {
    deleteAccessory(values)
  }

  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Tên phụ kiện',
      dataIndex: 'name',
      key: 'name',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Mã phụ kiện',
      dataIndex: 'code',
      key: 'code',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Loại',
      dataIndex: 'type',
      key: 'type',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Hình',
      dataIndex: 'image',
      key: 'picture',
      className: 'text-left',
      render: (value, record) =>
        <img src={value} height={50} width={50}></img>
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space >
          <button onClick={() => onSubmit(record)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Sửa">
              <span className="px-2">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </Tooltip>
          </button>
          <Popconfirm placement="left" title='Bạn có muốn xóa?' onConfirm={() => onDelete(record?._id)} okText="Có" cancelText="Không">
            <button 
           // onClick={() => onDelete(record?._id)} 
            className="btn btn-sm btn-primary">
              <Tooltip placement="top" title="Xóa">
                <span className="px-2">
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </span>
              </Tooltip>
            </button>
            </Popconfirm>
        </Space>
      ),
    },]
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

