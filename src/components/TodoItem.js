import React from 'react';
function TodoItem({id,text}){
    return(
        <div className="todo-item">
            <input type="checkbox" id={id} name={text}></input>
            <label for={text}>{text}</label>
        </div>           
    );
}
export default TodoItem;
