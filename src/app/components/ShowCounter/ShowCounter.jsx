"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import styles from './ShowCounter.module.css'

function ShowCounter() {
    const counter = useSelector((state)=> state.counter.value)

  return (
    <div>
        <h1 className={styles.text}><strong>Counter: </strong>{counter || 0}</h1>
    </div>
  )
}

export default ShowCounter