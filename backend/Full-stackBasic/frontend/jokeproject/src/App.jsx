import React, { useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios'
function App() {
  const [jokes,setJokes]=useState([])
  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
    }).catch((err)=>{
        console.log(err);
    })
  })
  return (
    <div>
      <h1>hello world</h1>
      <div>JOKES:{jokes.length}</div>
      {
        jokes.map((joke,index)=>(
          <div key={jokes.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>

          </div>
        ))
      }
    </div>
  )
}

export default App
