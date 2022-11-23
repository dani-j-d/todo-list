import './App.css';
import TodoList from './todoList/TodoList';
import { Typography } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Typography>TODO List</Typography>
      <TodoList/>
    </div>
  );
}

export default App;
