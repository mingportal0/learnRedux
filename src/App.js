import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr/>
      <TodoContainer />
    </div>
  );
}

export default App;
