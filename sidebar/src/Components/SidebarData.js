import React from 'react'
import '../App.css'
import HomeIcon from '@material-ui/icons/Home';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';

export const SidebarData = [
    {
        title: "Home",
        icon:<HomeIcon/>,
        link:"/home"
    },
    {
        title: "Mailbox",
        icon:<MarkunreadMailboxIcon/>,
        link:"/mailbox"
    },
    {
        title: "Dashboard",
        icon:<DashboardIcon/>,
        link:"/dashboard"
    },
    {
        title: "Friends",
        icon:<GroupIcon/>,
        link:"/friends"
    },
]

export default SidebarData