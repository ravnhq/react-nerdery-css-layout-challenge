import { Table } from './Table/Table'
import { Box } from './Box/Box'
import { SingleSquare, Square } from '../Icons/Icons'

import styles from './content.module.css'
import { colors } from '../constants'

export const Content = () => {
  return (
  <section className={styles['content']}>
    <div className={styles['search-bar']}>
      <Square color={colors.LIGHTGRAY} w='25' h='25'/>
      <input type="search" className={styles['search-bar-input']} name='search' id='search' placeholder='Search' />
    </div>

    <div className={styles['recently-used']}> 
      <div className={styles['section-header']}>
        <h1 className={styles['header']}>Recently used</h1>
        <label>
          <SingleSquare />
          <SingleSquare />
        </label>
      </div> 
      <div className={styles['box-group']}>
        <Box name='Project #1' date='14.04.2023' />
        <Box name='Project #2' date='17.04.2023' />
        <Box name='Project #3' date='20.04.2023' />
        <Box name='Project #4' date='16.08.2023' />
      </div>
    </div>

    <div className={styles['recent-files']}> 
      <div className={styles['section-header']}>
        <h1 className={styles['header']}>Recent files</h1>
        <label>View All</label>
      </div> 
      <Table />
    </div>

    <div className={styles['share-w-me']}>
      <div className={styles['section-header']}>
        <h1 className={styles['header']}>Share with me </h1>
        <label>View All</label>
      </div> 
      <div className={styles['box-group']}>
        <Box name='Landing Page' date='14.04.2023' />
        <Box name='Illustration Pack' date='17.04.2023' />
        <Box name='CV Design' date='20.04.2023' />
      </div>
    </div>
  </section>
  )
}
