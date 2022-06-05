import React from 'react'
import { Select, Spin, message, Button } from 'antd';
import cloudinaryUpload from '../../uploads'

const { Option } = Select;

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      value: '',
      type: 'avatar',
      loading: false
    }
  }

  handleChange = (value) => {
    this.setState({type : value});
  }

  handleFileUpload = async (e) => {
    try {
      this.setState({ loading: true });
      const uploadData = new FormData();
      uploadData.append("file", e.target.files[0], "file");
      const url = await cloudinaryUpload(uploadData)
      this.setState({ url: url.secure_url })
      await this.props.urlImage(url.secure_url, this.state.type)
      await this.props.update();
      message.success('Tải lên thành công');
      this.setState({ loading: false });
      this.setState({ url: '' })
    } catch (error) {
      message.error('Tải lên thất bại');
    }
  }

  render() {
    return (
      <div>
        <Spin spinning={this.state.loading}>
          <Select defaultValue="avatar" style={{ width: 150 }} onChange={this.handleChange}>
            <Option value="avatar">Thay hình đại diện</Option>
            <Option value="banner">Thay ảnh bìa</Option>
            <Option disabled={!this.props.gallery} value="gallery">Thêm hình khác</Option>
          </Select>
          <input className='fancy-input'
            type="file"
            //value={value}
            onChange={(e) => { this.setState({ value: e })}}
          />
          <p></p>
          <Button className='btn btn-sm btn-primary'
            onClick={() => this.handleFileUpload(this.state.value)}>Tải lên</Button>
        </Spin>
      </div>)
  }
}

export default FileInput