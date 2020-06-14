import React from 'react';
class TodoItem extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="todo-item">
                <input type="checkbox" id={this.props.id} name={this.props.text} checked={this.props.data}
                onChange={() => this.props.handleChange(this.props.id)}/>
                <label for={this.props.text}>{this.props.text}</label>
            </div>           
        );
    }
   
}
export default TodoItem;
