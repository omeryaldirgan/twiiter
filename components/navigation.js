import React from 'react';

import NavButton from './nav-button';
import TextTitle from './text-title';
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
                <TextTitle>Home</TextTitle>
            </NavButton>
            <NavButton notify={17} selected={selectedKey==="notifications"}>
                <Notifications/>
                <TextTitle>Notifications</TextTitle>
            </NavButton>
            <NavButton selected={selectedKey==="message"}>
                <Message/>
                <TextTitle>Message</TextTitle>
            </NavButton>
            <NavButton selected={selectedKey==="bookmarks"}>
                <Bookmarks/>
                <TextTitle>Bookmarks</TextTitle>
            </NavButton>
            <NavButton selected={selectedKey==="lists"}>
                <Lists/>
                <TextTitle>Lists</TextTitle>
            </NavButton>
        </nav>
    )
}
  
export default Navigation