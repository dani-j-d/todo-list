import Card from '@mui/material/Card';
import PropTypes from 'prop-types';

// title -> string
// description -> string
// status -> boolean
// created on date -> string


function TodoItem(props) {
    return <Card>
      <span>{props.title}</span>
      <span>{props.status}</span>
      <span>{props.description}</span>
      <span>{props.createdOn}</span>
    </Card>
  }

  TodoItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    createdOn: PropTypes.string,
    status: PropTypes.bool,
  }
  
export default TodoItem;