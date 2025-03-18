import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NqtListUsers from './components/NqtListUsers'
import NqtNavBar from './components/NqtNavBar'
import NqtHome from './components/NqtHome'
import NqtCreateUser from './components/NqtCreateUser'
import NqtEditUser from './components/NqtEditUser'

export default function NqtApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>Nguyễn Quang Tâm - Mini Project</h1>
      <Router >
          <NqtNavBar />
          <hr/>
          <Routes>
            <Route path='/' element={<NqtHome></NqtHome>} />
            <Route path='/list-user' element={<NqtListUsers />} />
            <Route path='/create-user' element={<NqtCreateUser />} />
            <Route path='/edit-user/:id' element={<NqtEditUser />} />
          </Routes>
      </Router>
        
    </div>
  )
}
