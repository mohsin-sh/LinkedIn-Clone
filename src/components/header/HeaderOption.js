import { Avatar } from '@mui/material';
import React from 'react';
import './HeaderOptions.css';


const HeaderOption = ({avatar, Icon, title}) => {
    return (
        <div className="headerOptions">
            {Icon && <Icon className='headerOption-icon' />}
            {avatar && <Avatar className='headerOption-icon' src={avatar} />}
            <h3 className="headerOptions-title">{title}</h3>
        </div>
    ) 
}

export default HeaderOption
