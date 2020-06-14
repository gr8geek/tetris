import React, {Component} from 'react';
class Conditional extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.isLoading){
            return(
                <div>
                    <h1>Loaded!</h1>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Loading.....</h1>
                </div>
            )
        }
    }
}
export default Conditional;
