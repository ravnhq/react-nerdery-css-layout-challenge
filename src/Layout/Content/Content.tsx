import styles from '../Layout.module.css'

export const Content = () => {
  return (
    <section className={styles['content']}>
    <div className={styles['search-bar']}>
      <input type="search" name='search' id='search' placeholder='Search' />
    </div>

    <div className={styles['recently-used']}> 
      <h2 className='primary-color title'>Recently Used</h2>
    </div>

    <div className={styles['recent-files']}> 
      <h2 className='primary-color title'>Recent Files</h2>
    </div>

    <div className={styles['share-w-me']}> 
      <h2 className='primary-color title'>Share with me</h2>
    </div>
  </section>
  )
}
