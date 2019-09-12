import React from 'react';
import styles from './App.module.scss';
import request from '../utils/request';
import Sidebar from  './mainPage/sidebar/sidebar';
import MainContent from  './mainPage/mainContent/mainContent';

class App extends React.Component{
    state={
        data:null,
    };
    async componentDidMount(){
        let result=await request({
            url:'/test',
            method:'POST',
            data:{'info':200}});
        if (result){
            console.log(result)
        }
    }
    render(){
        return(
            <div className={styles.wrapper}>
                <Sidebar/>
                <MainContent/>
            </div>
        );
    }
}
export default App;
