import React from 'react'
import './HeaderIcons.css'
import { Avatar } from '@mui/material'
function HeaderIcons({avatar,Icon,title}) {
  return (
    <div className='headerIcons'>
      {Icon && <Icon className="HeaderIcons_icons"/>}
      {avatar && <Avatar className='Avatar_Icon' src={avatar}/>}
        <h3 className='header__Icons__title'>{title}</h3>
    </div>
  )
}

export default HeaderIcons
