import React from 'react';

import NavButton from './nav-button';

import {Twitter,Home,Notifications,Message, Bookmarks, Lists} from './icons'

import styles from './nav.module.css'

const Navigation=()=>{
    return(
        <nav className={styles.nav}>
            <NavButton>
                <Twitter/>
            </NavButton>
            <NavButton>
                <Home/>
                <span>Home</span>
            </NavButton>
            <NavButton>
                <Notifications/>
                <span>Notifications</span>
            </NavButton>
            <NavButton>
                <Message/>
                <span>Message</span>
            </NavButton>
            <NavButton>
                <Bookmarks/>
                <span>Bookmarks</span>
            </NavButton>
            <NavButton>
                <Lists/>
                <span>Lists</span>
            </NavButton>
        </nav>
    )
}
  
export default Navigation