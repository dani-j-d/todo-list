import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import { Button } from '@mui/material';

function TodoList() {
    const [items, setItems] = React.useState([]);

    const handleSubmit = (index, item) => {
        const copyOfItems = [...items];
        copyOfItems.splice(index, 1, item)
        console.log(copyOfItems)
        setItems(copyOfItems);
    }

    const handleDelete = (index) => {
        const copyOfItems = [...items];
        copyOfItems.splice(index, 1)
        console.log(copyOfItems)
        setItems(copyOfItems);
    }
    const newItem = {
        title: 'Title',
        description: 'Description',
        createdOn: '11/11/2011',
        completed: false,
    }
    const addEntry = () => {
        setItems([...items, newItem]);
    }
    return (
        <div>
            <Button onClick={addEntry}>New TODO Item</Button>
            {items.map((item, index) => <TodoItem {...item} handleSubmit={handleSubmit} handleDelete={handleDelete} index={index} editMode={true} key={index}/>)}
        </div>
    );
}

export default TodoList;