import React from 'react'
import cloudinaryUpload from '../../uploads'



class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  handleFileUpload = async (e, value) => {
    try {
      const uploadData = new FormData();
      uploadData.append("file", e.target.files[0], "file");
      const url = await cloudinaryUpload(uploadData)
      console.log('url', url)
      this.setState({ url: url.secure_url })
      value = url.secure_url;
      console.log('value2', value)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { input: { value } } = this.props
    console.log('value', value)

    return (
      <div>
        <input className='fancy-input'
          type="file"
          value={value}
          //onChange={(e) => this.handleFileUpload(e, value)}
          />
        <p>{this.state.url}</p>
      </div>)
  }
}

export default FileInput