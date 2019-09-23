import React from 'react';
import ErrorDiv from '@/components/errorDiv/errorDiv';
import Zmage from 'react-zmage'
import './picpanel.scss'
class PicPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            picArr:props.content
        };
        console.log(this.state.picArr)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            picArr: nextProps.content
        })
    }
    showImg(e){
        let imagePath=e.currentTarget.getAttribute('data-imgsrc');
        Zmage.browsing({ src:imagePath })
    }
    Content(){
        if((this.state.picArr instanceof Array)&&(this.state.picArr.length>0)){
            const Item=this.state.picArr.map((item,index)=>
            {
                return(
                    <div className='card-post' onClick={(e)=>this.showImg(e)} data-imgsrc={item.url} key={index}>
                        <div className='card-post-image' style={{backgroundImage:'url('+item.url+')'}}></div>
                        <div className='card-des'><p>{item.des}</p></div>
                    </div>
                )
            });
            return Item;
        }else{
            let errorInfo={
                title:'error',
                info:'图片池暂时为空',
            };
            return (<ErrorDiv errorInfo={errorInfo}/>)
        }
    }
    render(){
        return(
            <div>{this.Content()}</div>
        );
    };
}
export default PicPanel;