import React from 'react';
import TodoItem from '../todoItem/TodoItem';

function TodoList() {
    const [items, setItems] = React.useState([]);
    const newItem = {
        title: 'TODO Title',
        description: 'TODO Description',
        created: 'Date Created',
        completed: false,
    }
    const addEntry = () => {
        setItems([...items, newItem]);
    }
    return (
        <div>
            <button onClick={addEntry}>New TODO Item</button>
            {items.map(item => <TodoItem {...item}/>)}
        </div>
    );
}

export default TodoList;