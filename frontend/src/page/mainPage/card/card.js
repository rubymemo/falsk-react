import React from 'react';
import {Card} from 'react-bootstrap';
import ControlPanel from '../ControlPanel/ControlPanel';
import PicPanel from '../PicPanel/PicPanel';
import TextPanel from '../TextPanel/TextPanel';
import styles from './card.module.scss';


class HYCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: props.text,
            pictures:props.pictures,
        }
    }
    getText(data) {
        this.setState({
            text: data //把父组件中的parentText替换为子组件传递的值
        });
        console.log(this.state.text)
    }
    getPic(data){
        this.setState({
            pictures:data
        })
    }
    renderCardBody(){

        if(this.props.cardvalue==='text'){
            return(
                <Card.Body>
                    <TextPanel content={this.state.text}/>
                </Card.Body>
            )
        }
        if(this.props.cardvalue==='picture'){
            return(
                <Card.Body>
                    <PicPanel/>
                </Card.Body>
            )
        }
        if(this.props.cardvalue==='controlPanel'){
            return(
                <ControlPanel getText={this.getText.bind(this)}/>
            )
        }
    }
    render(){
        return(
            <Card className={`${styles.card} ${styles["card-small"]}`}  style={{boxShadow:(this.props.cardvalue==='controlPanel'?'none':'')}}>
                <Card.Header className={`${styles["card-header"]} ${styles["border-bottom"]}`}>
                    <h6 className={styles["m-0"]}>{this.props.cardname}</h6>
                </Card.Header>
                    {this.renderCardBody()}
            </Card>
        );
    }
}
export default HYCard;