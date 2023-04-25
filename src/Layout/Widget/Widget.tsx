import { Graph, SingleSquare } from '../Icons/Icons'
import styles from './widget.module.css'
import { colors } from '../constants'

export const Widget = () => {
  return (
    <section className={styles['widget-area']}>
      <div className={styles['section-header']}>
        <h1 className={styles['header']}>Profile Info</h1>
      </div> 
      <div className={styles['divider']} />

      <div className={styles['storage-graph']}>
        <div className={styles['section-header']}>
          <h1 className={styles['header']}>Storage</h1>
        </div> 
        <Graph />
        <div className={styles['graph-metric']}>
          <SingleSquare color={colors.ORANGE} rounded={true}/>
          <label className={styles['graph-metric-label']}>Documents <span>720 files</span></label>
          <button>200GB</button>
        </div>
        <div className={styles['divider']} />

        <div className={styles['graph-metric']}>
          <SingleSquare color={colors.NAVYBLUE} rounded={true}/>
          <label className={styles['graph-metric-label']}>Documents <span>720 files</span></label>
          <button>125GB</button>
        </div>
        <div className={styles['divider']} />

        <div className={styles['graph-metric']}>
          <SingleSquare color={colors.GREEN} rounded={true}/>
          <label className={styles['graph-metric-label']}>Documents <span>720 files</span></label>
          <button>75GB</button>
        </div>
        <div className={styles['divider']} />

        <div className={styles['graph-metric']}>
          <SingleSquare color={colors.DARKGRAY} rounded={true}/>
          <label className={styles['graph-metric-label']}>Documents <span>720 files</span></label>
          <button>50GB</button>
        </div>
      </div>
    </section>
  )
}
