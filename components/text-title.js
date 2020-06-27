import React from 'react'

import cn from 'classnames'

import styles from './text-title.module.css'


const TitleBold=({bold=true,children})=>(
    <h2 className={cn([styles.title, bold && styles.bold])} >{children}</h2>
)
export default TitleBold;