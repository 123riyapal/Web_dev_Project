import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material'

import photo from "./avatar.jpg"
function SideBar() {
  const recentItems = (topic) => (
    <div className="sidebar__bottom_recents">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (

    <div className='sideBar'>
      <div className="sidebar_top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Tkz2O4xX33I8o-xqzcEIs22_HHb3gt7OIg&s" alt="" />
        <Avatar className="sidebar_avatar" src={photo} style={{ width: '60px', height: '60px' }} />
        <h2>Riya Pal</h2>
        <h3>riya00singh99@gmail.com</h3>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar_stat">
          <p>Profile Viewer</p>
          <p className='sidebar__statNumber'>110</p>
        </div>
        <div className="sidebar_stat">
          <p>Connections
            <p>connection with alumni</p>
          </p>

          <p className='sidebar__statNumber'>449</p>
        </div>

      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        <div className="recentItem">
          {recentItems("programming")}
          {recentItems("React Js")}
          {recentItems("Software Engineering")}
        </div>
      </div>
    </div>
  )
}

export default SideBar
