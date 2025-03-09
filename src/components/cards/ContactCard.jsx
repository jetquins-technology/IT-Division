import React from 'react'
import styles from '../../styles/card.module.css'
function ContactCard({icon,heading,item1,item2}) {
  return (
    <div className={styles.contact_card}>
        <div className={styles.contact_icon}>
        {icon}
        </div>
        <h1>{heading}</h1>
        <p>{item1}</p>
        <p>{item2}</p>
    </div>
  )
}

export default ContactCard