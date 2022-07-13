import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const Unprotected = () => {
  
    const user = useSelector( store => store.user.data )
    

    if ( user === null ){
        return(
            <Outlet/>
        )
    } else{
        if ( (localStorage.getItem('jwtToken')) 
            && ( (localStorage.getItem('sessionImage') == 'null') 
                || (localStorage.getItem('sessionCity') == 'null') 
                || (localStorage.getItem('sessionAddress') == 'null') ) ) {
            return (
                <Navigate to='/info' />
            )
        } else {
            return (
                <Navigate to='/' />
            )
        }
    }
    
}

export default Unprotected