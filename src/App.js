import './App.css';
import TodoList from './todoList/TodoList';

const dummyData = [

];

function App() {
  return (
    <div className="App">
      <TodoList items={[]}/>
    </div>
  );
}

export default App;
