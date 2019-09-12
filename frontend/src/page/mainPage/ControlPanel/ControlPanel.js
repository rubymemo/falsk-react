import React from 'react';
import Modal from  '@/components/Modal';
import {Button,Collapse,Form,Row,Col} from 'react-bootstrap';
import request from '@/utils/request';
import styles from  './ControlPanel.module.scss';


class ControlPanel extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            label: [
                {name:"简约",selected:false},
                {name:"古典",selected:false},
                {name:"怀旧",selected:false},
                {name:"卡通",selected:false},
                {name:"时尚",selected:false},
                {name:"涂鸦",selected:false}],
            url:'fff',
            open:true
        };
        // this.handleClick=this.handleClick.bind(this);
    }
    handleClick(index) {
        let res=this.state.label.slice();
        for(let item of res){
            item.selected=false;
        }
        res[index].selected=!res[index].selected;
        this.setState({
            label:res,
        })
    }
    inputChange(e){
        this.setState({
            url:e.target.value,
        })
    }
    vaildUrl(){
        let textName=this.state.url.split('\\').pop();
        let suffix=textName.split('.').pop();
        if(suffix==='txt'){
            return true;
        }else {
            return false;
        }
    }
    async splitTxt(){
        if(this.vaildUrl()){
            let result=await request({
                url:'/splitarticle',
                method:'POST',
                data:{
                    articleUrl:this.state.url
                }});
            if (Array.isArray(result.data)){
                this.props.getText(result.data);
            }else{
                Modal.error({
                    title: result.data,
                    content: '请选择正确的文档格式，支持的文档格式有.txt',
                    okText: '确认',
                    cancelText: '取消',
                    onOk: () => console.log('ok'),
                    onCancel: () => console.log('cancel')
                })
            }
        }else{
            Modal.error({
                title: '文档选择不正确',
                content: '请选择正确的文档格式，支持的文档格式有.txt',
                okText: '确认',
                cancelText: '取消',
                onOk: () => console.log('ok'),
                onCancel: () => console.log('cancel')
            })
        }
    }
    render(){
        return(
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className={styles["colcenter"]}>
                        <form action="UploadOneServlet" method="post" name="f_upload" encType="multipart/form-data">
                            <label className={styles["file-input-container"]}><input onChange={(e)=>this.inputChange(e)} type="file" name="filename" />选择文档</label>
                            <input onChange={(e)=>this.inputChange(e)} className={styles["url-input"]} placeholder="或输入链接" value={this.state.url}/>
                        </form>
                    </div>
                    <div className={styles["split-line"]}></div>
                    <Row>
                        <Col>
                            <div className={styles["colcenter"]}><Button onClick={this.splitTxt.bind(this)}>分割文档</Button></div>
                        </Col>
                        <Col>
                            <div className={styles["colcenter"]}><Button>展示图片</Button></div>
                        </Col>
                    </Row>
                    <div className={styles["split-line"]}></div>
                    <div className="d-block my-2" onClick={ ()=> this.setState({ open: !this.state.open })}>
                        <span className={styles["span-link"]}>选择风格</span>
                    </div>
                    <Collapse in={this.state.open}>
                        <div>
                            <Form.Group controlId="formBasicChecbox">
                                {this.state.label.map((item,index)=>(
                                    <span onClick={()=>this.handleClick(index)} className={["select-span",item.selected?"active":null].join(' ')} key={index}>{item.name}</span>
                                ))}
                            </Form.Group>
                        </div>
                    </Collapse>
                </li>
            </ul>
        );
    };
}
export default ControlPanel;