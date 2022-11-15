import PropTypes from 'prop-types';
import TodoItem from '../todoItem/TodoItem';

function TodoList(props) {
    return (
        <div>
            {props.items.map(item => <TodoItem {...item}></TodoItem>)}
        </div>
    );
}

TodoItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        createdOn: PropTypes.string,
        status: PropTypes.bool,
    })),
  }
  
export default TodoList;