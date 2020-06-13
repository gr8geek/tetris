import React from 'react';
function TodoItem({label}){
    return(
        <div className="todo-item">
            <input type="checkbox" id={label} name={label}></input>
            <label for={label}>{label}</label>
        </div>           
    );
}
export default TodoItem;
