import React from 'react'
import "./App.css"
import "./index.css"
import {Brand,Navbar,Cta} from "./components"
import {Header,Footer,Blog,Feature,WhatGpt3,Possibility} from "./container"
function App() {
  return (
    <div className='App'>
          <div className='gradient__bg'>
          <Navbar/>
          <Header/>
          </div>
      <Brand/>
      <WhatGpt3/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
