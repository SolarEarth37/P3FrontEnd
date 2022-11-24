import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainVM from './MainVM'

export default function Home() {
  return (
    <BrowserRouter>
      <MainVM />
    </BrowserRouter>
  )
}
