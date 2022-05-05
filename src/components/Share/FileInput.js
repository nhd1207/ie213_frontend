import React from 'react'
import cloudinaryUpload from '../../uploads'

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  handleFileUpload = (e) => {
    try {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0], "file");
    cloudinaryUpload(uploadData)
    } catch (error) {
        console.log(error)
    }
  }

  render() {
    const { input: { value } } = this.props

    return (<input
      type="file"
      //value={value}
      onChange={(e)=>this.handleFileUpload(e)}
    />)
  }
}

export default FileInput