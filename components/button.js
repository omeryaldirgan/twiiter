import React from 'react';

import cn from 'classnames';

import styles from './button.module.css';

function Button({full,children,className,...props}) {
    return <button className={cn(styles.button,className,full && styles.full)} {...props}>{children}</button>
}
  
  export default Button