import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [action, setAction] = useState("reset"); // New state to track the last action

  const increment = () => {
    setCount(count + 1);
    setMessage("");
    setAction("incremented"); // Mark as incremented
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
      setAction("decremented"); // Mark as decremented
    } else {
      setMessage("The value cannot be less than 0");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("");
    setAction("reset"); // Mark as reset
  };

  return (
    <div className="container">
      <h1 className="heading">Counter</h1>
      <h1 className={`count ${action}`}>{count}</h1>
      <section className="button-group">
        <button className="increment" onClick={increment}>+</button>
        <button className="decrement" onClick={decrement}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </section>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
