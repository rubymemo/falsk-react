import React from 'react';
import './App.css';
import request from '../utils/request'

class App extends React.Component{
    state={
        data:null,
    };
    async componentDidMount(){

        var result=await request({
            url:'/test',
            method:'POST',
            data:{'info':200}});
        if (result){
            console.log(result)
        }
    }
    render(){
        return(
            <div className="App">
                {this.state.data}
            </div>
        );
    }
}
export default App;
