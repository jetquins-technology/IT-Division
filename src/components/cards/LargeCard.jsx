import React from 'react'
import styles from '../../styles/card.module.css'
import { IoIosArrowForward } from 'react-icons/io'
function LargeCard({src,heading,para}) {
  return (
    <div className={styles.card_item}>
           <figure>
                <img src={src} alt="image"/>
                </figure>
                <h1>{heading}</h1>
                <p>{para}</p>
                <a href='#'>Learn More <IoIosArrowForward /></a>
            
    </div>
  )
}

export default LargeCard