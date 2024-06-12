# Prop Drilling vs Context API


prop drilling is not useful method to pass props from parent component to chiled component the better way tan it is Contect Api or createContext().
In this we create context for who provide the data and use it in to direct the child component .
``` js
import { createContext } from "react";
import { useState } from "react";
import ComponentC from "./propDrilling/ComponentC";
export const ThemeContext = createContext();

function App() {
  const [name, setName] = useState("Riya Pal" );

  return (
    <ThemeContext.Provider value={name}>
      <ComponentC />
    </ThemeContext.Provider>
  );
}export default App;
```

``` js GrandChild.js
import {ThemeContext} from "../App"
function ComponentC() {
  return (
    <ThemeContext.Consumer>
      {(name)=>{
        return <h1>this is component from A: {name}
        </h1>
        
      }}
    </ThemeContext.Consumer>
  )
}

export default ComponentC
``` 
## useContext

where we required useContext ?

we apply useContext to make the contextAPI structure simple because in which we do not required nestin context if we want create more than on context 

Example : without using useContext Hook 
```js
import {ThemeContext} from "../App"
function ComponentC() {
  return (
    <ThemeContext.Consumer>
      {({name,age})=>{
        return <h1>this is component from A: {name} and {age}</h1>
        
      }}
    </ThemeContext.Consumer>
  )
}

export default ComponentC
```
Example : with help of useContext
```js
import {NameContext,AgeContext} from "../App"
import { useContext } from "react";
function ComponentC() {
  const name=useContext(NameContext);
  const age=useContext(AgeContext);
  return (
  <h1>  Hello, My Name is {name} and I am {age} Years Old.</h1>
  </>
  );
}

export default ComponentC

```