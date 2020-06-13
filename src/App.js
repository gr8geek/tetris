import React from 'react';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import MainContent from './components/MainContent';
const App=()=>{
  return(
    <div className="todo-list">
      
      <TodoItem label="Task 1"/>
      <TodoItem label="Task 2"/>
      <TodoItem label="Task 3"/>
    </div>
  );
}
export default App;

