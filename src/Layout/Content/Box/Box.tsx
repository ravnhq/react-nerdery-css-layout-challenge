import React from 'react'
import { DSquares, Circles } from '../../Icons/Icons'
import styles from './box.module.css'

interface Props {
    name : string
    date : string
    size?: string
}

export const Box : React.FC<Props> = ( data : Props) => {
  return (
    <div className={styles['box']}>
    <div className={styles['box-icons']}>
      <DSquares/>
      <Circles/>
    </div>
    <div className={styles['box-title']}>
      {data.name}
    </div>
    <div className={styles['box-date']}>
      Created: {data.date}
    </div>
  </div>
  )
}
