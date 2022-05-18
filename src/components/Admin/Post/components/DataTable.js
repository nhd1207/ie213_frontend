import React from 'react';
import { Table, Space, Tooltip, Popconfirm } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import dateFormat from 'dateformat';
import classes from "../index.module.css"; 



const DataTable = ({ dataSource, loading, updatePost, deletePost, showImage }) => {

  const onSubmit = (values) => {
    updatePost(values)
  }

  const onDelete = (values) => {
    deletePost(values)
  }

  const onShowImage = (values) => {
    showImage(values)
  }

  const columns = [
    {
      title: '#',
      width: 50,
      key: 'stt',
      render: (value, record, i) => <p>{i + 1}</p>,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      width: 200,
      key: 'title',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Hình ảnh',
      dataIndex: ['image'],
      width: 140,
      key: 'picture',
      className: 'text-left',
      render: (value, record) => <button className="btn btn-sm btn-primary" onClick={() => onShowImage(record)}>Quản lý hình ảnh</button>
    },
    {
      title: 'Nội dung',
      dataIndex: 'content',
      className: 'text-left',
      width: 300,
      render: (value, record) =>
        <div className={`${classes.news_content}`}>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Tác giả',
      dataIndex: ['author', 'name'],
      key: 'author',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {dateFormat(value, 'hh:mm:ss dd:mm:yyyy') || ''} </span>
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