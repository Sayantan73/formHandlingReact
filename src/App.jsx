import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Labs } from './components/Labs'
import { Contact } from './components/Contact'
import { NotFound } from './components/NotFound'
import { MainHeader } from './components/MainHeader'

function App() {

  return (
    <>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/labs">Labs</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<MainHeader />}>
            <Route index element={<Home />} />      {/* default route  */}
            <Route path='/about' element={<About />} />
            <Route path='/labs' element={<Labs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
