import React from 'react'
import styles from '../../styles/card.module.css'

function SmallCards({src,heading,para}) {
  return (
       <div className={styles.card_section}>
         <div className={styles.card}>
                <img src={src} alt='image'/>
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
       </div>
  )
}

export default SmallCards