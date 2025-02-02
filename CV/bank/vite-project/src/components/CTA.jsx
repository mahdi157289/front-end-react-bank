import React from 'react'
import styles from '../style';
import Button from './button';
const CTA = () =>  (
    < section className={`${styles.Center} ${styles.marginY} ${styles.padding} sm:flex-row flex-row bg-black-gradient-2 rounded-[20px] box-shadow `} >
       <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2} `}>Let’s try our service now!.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
       </div>
       <div className={`flex justify-end items-start sm:ml-10 ml-0 sm:mt-0 mt-1 `}>
        <Button />
       </div>
    </section>
  )


export default CTA
