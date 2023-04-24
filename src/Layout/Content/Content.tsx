import { Circles, DSquares, Square } from '../Icons/Icons'
import styles from './content.module.css'

export const Content = () => {
  return (
  <section className={styles['content']}>
    <div className={styles['search-bar']}>
      <Square color='#858A9D' w='25' h='25'/>
      <input type="search" className={styles['search-bar-input']} name='search' id='search' placeholder='Search' />
    </div>

    <div className={styles['recently-used']}> 
      <h1 className={styles['header']}>Recently Used</h1>
      <div className={styles['box-group']}>
        <div className={styles['box']}>
          <div className={styles['box-icons']}>
            <DSquares/>
            <Circles/>
          </div>
          <div className={styles['box-title']}>
            App Project
          </div>
          <div className={styles['box-date']}>
            Created: 20.02.2020
          </div>
        </div>
        <div className={styles['box']}>
          <div className={styles['box-icons']}>
            <DSquares/>
            <Circles/>
          </div>
          <div className={styles['box-title']}>
            App Project
          </div>
          <div className={styles['box-date']}>
            Created: 20.02.2020
          </div>
        </div>
        <div className={styles['box']}>
          <div className={styles['box-icons']}>
            <DSquares/>
            <Circles/>
          </div>
          <div className={styles['box-title']}>
            App Project
          </div>
          <div className={styles['box-date']}>
            Created: 20.02.2020
          </div>
        </div>
      </div>
    </div>

    <div className={styles['recent-files']}> 
      <h1 className={styles['header']}>Recent Files</h1>
    </div>

    <div className={styles['share-w-me']}> 
      <h1 className={styles['header']}>Share with me</h1>
    </div>
  </section>
  )
}
