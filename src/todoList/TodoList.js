import React, { useEffect } from "react";
import TodoItem from "../todoItem/TodoItem";
import { Button } from "@mui/material";

function TodoList() {
  const [items, setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState({});

  useEffect(() => {
    async function fetchNewItem() {
      console.log("I printed!");

      const response = await fetch("/api");
      const data = await response.json();
      console.log("response: ", data);
      setNewItem(data);
    }

    fetchNewItem();
  }, []);

  const handleSubmit = (index, item) => {
    const copyOfItems = [...items];
    copyOfItems.splice(index, 1, item);
    console.log(copyOfItems);
    setItems(copyOfItems);
  };

  const handleDelete = (index) => {
    const copyOfItems = [...items];
    copyOfItems.splice(index, 1);
    console.log(copyOfItems);
    setItems(copyOfItems);
  };

  const addEntry = () => {
    setItems([...items, newItem]);
  };
  return (
    <div>
      <Button onClick={addEntry}>New TODO Item</Button>
      {items.map((item, index) => (
        <TodoItem
          {...item}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          index={index}
          editMode={true}
          key={index}
        />
      ))}
    </div>
  );
}

export default TodoList;
