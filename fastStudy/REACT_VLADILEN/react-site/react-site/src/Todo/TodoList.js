import React from "react";
import PropTypes from 'prop-types'
import TodoItems from "./TodoItems"

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <TodoItems todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList;