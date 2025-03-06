import React from 'react'
import styles from '../../styles/card.module.css'
function ImageCard({src,heading}) {
  return (
    <div className={styles.imageCard_section}>
        <figure>
            <img src={src}alt='image'/>
        </figure>
        <span>{heading}</span>
    </div>
  )
}

export default ImageCard