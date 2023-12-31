import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const cardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' />
        in few easy steps.
      </h2>
      <p className={styles.paragraph}>
        Arcu tortor, purus in mattis at sed integer faucibus.
        Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-full h-full' />

    </div>
  </section>

)


export default cardDeal