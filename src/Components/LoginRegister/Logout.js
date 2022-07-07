import React from 'react'
import userSlice from '../../store/user'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Logout = () => {
  const dispatch = useDispatch()

  // Menghapus token dri LS
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('sessionId')
  localStorage.removeItem('sessionName')
  localStorage.removeItem('sessionCity')
  localStorage.removeItem('sessionImage')
  // Mengupdate user store jadi NULL
  dispatch( userSlice.actions.removeUser() )

  return (  
    <Navigate to="/" />
  )
}

export default Logout