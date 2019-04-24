import React, { Component } from 'react'
import { Upload, Button, Icon, message } from 'antd'
import SweetAlert from 'sweetalert2-react'
import '../Style/home.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upLoadProps: {
        name: 'file',
        action: '//localhost:7001/upload',
        headers: {
          authorization: 'authorization-text'
        },
        onChange: this.onChange.bind(this)
      },
      swal: {
        show: false,
        text: 'Hello World',
        title: '提示'
      }
    }
  }

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      this.setState({
        swal: {
          show: true,
          text: `${info.file.name} file uploaded successfully`,
          title: '提示'
        }
      })
    } else if (info.file.status === 'error') {
      this.setState({
        swal: {
          show: true,
          text: `${info.file.name} file upload failed.`,
          title: '提示',
          type: 'error'
        }
      })
    }
  }
  render() {
    const { upLoadProps, swal } = this.state
    return (
      <div id="Home">
        <h1>翻译工具</h1>
        <div className="main">
          <div className="main-i">
            <Upload {...upLoadProps}>
              <Button>
                <Icon type="upload" /> 点击上传 Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="main-i">配置</div>
          <div className="main-i">配置</div>
        </div>
        <SweetAlert
          {...swal}
          onConfirm={() => this.setState({ swal: false })}
        />
      </div>
    )
  }
}

export default App
