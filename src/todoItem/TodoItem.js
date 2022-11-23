import React from 'react';
import { Card, Checkbox, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import "./TodoItem.css"

function TodoItem(props) {
    const [editMode, setEditMode] = React.useState(props.editMode);
    const [title, setTitle] = React.useState(props.title);
    const [description, setDescription] = React.useState(props.description);
    const [createdOn, setCreatedOn] = React.useState(props.createdOn);
    const [completed, setCompleted] = React.useState(props.completed);

    const displayContent = () => {
      return <> 
        
        <Typography>{props.title}</Typography>
        <Typography>{props.createdOn}</Typography>
        <Typography>{props.description}</Typography>
        <Button onClick={() => {setEditMode(!editMode)}}>Edit</Button>
        <Button onClick={(event) => {props.handleDelete(props.index)}}>Delete</Button>
      </>
    }

    const displayForm = () => {
      return <> 
        <>
          <label>
            Title:
            <input value={title} onChange={(event) => {setTitle(event.target.value)}} type="text" name="title" />
          </label>
          <label>
            Description:
            <input value={description} onChange={(event) => {setDescription(event.target.value)}} type="text" name="description" />
          </label>
          <Button onClick={() => {setEditMode(!editMode)}}>Cancel</Button>
          <Button onClick={() => {
            console.log('compleeted: ', completed)
            props.handleSubmit(props.index, {title, description, completed, createdOn});
            setEditMode(false);
            }}>Submit</Button>
        </>
      </>
    }

    return <Card className="item-card">
      <Checkbox checked={completed} onChange={(event) => {setCompleted(event.target.checked)}} />
      { editMode ? displayForm() : displayContent() }
    </Card>
  }

  TodoItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    createdOn: PropTypes.string,
    completed: PropTypes.bool,
    index: PropTypes.number,
    editMode: PropTypes.bool
  }
  
export default TodoItem;