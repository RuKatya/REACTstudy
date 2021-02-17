import React from 'react'
import TodoList from "./Todo/TodoList";

function App() {

  const q = React.useState([
    {id: 1, completed: false, title:'buy milk'},
    {id: 2, completed: false, title:'do blablabla'},
    {id: 3, completed: false, title:'what what in the buttt'}
  ])

  function toggleTodo(id) {
    console.log('todo id:', id)

    todos=todos.map(todo => {
      if (todo.id===id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1> {/*header of page*/}

    <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  )
}

export default App;
