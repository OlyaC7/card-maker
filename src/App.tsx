import React from 'react'
import './App.css'
import TopPanel from './components/TopPanel/topPanel'
import MainPanel from './components/MainPanel/MainPanel'
import SideBar from './components/SideBar/sideBar'

function App() {
  return (
    <div className="App">
      <TopPanel />
      <div className="MainBlock">
        <SideBar />
        <MainPanel />
      </div>
    </div>
  )
}

export default App
