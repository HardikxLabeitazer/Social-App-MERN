import React from 'react'
import { Component } from 'react'
import { Navigate,Route } from 'react-router'
import NavBar from '../user/NavBar.'
import auth from './authhelper'
import Userauth from './Userauth'
const ProtectedRoutes = ({children}) => {

    const authenticated = auth.isAuthenticated();
    console.log('what',authenticated)
    if(authenticated){
        return <>
            
            <Userauth children={<>
                <NavBar/>
                { children}
            </>}/>
            
            
            
        </>
    }else{
       return <Navigate to={"/signin"} replace/>
    }
  
}

export default ProtectedRoutes