import React from 'react'
import styles from './title-bold.module.css'
const TitleBold=({children})=>(
    <h2 className={styles.bold} >{children}</h2>
)
export default TitleBold;