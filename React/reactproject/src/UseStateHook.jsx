import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const [errorMessage, setErrorMessage] = useState("");

//     const increase = () => {
//         setCount(count + 1);
//         setErrorMessage(""); // Reset error message
//     };

//     const decrease = () => {
//         if (count > 0) {
//             setCount(count - 1);
//             setErrorMessage(""); // Reset error message
//         } else {
//             setErrorMessage("Value cannot go negative");
//         }
//     };

//     return (
//         <section>
//             <h1 className="count">{count}</h1>
//             <button onClick={increase}>+</button>
//             <button onClick={decrease}>-</button>
//             {errorMessage && <p>{errorMessage}</p>}
//         </section>
//     );
// }

// function UseStateHook() {
//     return (
//         <>
//             <Counter />
//         </>
//     );
// }

// export default Hook;
