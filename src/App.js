import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {ACTIONS,ORIGINALS} from './urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost imgUrl={ORIGINALS}  title="Netflix Originals"/>
      <RowPost imgUrl={ACTIONS} title="Action" smallClass/>

    </div>
  )
}

export default App
