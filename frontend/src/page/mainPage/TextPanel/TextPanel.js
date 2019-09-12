import React from 'react';
import ErrorDiv from '@/components/errorDiv/errorDiv'

const styles={
    textContent:{
        'marginBottom': '10px',
        'padding': '10px 0',
        'borderBottom': 'dashed 1px #bdb7b7',
    }
};
class TextPanel extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            textArr:props.content
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            textArr: nextProps.content
        })
    }
    Content(){
        if((this.state.textArr instanceof Array)&&(this.state.textArr.length>0)){
            console.log(this.state.textArr)
            const Item=this.state.textArr.map((item,index)=>
            {
                return(<div style={styles.textContent} key={index}>{item}</div>)
            });
            return Item;
        }else{
            let errorInfo={
                title:'error',
                info:'请选择文档并分割',
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
export default TextPanel;