import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcons from '@mui/icons-material/Notifications'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import "./Header.css"
import HeaderIcons from './HeaderIcons'
import photo from './avatar.jpg';
function Header() {
  return (
    <div className='header'>
      <div className="header__left__section">
        <LinkedInIcon style={{ color: '#3572EF', fontSize: '50px' ,objectFit:'contain'}} />
        <div className="search__bar">
        <SearchIcon />
        <input type="text" name="search" id="search" placeholder="Search..." />

        </div>
      </div>
      <div className="header__right__section">
        <HeaderIcons Icon={HomeIcon} title="Home"/>
        <HeaderIcons Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderIcons Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderIcons Icon={MessageIcon} title="Messaging"/>
        <HeaderIcons Icon={NotificationsIcons} title="Notification"/>
        <HeaderIcons avatar={photo} title="me"/>



      </div>
    </div>
  );
}

export default Header;
