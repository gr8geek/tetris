import React,{Component} from 'react';
import Coditional from './components/Conditional';

class App2 extends Component{
    constructor(){
        super();
        this.state={
            isLoading:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },1500)
    }
    render(){
        return(
            <div>
                <Coditional isLoading={this.state.isLoading}/>
            </div>
        )
        
    }
}
export default App2;
