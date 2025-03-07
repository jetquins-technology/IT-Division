import React from 'react'
import styles from '../../styles/services.module.css'
import faq from '../../assets/images/faq.jpg'
import Faq from '../../components/Faq'
function SupportServices() {
  return (
    <div className={styles.support_section}>
        <div className='flex justify-center md:justify-between  flex-wrap  p-4'>
          <div className='w-full sm:w-1/3 md:w-1/2'>
            <div className={styles.support_text}>
              <h1>Need Help?</h1>
              <h2>Cyber Security Development FAQ</h2>
              <figure>
                <img src={faq} alt="image" width={400}/>
              </figure>
            </div>
          </div>
          <div className='w-full sm:w-1/3 md:w-3/6'>
          <Faq/>
          </div>
        </div>
    </div>
  )
}

export default SupportServices