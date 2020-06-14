import React,{Component} from 'react';
import Coditional from './components/Conditional';

class App2 extends Component{
    constructor(){
        super();
        this.state={
            log:false,
        }
        this.clickedlog=this.clickedlog.bind(this)
    }
    clickedlog(){
        this.setState((prev)=>{
            return(
                {
                    log:!prev.log,
                }
            )
        })
    }
    render(){
        return(
            <div>
                <Coditional onclk={this.clickedlog} st={this.state.log}/>
                <h1>You are {this.state.log ? "Logged in" : "Logged out"}</h1>
                
            </div>
        )
        
    }
}
export default App2;
