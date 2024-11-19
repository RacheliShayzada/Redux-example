'use client';
import Image from "next/image";
import ShowCounter from "./components/ShowCounter/ShowCounter";
import ShowButtons from "./components/ShowButtons/ShowButtons"; 
import styles from './page.module.css'


export default function Home() {
  return (
    <div >
      <h1 className={styles.textHeader}>My Counter With Redux</h1>
      <ShowCounter/>
      <ShowButtons/>
    </div>
  );
}
