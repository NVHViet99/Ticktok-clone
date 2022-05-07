// import { useContext } from "react";
import "./App.css";
// import ReactContext from "./components/Context";
// import { ThemeContext } from "./components/ThemeProvider";
import TodoWithContext from "./components/TodoWithContext";

function App() {
  // const context = useContext(ThemeContext);

  return (
    <div className="App">
      Ticktok clone
      {/* <button onClick={context.handleToggleTheme}>Toggle theme</button>
      <ReactContext /> */}
      <TodoWithContext />
    </div>
  );
}

export default App;
