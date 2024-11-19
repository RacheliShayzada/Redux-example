"use client";

import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset} from '@/store'
import styles from './ShowButtons.module.css';

function ShowButtons() {
    const dispatch = useDispatch()
  return (
    <div className={styles.container}>
        <button onClick={()=>dispatch(increment())} className={styles.button}>Increment</button>
        <button onClick={()=>dispatch(decrement())} className={styles.button}>Decrement</button>
        <button onClick={()=>dispatch(reset())} className={styles.button}>Reset</button>
    </div>
  )
}

export default ShowButtons