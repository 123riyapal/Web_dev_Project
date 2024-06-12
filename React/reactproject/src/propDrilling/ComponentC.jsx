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
