// //   * it is class based components
 
// // Class based components 
// // import { Component } from "react";
// // class App extends Component{
// //   render(){
// //     return (<>
// //     hello My name is riya.
// //     </>)
// //   }
// // }

// // & this is how a react change code into js 

// // import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // function App() {
// //   return /*#__PURE__*/_jsxs("section", {
// //     children: [/*#__PURE__*/_jsx("h1", {
// //       children: "hello world"
// //     }), /*#__PURE__*/_jsx("h2", {
// //       children: "hello welcome"
// //     })]
// //   });
// // }
// // export default App;

// // import React from "react";
// // function App() {
// //   return  React.createElement("section",
// //     "null",
// //     React.createElement("h1",null,"hello i am riya"),
// //     React.createElement("p",null,"hello i am riya")

    
// //   );
// // }
// // export default App;
// // 
// // import Add from "./Add";
// // import UseStateHook from "./UseStateHook";
// // import Forms from "./Forms";
// // import { createContext } from "react";
// // import { useState } from "react";
// // import ComponentC from "./propDrilling/ComponentC";
// // export const NameContext = createContext();
// // export const AgeContext =createContext();
// import Reducer from "./Reducer";
// function App() {
//   // const [name, setName] = useState("Riya Pal" );
//   // const age=12;
//   return (
//     // <NameContext.Provider value={name}>
//     //   <AgeContext.Provider value={age}>
//     //   <ComponentC />
//     //     </AgeContext.Provider>
//     // </NameContext.Provider>

//     <>
//     <Reducer></Reducer>
//     </>
//   );
// }export default App;

// import { useRef } from 'react';

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert('You clicked ' + ref.current + ' times!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );
// }

// import { useState, useRef } from 'react';

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         Start
//       </button>
//       <button onClick={handleStop}>
//         Stop
//       </button>
//     </>
//   );
// }
// import { useRef } from 'react';

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }
// import { useState, useRef } from 'react';

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <video
//         width="250"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   );
// }
import useFetch from "./useFetch";
import React from 'react'

function App() {
  const [data]=useFetch("https://official-joke-api.appspot.com/jokes/ten");
  return (
    <>
        {data ? (
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <strong>Setup:</strong> {item.setup} 🤔
                        <br />
                        <strong>Punchline:</strong> {item.punchline}😂

                    </li>
                ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
    </>
);}

export default App

