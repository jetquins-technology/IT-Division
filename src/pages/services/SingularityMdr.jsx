import React from 'react'
import styles from '../../styles/services.module.css'
import { FaArrowRight } from "react-icons/fa";
function SingularityMdr() {
  return (
    <div className={`${styles.singularity_section}`}>
      <div className={styles.heading_text}>
        <h1>Singularity™ MDR </h1>
        <h2>A Modern Solution for Today’s Evolving Threats</h2>
        <p>Singularity MDR provides a sustainable solution that delivers broader detection and response coverage, tailored to provide customers every advantage to stay secure. Industry-recognized MDR and threat hunting expertise. Get more signal and less noise with fewer false positives, fewer alerts, and more actionable outcomes</p>
      <div className={styles.demo_btn}>
      <button className={styles.demo_btn}>Get a Demo </button>
      <FaArrowRight />
      </div>
      </div>
    </div>  
  )
}

export default SingularityMdr