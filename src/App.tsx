import React from 'react'
import './App.css'
import TopPanel from './components/TopPanel/topPanel'
import MainPanel from './components/MainPanel/mainPanel'
import ToolBar from './components/ToolBar/toolbar'

function App() {
  return (
    <div className="App">
      <TopPanel />
      <div className="MainBlock">
        <ToolBar />
        <MainPanel />
      </div>
    </div>
  )
}

export default App
