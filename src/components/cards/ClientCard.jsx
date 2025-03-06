import React from 'react'
import styles from '../../styles/card.module.css'
import { TiPlus } from 'react-icons/ti'
function ClientCard({number,heading}) {
  return (
    <div className={styles.clientCard_box}>
        <div className={styles.client_text}>
        <h1>{number}<span>+</span></h1>
        <h2>{heading}</h2>
        </div>

    </div>
  )
}

export default ClientCard