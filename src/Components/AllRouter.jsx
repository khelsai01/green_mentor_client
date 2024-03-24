import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tasks from './Tasks'
import Login from './Login'
import Register from './Register'
import Edit from './Edit'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/edit' element={<Edit />} />
        </Routes>
    </div>
  )
}

export default AllRouter