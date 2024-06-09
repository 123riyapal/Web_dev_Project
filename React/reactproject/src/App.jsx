//   * it is class based components
 
// Class based components 
// import { Component } from "react";
// class App extends Component{
//   render(){
//     return (<>
//     hello My name is riya.
//     </>)
//   }
// }

// & this is how a react change code into js 

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// function App() {
//   return /*#__PURE__*/_jsxs("section", {
//     children: [/*#__PURE__*/_jsx("h1", {
//       children: "hello world"
//     }), /*#__PURE__*/_jsx("h2", {
//       children: "hello welcome"
//     })]
//   });
// }
// export default App;

// import React from "react";
// function App() {
//   return  React.createElement("section",
//     "null",
//     React.createElement("h1",null,"hello i am riya"),
//     React.createElement("p",null,"hello i am riya")

    
//   );
// }
// export default App;
// 
import Add from "./Add";
import UseStateHook from "./UseStateHook";
import Forms from "./Forms";
 function App() {
  return (
    <>
      {/* <Add /> */}
      {/* < UseStateHook/> */}
      {/* ***POPS SECTION  */}
       < Forms/>
      {/* Example of How we declare props  */}
      {/* // name="Riya Pal" 
      // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5fPhctwNLodS9VmAniEw_UiLWHgKs0fs1w&s" 
      // hobbies={["coding","reading","writting"]}
  
      //   <h1>use it make dynamic layout</h1>
      //   <p>Hello this is a example of properties </p> */}
      
    </>
  )
}
export default App;