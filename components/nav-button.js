import React from 'react';

import cn from 'classnames'

import Button from './button'

import styles from './nav-button.module.css'


function NavButton({notify,children,selected,...props}) {
    return(
      <Button {...props} className={cn(styles.NavButton,selected && styles.NavButtonSelected)}>{children}
      
      {notify && <span className={styles.notify}>{notify}</span>}

      
      </Button>     
    )
}
  
  export default NavButton;