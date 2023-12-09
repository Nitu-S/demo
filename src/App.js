import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${counter} times`;
  });
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

export default App;
