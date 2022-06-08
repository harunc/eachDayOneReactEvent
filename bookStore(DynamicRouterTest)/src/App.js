import React from 'react'
import Batuhan from './components/Batuhan'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import NoMatch from './components/NoMatch'
function App() {
  return (<>
  <Header/>
  <Routes>
    <Route path='/' element={<Batuhan/>}/>
    <Route path='/:bookId' element={<Detail />}/>
    <Route path="*" element={<NoMatch/>}/>
  </Routes>
  
  </>
    

  )
}

export default App
