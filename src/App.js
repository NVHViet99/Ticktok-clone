import "./App.css";
import TodoList from "./components/TodoList";
import TwowayBinding from "./components/TwowayBinding";
import UseEffect from "./components/UseEffect";
import UseStateF8 from "./components/UseStateF8";

function App() {
  return (
    <div className="App">
      Ticktok clone
      <UseStateF8 />
      <TwowayBinding />
      <TodoList />
      <UseEffect />
    </div>
  );
}

export default App;
