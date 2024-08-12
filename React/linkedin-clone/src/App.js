
import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import './App.css'
import Feed from "./components/Feed"
function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='app__body'>
        <SideBar/>
        <Feed/>
        
      </div>
    </div>
  )
}

export default App
