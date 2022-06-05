import React from 'react';
import { Table, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Popconfirm } from 'antd';
import money from '../../../Share/functions/money';


const DataTable = ({ dataSource, loading, updateCar, deleteCar, showImage }) => {

  const onSubmit = (values) => {
    updateCar(values)
  }

  const onDelete = (values) => {
    deleteCar(values)
  }

  const onShowImage = (values) => {
    showImage(values)
  }

  const columns = [
    {
      title: '#',
      width: 100,
      key: 'stt',
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
      dataIndex: ['image'],
      key: 'picture',
      className: 'text-left',
      render: (value, record) =>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => onShowImage(record)}
        >
          Quản lý hình ảnh
        </button>
    },
    {
      title: 'Tiền đặt cọc',
      dataIndex: 'deposit',
      key: 'deposit',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {money(value, 'VNĐ') || ''} </span>
        </div>
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {money(value, 'VNĐ') || ''} </span>
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
      title: 'Thông số',
      dataIndex: 'specification',
      key: 'specification',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span>Dung tích xi lanh: {value.displacement || ''} cm3</span><br/>
          <span>Mã lực: {value.power || ''} HP </span><br/>
          <span>Tốc độ tối đa: {value.maxSpeed || ''} km/h </span><br/>
          <span>Tăng tốc 0-100km/h: {value.acceleration || ''}s</span><br/>
          <span>Tải trọng: {value.weight || ''} kg  </span>
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
      rowKey="_id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
}

export default DataTable;