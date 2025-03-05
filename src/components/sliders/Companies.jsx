import React from 'react'
import styles from '../../styles/slide.module.css'
function Companies({src}) {
  return (
    <div class={styles.marquee_container}>
    <div class={styles.marquee_content}>
        <img src={src} alt="Image"/>
    </div>
</div>
  )
}

export default Companies