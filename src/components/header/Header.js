import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedinIcon from './../../img/linkedin-icon.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import Me from './../../img/me.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src={linkedinIcon} alt="" className="header-icon"/>
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption Icon={MessageIcon} title="Messaging" />
                <HeaderOption avatar={Me} title='Me' />
            </div>
        </div>
    )
}

export default Header
