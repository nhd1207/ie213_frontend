import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons'

const DataTable = ({ dataSource, loading, updateCar }) => {

  const onSubmit = (values) => {
    updateCar(values)
  }

  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Tên xe',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Tiền đặt cọc',
      dataIndex: 'deposit',
      key: 'deposit',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
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
      title: 'Giới thiệu',
      dataIndex: 'description',
      key: 'description',
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
          <button onClick={() => onSubmit(record?.ID)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Sửa">
              <span className="px-2">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </Tooltip>
          </button>
          <button onClick={() => onSubmit(record?.ID)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Xóa">
              <span className="px-2">
                <FontAwesomeIcon icon={faDeleteLeft}/>
              </span>
            </Tooltip>
          </button>
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

