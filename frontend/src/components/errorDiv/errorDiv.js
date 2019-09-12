import React from 'react';
import styles from './errorDiv.module.scss'
class ErrorDiv extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(<div className={styles['error-content']}>
            <h2>{this.props.errorInfo.title}</h2>
            <h3>{this.props.errorInfo.info}</h3>
            <p>{this.props.errorInfo.infodetail}</p>
        </div>)
    }
}
export default ErrorDiv