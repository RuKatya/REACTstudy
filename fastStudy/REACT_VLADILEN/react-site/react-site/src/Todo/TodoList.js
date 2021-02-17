import React from "react";
import TodoItems from "./TodoItems"

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map(todo => {
                return <TodoItems todo={todo}/>
            })}
        </ul>
    )
}