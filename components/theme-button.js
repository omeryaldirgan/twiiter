import React from 'react';

import cn from 'classnames'

import Button from './button'

import styles from './theme-button.module.css'


function NavButton({big,children,...props}) {
    return(
      <Button {...props} className={cn(styles.button,big && styles.big)}>{children}</Button>     
    )
}
  
export default NavButton;