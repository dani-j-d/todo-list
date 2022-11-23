import React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';

function TodoItem(props) {
    const [editMode, setEditMode] = React.useState(props.editMode);
    const [title, setTitle] = React.useState(props.title);
    const [description, setDescription] = React.useState(props.description);
    const [createdOn, setCreatedOn] = React.useState(props.createdOn);
    const [completed, setCompleted] = React.useState(props.completed);


    if (!editMode) {
      return <Card>
      <button onClick={() => {setEditMode(!editMode)}}>Edit</button>
      <span>{editMode.toString()}</span>
      <span>{props.title}</span>
      <span>{props.completed.toString()}</span>
      <span>{props.description}</span>
      <span>{props.createdOn}</span>
      <button onClick={(event) => {props.handleDelete(props.index)}}>Delete</button>
    </Card>
    } else {
      return <Card>
        <form>
          <label>
            Title:
            <input value={title} onChange={(event) => {setTitle(event.target.value)}} type="text" name="title" />
          </label>
          <label>
            Description:
            <input value={description} onChange={(event) => {setDescription(event.target.value)}} type="text" name="description" />
          </label>
          <label>
            Completed:
            <input checked={completed} onChange={(event) => {setCompleted(event.target.checked)}} type="checkbox" name="completed" />
          </label>
          <button onClick={() => {setEditMode(!editMode)}}>Cancel</button>
          <input onClick={(event) => {
            event.preventDefault();
            console.log('compleeted: ', completed)
            props.handleSubmit(props.index, {title, description, completed});
            setEditMode(false);
            }} type="submit" value="Submit" />
        </form>
      </Card>
    }
    
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