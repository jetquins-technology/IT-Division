import React from 'react'
import styles from '../../styles/services.module.css'
import { FaArrowRight } from 'react-icons/fa'
function WatchTower() {
  return (
    <div className={styles.watchtower_section}>
    <div className={styles.heading_text}>
           <h1>Optimize Your SOC Team's Efficiency  </h1>
           <h2>A Modern Solution for Today’s Evolving Threats</h2>
           <p>Partnering with a Managed Security Service Provider (MSSP) or using Extended Detection and Response (XDR) solutions can supplement your SOC team, providing additional monitoring and expertise. Provide continuous training, optimize workflows, and equip your team with the right tools to reduce burnout and improve effectiveness.</p>
         <div className={styles.demo_btn}>
         <button className={styles.demo_btn}>Get a Demo </button>
         <FaArrowRight />
         </div>
         </div>
       </div>
  )
}

export default WatchTower