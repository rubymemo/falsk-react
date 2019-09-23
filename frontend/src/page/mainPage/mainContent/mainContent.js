import React from 'react';
import {Card,Row,Col}  from 'react-bootstrap';
import ControlPanel from '../ControlPanel/ControlPanel';
import PicPanel from '../PicPanel/PicPanel';
import TextPanel from '../TextPanel/TextPanel';
import HYcard from '../card/card';
import './mainContent.scss'
const styles={
    mainContent:{
        "marginLeft": "14.666667%",
    },
    mainContentContainer:{
        "padding":"1.5rem"
    },
    pagespan:{
        "letterSpacing": ".125rem",
        "fontSize": ".625rem"
    },
    pagetit:{
        "fontSize": "1.625rem",
        "fontWeight": "500",
        "lineHeight": "1",
        "margin": "0",
        "padding": "0",
    }
};

class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: [],
            pictures:[],
        }
    }
    getText(data){
        this.setState({
            text:data
        })
    }
    getPic(data){
        this.setState({
            pictures:data
        })
    }
    render(){
        return(
            <div style={styles.mainContent}>
                <div className="pageheader">
                        <span style={styles.pagespan}>
                            YMediaLab ———— ruby
                        </span>
                    <h3 style={styles.pagetit}>Gnews Generator</h3>
                </div>
                <div style={styles.mainContentContainer}>
                    <Row>
                        <Col lg="4" md="6" sm="12">
                            <HYcard cardvalue="text" cardname="文段池">
                                <Card.Body>
                                    <TextPanel content={this.state.text}/>
                                </Card.Body>
                            </HYcard>
                        </Col>
                        <Col lg="5" md="12" sm="12">
                            <HYcard cardvalue="picture" cardname="图片池">
                                <Card.Body>
                                    <PicPanel content={this.state.pictures}/>
                                </Card.Body>
                            </HYcard>
                        </Col>
                        <Col lg="3" md="12" sm="12">
                            <HYcard cardvalue="controlPanel" cardname="控制面板">
                                <ControlPanel getText={this.getText.bind(this)} getPic={this.getPic.bind(this)}/>
                            </HYcard>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default MainContent;