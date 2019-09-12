import React from 'react';
import {Row,Col}  from 'react-bootstrap';
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

// function ColItem() {
//     const moduleCard=[
//         {
//             name:'文段池',
//             value:'text',
//             size:[4,6,12],
//             content:[]
//         },
//         {
//             name:'图片池',
//             value:'picture',
//             size:[5,12,12],
//         },{
//             name:'控制面板',
//             value:'controlPanel',
//             size:[3,12,12],
//         }];
//     const ColItems=moduleCard.map((item,index)=>
//         <Col key={index} lg={item.size[0]} md={item.size[1]} sm={item.size[2]} ><HYcard content={item.content} cardvalue={item.value} cardname={item.name}/></Col>
//     );
//     return(
//         <Row>
//             {ColItems}
//         </Row>
//     )
// }

class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: [],
            pictures:[],
        }
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
                        <Col lg="4" md="6" sm="12"><HYcard parvalue={this.state} cardvalue="text" cardname="文段池"/></Col>
                        <Col lg="5" md="12" sm="12"><HYcard parvalue={this.state} cardvalue="picture" cardname="图片池"/></Col>
                        <Col lg="3" md="12" sm="12"><HYcard parvalue={this.state} cardvalue="controlPanel" cardname="控制面板"/></Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default MainContent;