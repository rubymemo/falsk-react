import React from 'react';
import propTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import styles from './card.module.scss';


class HYCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardvalue:props.cardvalue,
            cardname:props.cardname
        }
    }
    render(){
        const {children}=this.props;
        return(
            <Card className={`${styles.card} ${styles["card-small"]}`}  style={{boxShadow:(this.state.cardvalue==='controlPanel'?'none':'')}}>
                <Card.Header className={`${styles["card-header"]} ${styles["border-bottom"]}`}>
                    <h6 className={styles["m-0"]}>{this.state.cardname}</h6>
                </Card.Header>
                {children}
            </Card>
        );
    }
}
HYCard.propTypes={
    cardname:propTypes.string.isRequired,
    cardvalue:propTypes.string.isRequired
};
export default HYCard;