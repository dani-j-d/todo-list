import React from 'react';
import TodoItem from '../todoItem/TodoItem';

function TodoList() {
    const [items, setItems] = React.useState([]);
    const handleSubmit = (index, item) => {
        const copyOfItems = items;
        copyOfItems.splice(index, 1, item)
        console.log(copyOfItems)
        setItems(copyOfItems);
    }
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
            {items.map((item, index) => <TodoItem {...item} handleSubmit={handleSubmit} index={index}/>)}
        </div>
    );
}

export default TodoList;