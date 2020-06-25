import React from 'react';

import NavButton from './nav-button';
import TitleBold from './title-bold';
import {Twitter,Home,Notifications,Message, Bookmarks, Lists} from './icons'

import styles from './nav.module.css'

const Navigation=({selectedKey})=>{
    return(
        <nav className={styles.nav}>
            <NavButton>
                <Twitter/>
            </NavButton>
            <NavButton selected={selectedKey==="home"}>
                <Home/>
                <TitleBold>Home</TitleBold>
            </NavButton>
            <NavButton notify={17} selected={selectedKey==="notifications"}>
                <Notifications/>
                <TitleBold>Notifications</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey==="message"}>
                <Message/>
                <TitleBold>Message</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey==="bookmarks"}>
                <Bookmarks/>
                <TitleBold>Bookmarks</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey==="lists"}>
                <Lists/>
                <TitleBold>Lists</TitleBold>
            </NavButton>
        </nav>
    )
}
  
export default Navigation