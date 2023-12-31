import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarded = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-element hover:scale-90`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full `}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-popins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
            <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain'/>
        </div>
        <p className='font-popins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
          
        </p>
      </div>
    </div>
  )
}

export default GetStarded