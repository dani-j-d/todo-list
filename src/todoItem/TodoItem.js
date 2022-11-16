import Card from '@mui/material/Card';
import PropTypes from 'prop-types';


function TodoItem(props) {
    return <Card>
      <span>{props.title}</span>
      <span>{props.completed}</span>
      <span>{props.description}</span>
      <span>{props.createdOn}</span>
    </Card>
  }

  TodoItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    createdOn: PropTypes.string,
    completed: PropTypes.bool,
  }
  
export default TodoItem;