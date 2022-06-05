import { Popconfirm, message } from 'antd';

function confirm(e) {
  message.success('Click on Yes');
}

function cancel(e) {
  message.error('Click on No');
}

export default () => (
  <Popconfirm
    title="Bạn có chắc muốn xóa?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Có"
    cancelText="Không"
  >
    <a href="#">Xóa</a>
  </Popconfirm>
);