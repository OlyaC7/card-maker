import React from 'react'
import './App.css'
import TopPanel from './components/TopPanel/topPanel'
import MainPanel from './components/MainPanel/MainPanel'
import SideBar from './components/SideBar/sideBar'
import ToolBar from './components/ToolBar/toolbar'

function App() {
  return (
    <div className="App">
      <TopPanel />
      <div className="MainBlock">
        <SideBar />
        <ToolBar />
        <MainPanel />
      </div>
    </div>
  )
}

export default App
