import React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';

function TodoItem(props) {
    const [editMode, setEditMode] = React.useState(false);
  
    if (!editMode) {
      return <Card>
      <button onClick={() => {setEditMode(!editMode)}}>Edit</button>
      <span>{editMode.toString()}</span>
      <span>{props.title}</span>
      <span>{props.completed}</span>
      <span>{props.description}</span>
      <span>{props.createdOn}</span>
    </Card>
    } else {
      return <Card>
        <form>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <label>
            Completed:
            <input type="checkbox" name="completed" />
          </label>
          <button onClick={() => {setEditMode(!editMode)}}>Cancel</button>
          <input onClick={() => {setEditMode(!editMode)}} type="submit" value="Submit" />
        </form>
      </Card>
    }
    
  }

  TodoItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    createdOn: PropTypes.string,
    completed: PropTypes.bool,
  }
  
export default TodoItem;