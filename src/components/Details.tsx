import React from 'react'
import styles from './Details.module.css'

const Details = ({ info, desc }: { info: string, desc: string }) => {
  return (
    <div className={styles.details}>
      <span>{info}</span>
      <span>{desc}</span>
    </div>
  )
}

export default Details