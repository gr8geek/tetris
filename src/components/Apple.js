import React, {Component} from 'react';
class Apple extends Component{
    constructor(props){
        super(props);
        
        this.state={
            freq: 0,
            
        }
        this.clicked=this.clicked.bind(this)
    }
    clicked(){
        this.setState((prev)=>{
            return(
                {
                    freq:prev.freq+1
                }
            )
        })
    }
    render(){
        return(
            <div>
                <img onClick={this.clicked} src="https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg"
                alt="Apple"/>
                <h1>number of apples::{this.state.freq}</h1>
                <h1>cost::{this.state.freq*10}</h1>
            </div>
        )
    }
}
export default Apple;
