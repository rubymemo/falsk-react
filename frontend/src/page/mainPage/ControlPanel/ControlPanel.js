import React from 'react';
import Modal from  '@/components/Modal';
import FetchUpload from  '@/components/FetchUpload/FetchUpload';
import {Button,Collapse,Form,Row,Col} from 'react-bootstrap';
import request from '@/utils/request';
import styles from  './ControlPanel.module.scss';
import util from '@/utils/util';


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
            open:true,
            text: [],
            pictures:[],
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
    vaildFactor(){
        if(this.state.text.length===0||this.state.pictures.length===0){
            return false;
        }else{
            let count=0;
            for(let item of this.state.label){
                if(item.selected){
                    count++;
                }
            }
            return count===1?true:false;
        }
    }
    async generate(){
        if(this.vaildFactor()){
            let newJson=util.createNewData(this.state.text,this.state.pictures);
            console.log(newJson);
            // let result=await request({
            //     url:'/createnews',
            //     method:'POST',
            //     data:newJson
            // });
            // console.log(result);
            Modal.success({
                title: '已成功生成新闻',
                content: '可往下滑动查看',
                okText: '确认',
                cancelText: '取消',
                onOk: () => console.log('ok'),
                onCancel: () => console.log('cancel')
            })
        }else{
            Modal.error({
                title: '不知道啥问题反正是错了',
                content: '可能是后台传的数据有问题反正好好检查一下吧',
                okText: '确认',
                cancelText: '取消',
                onOk: () => console.log('ok'),
                onCancel: () => console.log('cancel')
            })
        }

    }
    getText(data){
        this.setState({
            text:data,
        });
        this.props.getText(data);
    }
    async getImg(){
        let result=await request({
            url:'/getpic',
            method:'GET',
        });
        if(Array.isArray(result.data)){
           this.props.getPic(result.data);
            this.setState({
                pictures: result.data
            })
        }else{
            Modal.error({
                title: '不知道啥问题反正是错了',
                content: '可能是后台传的数据有问题反正好好检查一下吧',
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
                        <FetchUpload getText={this.getText.bind(this)}/>
                    </div>
                    <div className={styles["split-line"]}/>
                    <Row>
                        <Col>
                            <div className={styles["colcenter"]}><Button onClick={this.getImg.bind(this)}>展示图片</Button></div>
                        </Col>
                    </Row>
                    <div className={styles["split-line"]}/>
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
                    <div className={styles["colcenter"]}><Button onClick={this.generate.bind(this)}>一键生成</Button></div>
                </li>
            </ul>
        );
    };
}
export default ControlPanel;