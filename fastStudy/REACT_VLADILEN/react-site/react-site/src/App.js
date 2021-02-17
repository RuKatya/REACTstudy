import React from 'react'
import TodoList from "./Todo/TodoList";

function App() {

  const todos = [
    {id: 1, completed: false, title:'buy milk'},
    {id: 2, completed: false, title:'do blablabla'},
    {id: 3, completed: false, title:'what what in the buttt'}
  ]

  return (
    <div className="wrapper">
      <h1>React tutorial</h1> {/*header of page*/}

    <TodoList todos={todos}/>
    </div>
  )
}

export default App;
