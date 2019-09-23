import React, {Component} from 'react';
import Modal from  '@/components/Modal';
import {Button,Row,Col} from 'react-bootstrap';
import './FetchUpload.scss'
class FetchUpload extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state={
            filename:'',
        }
    }
    vaildUrl(){
        let suffix=this.state.filename.split('.').pop();
        if(suffix==='txt'){
            return true;
        }else {
            return false;
        }
    }
    upload = () => {
        if(this.state.filename===''||!this.vaildUrl()){
            Modal.error({
                title: '没有文件可上传',
                content: '请选择文件或者检查一下文件是否支持，当前支持的文件格式有.txt',
                okText: '确认',
                cancelText: '取消',
                onOk: () => console.log('ok'),
                onCancel: () => console.log('cancel')
            })
        }else {
            const data = new FormData();
            data.append('file', this.fileInput.current.files[0]);  //相当于 input:file 中的name属性
            fetch('http://127.0.0.1:5000/file/upload', {
                method: 'POST',
                body: data
            }).then(response => {
                if (response.status === 500) {

                } else {
                    return (response.json());
                }
            }).then(res => {
                console.log(res);
                this.props.getText(res);
            })
        }
    };
    inputChange(e){
        let efilepath=e.target.value.split("\\");
        let efilename=efilepath[efilepath.length-1];
        this.setState({
            filename:efilename,
        })
    }
    render() {
        return (
            <Row>
                <Col lg="7" md="12" sm="12" className="file-select">
                    <label className="file-input-container">
                        <input onChange={(e)=>this.inputChange(e)} type="file" name='file' ref={this.fileInput}/>
                        选择文档
                    </label>
                    <span>{this.state.filename}</span>
                </Col>
                <Col lg="5" md="12" sm="12">
                    <Button className="upload-btn" value="上传" onClick={this.upload}>上传文档</Button>
                </Col>
            </Row>
        )
    }
}
export default FetchUpload;