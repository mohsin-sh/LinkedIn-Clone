import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';
import Banner from './../../img/banner.jpg'

const Sidebar = () => {

    const recentitem = (topic) =>( 
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src={Banner} alt="" />
                <Avatar className="sidebar-avatar"/>
                <h2>Mohsin Shah</h2>
                <h4>mohsinshah@gmail.com</h4>
            </div> 

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-statnumber">2,542</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-statnumber">2,352</p>
                </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentitem('reactjs')}
                {recentitem('programming')}
                {recentitem('softwareengineering')}
                {recentitem('design')}
                {recentitem('developer')}
            </div>
            
        </div>
    )
}

export default Sidebar
