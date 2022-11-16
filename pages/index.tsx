import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FrontPageVM from './pageVMs/FrontPageVM'

export default function Home() {
  return (
    <FrontPageVM />
  )
}
