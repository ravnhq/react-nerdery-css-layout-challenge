import React from 'react'
import { SingleSquare , Circles } from '../../Icons/Icons'
import styles from './smallcard.module.css'
import { colors } from '../../constants'

interface Props {
    name : string
    date : string
    size?: string
}

export const SmallCard : React.FC<Props> = ( data : Props) => {
  return (
  <div className={styles['small-card']}>
    <div className={styles['small-card-icons']}>
      <SingleSquare color={colors.ORANGE} w='45' h='36'/>
      <Circles quantity={3}/>
    </div>
    <div className={styles['small-card-title']}>
      {data.name}
    </div>
    <div className={styles['small-card-date']}>
      Created: {data.date}
    </div>
  </div>
  )
}
