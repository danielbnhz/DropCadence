import { useState } from 'react'
import Header from './Components/Header.tsx'
import Banner from './Components/Banner.tsx'
import './App.css'
import ArtistCard from './Components/ArtistCard.tsx'

function App() {

  return (
  <>
    <Header />
    <Banner />
    <ArtistCard />
  </>
  )
}

export default App
