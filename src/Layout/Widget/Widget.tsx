import styles from './widget.module.css'

export const Widget = () => {
  return (
    <section className={styles['widget-area']}>
        <div className={styles['widget-profile']}>
        Profile stuff
        </div>
    </section>
  )
}
